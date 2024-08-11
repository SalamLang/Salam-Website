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
          <li className="">
            <Image
              src={Snap}
              alt="Snap"
              className=""
            />
          </li>
          <li className="">
            <Image
              src={Digikala}
              alt="Digikala"
              className=""
            />
          </li>
          <li className="">
            <Image
              src={Asrez}
              alt="Asrez"
              className=""
            />
          </li>
          <li className="">
            <Image
              src={Tapsi}
              alt="Tapsi"
              className=""
            />
          </li>
          <li className="">
            <Image
              src={TapsiGarage}
              alt="Tapsi Garage"
              className=""
            />
          </li>
        </ul>
      </marquee>
    </div>
  );
}

export default Marquee;
