import platform from "platform";

export const getOS = () => {
  const os = platform.os.family;
  if (os) {
    if (/Android/i.test(os)) return "Android";
    if (/iOS/i.test(os)) return "iOS";
    if (/Windows|Win32|Win64/i.test(os)) return "Windows";
    if (/Mac/i.test(os)) return "MacOS";
    if (/Linux/i.test(os)) return "Linux";
    if (/UNIX/i.test(os)) return "UNIX";
  }
  return "Unknown OS";
};
