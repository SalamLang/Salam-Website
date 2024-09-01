import { PlaygroundContextValue } from "@/utils/contexts/Playground";
import React, { useContext, useEffect } from "react";

const KeyPressAndClickFullScreen = () => {
  const { setIsHidden } = useContext(PlaygroundContextValue);

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log(`User pressed key: ${event.key}`);
      setIsHidden(false);
    };

    const handleClick = () => {
      console.log("User clicked on the screen");
      setIsHidden(false);
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleClick);
    console.log(`User pressed key: ${event.key}`);
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClick);
    };
  }, [setIsHidden]);

  return <div className="fixed inset-0 -z-50"></div>;
};

export default KeyPressAndClickFullScreen;
