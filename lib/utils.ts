import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Set a verification cookie when the user is verified
export function setVerificationCookie() {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // Set the expiration date (e.g., 30 days from now)
  document.cookie =
    "userVerified=true; expires=" + expirationDate.toUTCString() + "; path=/";
}

// Check for the verification cookie on subsequent requests
export function checkVerificationCookie() {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === "userVerified" && cookie[1] === "true") {
      // User is verified
      return true;
    }
  }
  // User is not verified
  return false;
}
