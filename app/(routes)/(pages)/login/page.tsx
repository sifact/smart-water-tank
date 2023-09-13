"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "otp-input-react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "@/context/UserAuthConext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsFillShieldLockFill } from "react-icons/bs";
import toast from "react-hot-toast";
const { signInWithPhoneNumber } = require("firebase/auth");
import { checkVerificationCookie, setVerificationCookie } from "@/lib/utils";
import { auth } from "@/firebse/firebase.config";

// import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState<any>("");
  const router = useRouter();

  const isDisabled = error !== "" || number === "";

  const { setUpRecaptha } = useUserAuth();
  // const navigate = useNavigate();

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
      const verified = checkVerificationCookie();
      if (verified) {
        // User is verified, now attempt to log in
        console.log("hello");
        const user = await signInWithPhoneNumber(formatNumber);
        console.log(user);
        if (user) {
          // User is successfully logged in
          router.push("/");
        } else {
          setError("Failed to log in.");
        }
      } else {
        // User is not verified, send OTP and perform verification
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
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      setVerificationCookie();
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };
  console.log(flag);
  return (
    <>
      <div className="h-[calc(100vh-87.66px)] w-full flex flex-col justify-center items-center ">
        <div
          className={`${!flag ? "flex" : "hidden"} flex-col gap-6 w-[400px] `}
        >
          <div id="recaptcha-container"></div>
          {/* <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                   <BsTelephoneFill size={30} />
                 </div> */}
          <label htmlFor="" className="font-bold text-xl text-gray-800 ">
            মোবাইল নাম্বার দিয়ে এগিয়ে যান
          </label>
          <Input
            placeholder="01XXXXXXXXX"
            value={number}
            onChange={handleChange}
            //  onChange={(e) => setNumber(e.target.value)}
          />
          {error && <div className="text-red-500">{error}</div>}
          <Button
            onClick={getOtp}
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

        <div className={`${flag ? "flex" : "hidden"} flex-col gap-6 w-[400px]`}>
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
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            inputStyles={{
              border: "2px solid gray",
              borderRadius: "2px",
              width: "50px",
              height: "50px",
              marginRight: 0,
              "&:focus": {
                outline: "none",
                border: "2px solid #00AB50",
              },
            }}
            className="otp-container w-full justify-between"
          ></OtpInput>
          {error && <p className="text-red-500 ">{error}</p>}

          <Button onClick={verifyOtp} variant="customTertiary" size="default">
            {/* {loading && <CgSpinner size={20} className="mt-1 animate-spin" />} */}
            <span>সাবমিট করুন</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PhoneSignUp;

// "use client";

// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";

// import "react-phone-input-2/lib/style.css";
// import OtpInput from "otp-input-react";
// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// const {RecaptchaVerifier, signInWithPhoneNumber} = require('firebase/auth');
// import { toast, Toaster } from "react-hot-toast";
// // import { auth } from "@/firebse/firebase.config";
// import { Input } from "@/components/ui/input";
// import { auth } from "@/firebse/firebase.config";
// import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/navigation'

// const App = () => {
//   const router = useRouter()
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   // const [user, setUser] = useState(null);

//   const [error, setError] = useState("");

//   const userJSON = localStorage.getItem("user");
//   const user = JSON.parse(userJSON!);

//   const handleChange = (e: any) => {
//     const inputValue = e.target.value;
//     if (/^\d+$/.test(inputValue) || inputValue === "") {
//       if (inputValue.length === 11 || inputValue === "") {
//         setError(""); // No error if input is 11 digits or empty
//       } else {
//         setError("Your phone number is not valid");
//       }
//       setPh(inputValue);
//     } else {
//       setError("Phone number must contain only numeric digits");
//     }
//   };

//   function onCaptchVerify() {
//     if (!(window as any).recaptchaVerifier) {
//       (window as any).recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response: any) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         }
//       );
//     }
//   }

//   function onSignup() {
//     setLoading(true);
//     onCaptchVerify();
//     console.log(ph);
//     console.log(auth.currentUser)

//       const appVerifier = (window as any).recaptchaVerifier;

//       const formatPh = "+" + "88" + ph;
//       console.log(formatPh);
//       signInWithPhoneNumber(auth, formatPh, appVerifier)
//         .then((confirmationResult: any) => {
//           (window as any).confirmationResult = confirmationResult;
//           setLoading(false);
//           setShowOTP(true);
//           toast.success("OTP sended successfully!");
//         })
//         .catch((error: any) => {
//           console.log(error);
//           setLoading(false);
//         });

//   }

//   function onOTPVerify() {
//     setLoading(true);
//     (window as any).confirmationResult
//       .confirm(otp)
//       .then(async (res: any) => {
//         console.log(res);
//         // setUser(res.user);
//         const user = res.user;
//         const userJSON = JSON.stringify(user);
//         localStorage.setItem("user", userJSON);
//         setLoading(false);
//       })
//       .catch((err: any) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }
//   const isDisabled = error !== "" || ph === "";
//   return (
//     <section className=" flex items-center justify-center h-screen">
//       <div>
//         <Toaster toastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {user ? (
//           <h2 className="text-center text-white font-medium text-2xl">
//             👍Login Success
//           </h2>
//         ) : (
//           <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
//             {showOTP ? (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsFillShieldLockFill size={30} />
//                 </div>
//                 <label
//                   htmlFor="otp"
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Enter your OTP
//                 </label>
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   OTPLength={6}
//                   otpType="number"
//                   disabled={false}
//                   autoFocus
//                   className="opt-container border-primaryLight"
//                 ></OtpInput>
//                 <button
//                   onClick={onOTPVerify}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Verify OTP</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsTelephoneFill size={30} />
//                 </div>
//                 <label
//                   htmlFor=""
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Verify your phone number
//                 </label>
//                 <Input
//                   placeholder="number"
//                   value={ph}
//                   // onChange={(e) => setPh(e.target.value)}
//                   onChange={handleChange}
//                 />
//                 {error && <div className="text-red-500">{error}</div>}
//                 <Button
//                   onClick={onSignup}
//                   disabled={isDisabled}
//                   variant="custom"
//                   size="custom"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 text-white animate-spin" />
//                   )}
//                   <span>Send code via SMS</span>
//                 </Button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default App;
