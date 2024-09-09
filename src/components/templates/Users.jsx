import React from "react";
import TitleDescription from "../atoms/TitleDescription";
import AvatarGallery from "../organisms/AvatarGallery";
import Vactor1 from "../../../public/vector12-gray.svg";

function Users() {
  return (
    <div className="relative w-full bg-bg-section-purple flex items-center justify-center flex-col gap-y-5 py-28 max-md:py-10 bg-vector bg-contain bg-center bg-no-repeat">
      <div className={"hidden md:block absolute w-11/12 2xl:w-10/12 top-14"}>
        <Vactor1 />
      </div>

      <TitleDescription
        title="ما بهترین هارو داریم ! 🥤"
        description="توی کمترین مدت به دلیل بالا بودن لینک هامون به آدم های مختلف"
        descClass={"!text-black"}
      />
      <AvatarGallery />
      <TitleDescription
        descClass={"!text-black"}
        description="# و هزاران نفر دیگر"
      />
    </div>
  );
}

export default Users;
