"use client";

import React, { useEffect } from "react";

function SidebarMenu() {
  useEffect(() => {
    const updateMenu = () => {
      const elements = document.querySelectorAll("#mark-down div");
      const menuWrapper = document.getElementById("menu-wrapper");

      menuWrapper.innerHTML = "";

      elements.forEach((el) => {
        const h1s = el.querySelectorAll("h1");

        h1s.forEach((h1) => {
          const li = document.createElement("li");
          li.innerHTML = h1.id;
          li.classList.add("cursor-pointer", "text-center");
          li.dataset.target = h1.id;
          li.addEventListener("click", () => {
            const target = document.getElementById(h1.id);
            const targetPosition =
              target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - 100;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
          menuWrapper.appendChild(li);
        });
      });
    };

    updateMenu();

    window.addEventListener("scroll", updateMenu);

    return () => {
      window.removeEventListener("scroll", updateMenu);
    };
  }, []);

  return (
    <div className="">
      <ul
        className="flex flex-col gap-5 text-gray-500 text-sm pt-8"
        id="menu-wrapper"
      ></ul>
    </div>
  );
}

export default SidebarMenu;
