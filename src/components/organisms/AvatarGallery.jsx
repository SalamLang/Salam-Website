import React from "react";
import AvatarGroup from "../molecules/AvatarGroup";
import Avatar2 from "../../../public/images/avatar2.png";
import Avatar3 from "../../../public/images/avatar3.png";

const avatars = [
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 1",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar2,
    alt: "User 2",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
  {
    src: Avatar3,
    alt: "User 3",
    tooltip: "علی",
    width: 150,
    height: 150,
  },
];

const AvatarGallery = () => {
  return (
    <div className="max-w-[1066px]">
      <AvatarGroup avatars={avatars} />
    </div>
  );
};

export default AvatarGallery;
