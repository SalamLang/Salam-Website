import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Patreon from "../../../public/images/supportlogos/patreon.png";
import Buymeacoffee from "../../../public/images/supportlogos/buymeacoffee.webp";
import Issuehunt from "../../../public/images/supportlogos/issuehunt.png";
import Kofi from "../../../public/images/supportlogos/kofi.png";
import Liberapay from "../../../public/images/supportlogos/liberapay.png";
import Opencollective from "../../../public/images/supportlogos/opencollective.png";
import Image from "next/image";
import Link from "next/link";

const SupportBoxClass = cva(
  "min-w-60 max-md:w-full w-full min-h-20 bg-transparent flex flex-row-reverse border-2 justify-start px-4 items-center gap-4 rounded-xl",
  {
    variants: {
      intent: {
        patreon: ["text-black", "border-black", "dark:invert"],
        buymeacoffee: ["text-yellow-600", "border-yellow-600"],
        issuehunt: ["text-green-700", "border-green-700"],
        kofi: ["text-sky-600", "border-sky-600"],
        liberapay: ["text-black", "border-black", "dark:invert"],
        opencollective: ["text-indigo-400", "border-indigo-400"],
      },
    },
    defaultVariants: {
      intent: "patreon",
    },
  }
);

export interface DivProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SupportBoxClass> {
  titleclass?: string;
}

export const SupportBox: React.FC<DivProps> = ({
  className,
  intent = "patreon",
  titleclass,
  ...props
}) => {
  const getIcon = (intent: string): string => {
    let icon: string;
    switch (intent) {
      case "patreon":
        icon = Patreon;
        break;
      case "buymeacoffee":
        icon = Buymeacoffee;
        break;
      case "issuehunt":
        icon = Issuehunt;
        break;
      case "kofi":
        icon = Kofi;
        break;
      case "liberapay":
        icon = Liberapay;
        break;
      case "opencollective":
        icon = Opencollective;
        break;
      default:
        icon = Patreon;
    }
    return icon;
  };
  return (
    <div className={SupportBoxClass({ intent, className })} {...props}>
      <Image src={getIcon(intent)} width={50} height={50} alt={intent} />
      <h2
        className={`font-Estedad-SemiBold text-lg uppercase ${
          titleclass || ""
        }`}
      >
        {intent}
      </h2>
    </div>
  );
};

export default SupportBox;
