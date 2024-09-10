import { useEffect, useState } from "react";

export default function useOS() {
  const [clientOS, setClientOS] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "desktop"; // default value

    if (/android/i.test(userAgent)) {
      os = "Android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "iOS";
    } else if (/Mac/i.test(userAgent)) {
      os = "Mac";
    } else if (/Win/i.test(userAgent)) {
      os = "Windows";
    } else if (/Linux/i.test(userAgent)) {
      os = "Linux";
    }

    setClientOS(os);
  }, []);

  return clientOS;
}
