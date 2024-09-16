import CarecterBlue from "../../../public/svgs/caracter2.svg";
import CarecterOrange from "../../../public/svgs/caracter4.svg";
import CaracterGreen from "../../../public/svgs/carecter7.svg";
import CaracterGreentow from "../../../public/svgs/educationvectoryellow.svg";

function CarecterGoToLearn() {
  return (
    <>
      <span className="absolute left-[10%] -z-10 md:right-[60%] top-36 md:top-60">
        <CarecterBlue />
      </span>
      <span className="absolute right-[10%] -z-10 md:right-[35%] top-72 md:top-64">
        <CarecterOrange />
      </span>
      <span className="absolute max-md:hidden -z-10 md:right-[18%] top-[12rem] md:top-52">
        <CaracterGreentow />
      </span>
      <span className="absolute max-md:hidden right-[10%] -z-10 md:right-[50%] top-72">
        <CaracterGreen />
      </span>
    </>
  );
}

export default CarecterGoToLearn;
