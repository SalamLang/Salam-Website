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
