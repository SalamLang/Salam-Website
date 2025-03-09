"use client";

import React, { useEffect } from "react";

function SidebarMenu() {
  useEffect(() => {
    const updateMenu = () => {
      // start initial position box
      const box = document.getElementById("box");
      box.style.transform = `translateY(${45}px)`;
      box.style.height = "30px";
      box.style.width = "100%";
      box.style.top = "-15px";
      // end initial position box

      const elements = document.querySelectorAll("#mark-down div");
      const menuWrapper = document.getElementById("menu-wrapper");

      menuWrapper.innerHTML = "";

      elements.forEach((el) => {
        const hs = el.querySelectorAll("h1 , h2 , h3 , h4");

        hs.forEach((h) => {
          const li = document.createElement("li");
          li.innerHTML = h.id;

          const tagName = h.tagName;

          li.classList.add("!w-auto", "max-w-[250px]", "line-clamp-1");

          switch (tagName) {
            case "H1":
              li.classList.add(
                "cursor-pointer",
                "font-Estedad-Bold",
                "!text-base"
              );
              break;
            case "H2":
              li.classList.add(
                "mr-5",
                "cursor-pointer",
                "!text-sm",
                "font-Estedad-SemiBold"
              );
              break;
            case "H3":
              li.classList.add(
                "mr-8",
                "cursor-pointer",
                "text-xs",
                "!font-bold"
              );
              break;
            case "H4":
              li.classList.add(
                "mr-10",
                "cursor-pointer",
                "text-[11px]",
                "font-Estedad-regular"
              );
              break;
            default:
              li.classList.add("cursor-pointer");
              break;
          }

          li.dataset.target = h.id;
          li.addEventListener("click", () => {
            const target = document.getElementById(h.id);
            const targetPosition =
              target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
          menuWrapper.appendChild(li);
        });
      });
    };

    const findClosestElement = () => {
      const headers = document.querySelectorAll("#mark-down h1, h2, h3, h4");
      let closest = null;
      let minDistance = Infinity;

      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closest = header;
        }
      });

      if (closest) {
        const tagItemSidebar = document.querySelector(
          `[data-target="${closest.id}"]`
        );

        const box = document.getElementById("box");

        const sidebarTop = document
          .getElementById("menu-wrapper")
          .getBoundingClientRect().top;
        const tagItemPosition = tagItemSidebar.getBoundingClientRect().top;

        const newTop = tagItemPosition - sidebarTop;

        box.style.transform = `translateY(${newTop}px)`;

        const increasedHeight = tagItemSidebar.clientHeight;
        box.style.height = `${increasedHeight + 8}px`;
        box.style.top = "-4px";
        box.style.width = `${tagItemSidebar.clientWidth || 0}px`;

        tagItemSidebar.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    };

    updateMenu();
    window.addEventListener("scroll", findClosestElement);

    return () => {
      window.removeEventListener("scroll", findClosestElement);
    };
  }, []);

  return (
    <div className="relative lg:min-w-[200px]">
      <div
        className="transition-all duration-300 p-1 bg-gray-600/20 absolute rounded-lg -right-2"
        id="box"
      ></div>
      <ul
        className="flex flex-col gap-5 text-gray-500 text-sm pt-8 pb-4 mb-20"
        id="menu-wrapper"
      ></ul>
    </div>
  );
}

export default SidebarMenu;
