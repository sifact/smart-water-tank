"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// import OtpInput from "otp-input-react";
// const OtpInput = require("otp-input-react");

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsFillShieldLockFill } from "react-icons/bs";
import toast from "react-hot-toast";
const { RecaptchaVerifier, signInWithPhoneNumber } = require("firebase/auth");
import { auth } from "@/firebse/firebase.config";

import OtpInput from "react-otp-input";

import UserForm from "./userForm";
import axios from "axios";

// import { setVerificationCookie } from "@/lib/utils";

// import { useUserAuth } from "@/context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState<any>("");
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const isDisabled = error !== "" || number === "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = window.location.origin;

        const response = await axios.get(`${baseUrl}/api/users/${number}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (number.length > 0) fetchData();
  }, [number]);

  function setUpRecaptha(number: any) {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,

      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      }
    );
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    // recaptchaVerifier.render();
  }

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      if (inputValue.length === 11 || inputValue === "") {
        setError(""); // No error if input is 11 digits or empty
      } else {
        setError("আপনার মোবাইল নাম্বার সঠিক নয়");
      }
      setNumber(inputValue);
    } else {
      setError("মোবাইল নাম্বারে শুধু সংখ্যা থাকবে");
    }
  };

  const getOtp = async (e: any) => {
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    const formatNumber = "+" + "88" + number;
    try {
      if (user) {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem("user_data", JSON.stringify(user));

          const url = new URL(window && window.location.href);

          const destinationParam = url.searchParams.get("destination");
          if (destinationParam) {
            router.push(destinationParam);
          } else {
            router.push("/");
          }
        }
        router.refresh();
      } else {
        const response = await setUpRecaptha(formatNumber);
        setResult(response);
        toast.success("OTP sent");
        setFlag(true);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e: any) => {
    e.preventDefault();
    if (typeof window !== undefined) {
      setError("");
      if (otp === "" || otp === null) return;
      try {
        await result.confirm(otp);
        // setVerificationCookie();
        // setFlag(false);
        setShowForm(true);
        // router.push("/");
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div className="h-[calc(100vh-87.66px)] w-full flex flex-col justify-center items-center  container mx-auto">
        <div id="recaptcha-container"></div>
        <div
          className={`${
            !flag && !showForm ? "flex" : "hidden"
          } flex-col  gap-6 w-full sm:w-[400px] `}
        >
          {/* <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                   <BsTelephoneFill size={30} />
                 </div> */}
          <label htmlFor="" className="font-bold text-xl text-gray-800 ">
            মোবাইল নাম্বার দিয়ে এগিয়ে যান
          </label>
          <Input
            className=""
            placeholder="01XXXXXXXXX"
            value={number}
            onChange={(e) => handleChange(e)}
            //  onChange={(e) => setNumber(e.target.value)}
          />
          {error && <div className="text-red-500">{error}</div>}
          <Button
            onClick={(e: any) => getOtp(e)}
            disabled={isDisabled}
            variant="customTertiary"
            size="default"
          >
            {/* {loading && (
                     <CgSpinner size={20} className="mt-1 text-white animate-spin" />
                   )} */}
            <span>সাবমিট করুন</span>
          </Button>
        </div>

        <div
          className={`${
            flag && !showForm ? "flex" : "hidden"
          } flex-col gap-2 w-full sm:w-[400px]`}
        >
          <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
            <BsFillShieldLockFill size={30} />
          </div>

          <h1 className="text-xl text-gray-800 font-bold">
            মোবাইল নাম্বার কনফার্ম করুন
          </h1>
          <label htmlFor="otp" className="font-bold text-gray-800 opacity-60 ">
            {number} ফোনে পাঠানো 6 সংখ্যার কোডটি লিখুন
          </label>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            // renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "2px solid gray",
              borderRadius: "2px",
              width: "50px",
              height: "50px",
              marginRight: 0,
            }}
            containerStyle={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />

          {error && <p className="text-red-500 ">{error}</p>}

          <Button
            onClick={(e) => verifyOtp(e)}
            variant="customTertiary"
            size="default"
          >
            {/* {loading && <CgSpinner size={20} className="mt-1 animate-spin" />} */}
            <span>সাবমিট করুন</span>
          </Button>
        </div>

        <div
          className={`${
            showForm ? "flex" : "hidden"
          } flex-col gap-2 w-full sm:w-[400px]`}
        >
          <UserForm initialData={null} number={number} />
        </div>
      </div>
    </>
  );
};
export default PhoneSignUp;
