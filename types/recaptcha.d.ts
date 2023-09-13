// Create a custom declaration file, e.g., recaptcha.d.ts

declare global {
  interface Window {
    recaptchaVerifier: any; // Replace 'any' with the correct type if available
  }
}

declare var auth: any; // Replace 'any' with the correct type if available
