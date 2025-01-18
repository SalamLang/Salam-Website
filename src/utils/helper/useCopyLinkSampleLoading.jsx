import { useState } from "react";
import { copyToClipboard } from "./handlers";
import toast from "react-hot-toast";

export default function useCopyLinkSampleLoading() {
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state

  const handleCopyClick = (text) => {
    if (!text || typeof text !== "string") {
      toast.error("متن مورد نظر برای کپی معتبر نمی باشد");
      return;
    }

    // Simulate a delay (e.g., 5 seconds)
    setIsLoading(true);
    setTimeout(() => {
      copyToClipboard(text); // Copy text to clipboard
      toast.success("لینک با موفقیت کپی شد");
      setIsLoading(false); // End the loading state
    }, 5000);
  };

  return {
    isLoading,
    handleCopyClick,
  };
}
