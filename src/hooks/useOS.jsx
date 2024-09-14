import { useEffect, useState } from "react";

export default function useOS() {
  const [clientOS, setClientOS] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "desktop"; // default value

    if (/android/i.test(userAgent)) {
      os = "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "ios";
    } else if (/Mac/i.test(userAgent)) {
      os = "mac";
    } else if (/Win/i.test(userAgent)) {
      os = "windows";
    } else if (/Linux/i.test(userAgent)) {
      os = "linux";
    } else {
      os = "unknown os";
    }

    setClientOS(os);
  }, []);

  return clientOS;
}
