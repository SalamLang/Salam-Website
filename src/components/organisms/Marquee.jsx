import Snap from "../../../public/Snap.png";
import Digikala from "../../../public/Digikala.png";
import Asrez from "../../../public/Asrez.png";
import Tapsi from "../../../public/Tapsi.png";
import TapsiGarage from "../../../public/TapsiGarage.png";
import Image from "next/image";

function Marquee() {
  return (
    <div className="w-full overflow-hidden">
      <marquee className="flex animate-marquee items-center gap-12">
        <ul className="flex items-center justify-center gap-12">
          <li className="h-11 w-auto">
            <Image
              src={Snap}
              alt="Snap"
              className="h-full w-auto object-contain"
            />
          </li>
          <li className="h-11 w-auto">
            <Image
              src={Digikala}
              alt="Digikala"
              className="h-full w-auto object-contain"
            />
          </li>
          <li className="h-11 w-auto">
            <Image
              src={Asrez}
              alt="Asrez"
              className="h-full w-auto object-contain"
            />
          </li>
          <li className="h-11 w-auto">
            <Image
              src={Tapsi}
              alt="Tapsi"
              className="h-full w-auto object-contain"
            />
          </li>
          <li className="h-11 w-auto">
            <Image
              src={TapsiGarage}
              alt="Tapsi Garage"
              className="h-full w-auto object-contain"
            />
          </li>
        </ul>
      </marquee>
    </div>
  );
}

export default Marquee;
