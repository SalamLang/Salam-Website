import CarecterBlue from "../../../public/caracter2.svg";
import CarecterOrange from "../../../public/caracter4.svg";
import CaracterGreen from "../../../public/carecter7.svg";
import CaracterGreentow from "../../../public/carecter8.svg";

function CarecterGoToLearn() {
  return (
    <>
      <span className="absolute left-[10%] -z-10 md:right-[65%] top-36 md:top-10">
        <CarecterBlue />
      </span>
      <span className="absolute max-md:hidden -z-10 md:right-[55%] top-72">
        <CarecterOrange />
      </span>
      <span className="absolute max-md:hidden -z-10 md:right-[40%] top-64">
        <CaracterGreentow />
      </span>
      <span className="absolute right-[10%] -z-10 md:right-[18%] top-[12rem] md:top-7">
        <CaracterGreen />
      </span>
    </>
  );
}

export default CarecterGoToLearn;
