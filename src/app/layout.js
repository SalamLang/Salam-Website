"use client";

import { useEffect } from "react";
import "./globals.css"; // اگر فایل استایل‌ها در مسیر اصلی باشد
import { usePathname } from "next/navigation";
import nProgress from "nprogress";

function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    // Function to start the nProgress loading bar
    const handleStart = () => {
      nProgress.start();
    };

    // Function to stop the nProgress loading bar
    const handleComplete = () => {
      nProgress.done();
    };

    // Start the loading bar when the path changes
    handleStart();

    // Stop the loading bar when the new content is loaded
    handleComplete();

    // Cleanup function to stop the loading bar on unmount
    return () => {
      nProgress.done();
    };
  }, [pathname]); // Dependency array to re-run effect on pathname change

  return <>{children}</>;
}

export default Layout;
