import React from "react";
import Avatar from "../atoms/Avatar";

const AvatarGroup = ({ avatars }) => {
  return (
    <div className="flex flex-wrap justify-center max-md:gap-1 gap-4">
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          width={avatar.width}
          height={avatar.height}
          className="scale-125"
          tooltip_text={avatar.tooltip}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
