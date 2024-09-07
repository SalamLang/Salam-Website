import Customize from "../../../public/customizeicon.svg";
import Security from "../../../public/lockicon.svg";
import Persons from "../../../public/personsicon.svg";
import Rtl from "../../../public/rtlicon.svg";
import Design from "../../../public/designicon.svg";
import Lamp from "../../../public/lampicon.svg";

function ImageBoxAdvantage({ variant }) {
  let classes = "scale-[0.8] brightness-0";
  let svgComponent = null;

  switch (variant) {
    case "BestDesigne":
      classes;
      svgComponent = <Customize className={classes} />;
      break;
    case "Security":
      classes;
      svgComponent = <Security className={classes} />;
      break;
    case "AllPeople":
      classes;
      svgComponent = <Persons className={classes} />;
      break;
    case "Rtl":
      classes;
      svgComponent = <Rtl className={classes} />;
      break;
    case "Simplicity":
      classes;
      svgComponent = <Design className={classes} />;
      break;
    case "Lamp":
      classes;
      svgComponent = <Lamp className={classes} />;
      break;
  }
  return (
    <div className="bg-bg-button-green w-24 h-24 rounded-3xl flex items-center justify-center">
      {svgComponent}
    </div>
  );
}

export default ImageBoxAdvantage;
