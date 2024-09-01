import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../common/Badge";
import Logo from "../../../public/logowhite.svg";
import { Button } from "../common/Button";
import { useEffect, useMemo, useState } from "react";
import VersionItem from "./VersionItem";
import toast, { LoaderIcon } from "react-hot-toast";

const ControlsVersion = () => {
  const [isOpenVersion, setIsOpenVersion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currectVersion, setCurrectVersion] = useState("v1");
  const [currentVersionObject, setCurrentVersionObject] = useState(null);

  const versions = useMemo(
    () => [
      { id: 1, title: "نسخه ۰.۱", version: "v1" },
      { id: 2, title: "نسخه ۰.۲", version: "v2" },
      { id: 3, title: "نسخه ۰.۳", version: "v3" },
    ],
    []
  );

  // Use useEffect to update currentVersionObject when currectVersion changes
  useEffect(() => {
    const foundVersion = versions.find(
      (version) => version.version === currectVersion
    );
    setCurrentVersionObject(foundVersion);
  }, [currectVersion, versions]); // Dependency array to run effect only when currectVersion changes

  const handleStartClick = async () => {
    setIsLoading(true); // Set loading state to true at the beginning

    // Generate a random number between 1 and 2
    const randomNumber = Math.floor(Math.random() * 2) + 1;

    // Simulate API call with a promise
    const fakeApiCall = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("api call");
        if (randomNumber === 1) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });

    try {
      await toast.promise(fakeApiCall, {
        loading: "در حال تغییر نسخه..",
        success: () => {
          setIsOpenVersion(false);
          return "فرایند تغییر نسخه با موفقیت انجام شد!";
        },
        error: () => {
          setIsOpenVersion(false);
          return "خطا در تغییر نسخه!";
        },
      });
    } catch (err) {
      setIsLoading(false); // Set loading state to false if promise rejects
    } finally {
      setIsLoading(false); // Set loading state to false after promise resolves or rejects
    }
  };

  return (
    <div className="w-full h-auto flex justify-between items-center">
      <div className="min-w-[110px] min-h-[110px] flex justify-center items-center bg-bg-main rounded-2xl">
        <Logo className="scale-75 " />
      </div>
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
        <h1 className="text-xl font-Estedad-Medium">زبان برنامه نویسی سلام</h1>
        <div className="flex justify-start items-center gap-5">
          <Badge
            intent="primary"
            size="medium"
            className={`!py-1.5 block relative !px-3 cursor-pointer transition-colors duration-300 select-none ${
              isOpenVersion &&
              "!bg-primary !text-white !rounded-t-xl !rounded-b-none"
            }`}
            onClick={() => setIsOpenVersion(!isOpenVersion)}
          >
            <span className="font-Estedad-Medium">تعویض نسخه</span>
            <AnimatePresence>
              {isOpenVersion && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute w-full h-auto flex flex-col bg-light-primary justify-center items-center inset-x-0 top-7 rounded-b-lg backdrop-blur-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  {versions.map((item) => (
                    <VersionItem
                      key={item.id}
                      active={item.version === currectVersion}
                      lastItem={item.id === versions.length}
                      onClick={() => setCurrectVersion(item.version)}
                    >
                      {item.title}
                    </VersionItem>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </Badge>
          <p className="text-base opacity-45">{currentVersionObject?.title}</p>
        </div>
      </div>
      <Button
        intent="primary"
        size="medium"
        rounded="full"
        className="text-nowrap"
        onClick={handleStartClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderIcon className="!w-5 !h-5 !my-1 !mx-8" />
        ) : (
          "شروع کردن"
        )}
      </Button>
    </div>
  );
};

export default ControlsVersion;
