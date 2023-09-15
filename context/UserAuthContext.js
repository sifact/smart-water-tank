// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const {
//   onAuthStateChanged,
//   signOut,

//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } = require("firebase/auth");
// import { auth } from "@/firebse/firebase.config";

// const userAuthContext = createContext();

// export function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   function logOut() {
//     return signOut(auth);
//   }

//   function setUpRecaptha(number) {
//     const recaptchaVerifier = new RecaptchaVerifier(
//       auth,

//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // onSignInSubmit();
//         },
//       }
//     );
//     return signInWithPhoneNumber(auth, number, recaptchaVerifier);
//     // recaptchaVerifier.render();
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       console.log("Auth", currentuser);
//       setUser(currentuser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider
//       value={{
//         user,

//         logOut,

//         setUpRecaptha,
//       }}
//     >
//       {children}
//     </userAuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }
