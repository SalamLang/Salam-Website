import toast from "react-hot-toast";

export const convertToPersianNumbers = (input) => {
  const englishToPersianDigits = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return input
    .split("")
    .map((char) => englishToPersianDigits[char] || char)
    .join("");
};

export const convertEnglishNumbersToPersian = (input) => {
  const englishToPersianMap = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  return String(input)?.replace(
    /[0-9]/g,
    (digit) => englishToPersianMap[digit]
  );
};

export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("متن با موفقیت کپی شد!");
    } catch (err) {
      toast.error("مشکلی در کپی کردن متن به وجود آمد.");
    }
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      toast.success("متن با موفقیت کپی شد!");
    } catch (err) {
      toast.error("مشکلی در کپی کردن متن به وجود آمد.");
    }

    document.body.removeChild(textArea);
  }
};
