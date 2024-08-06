import CarecterGavad from "../../../public/caracter1.svg"
import Carecterblue from "../../../public/carecter-hero-1.svg"
import CaracterBluetow from "../../../public/carecter-hero-4.svg"
import CaracterGreen from "../../../public/carecter-hero-2.svg"
import CaracterGreentow from "../../../public/carecter-hero-3.svg"

function CarectersHeroMain() {
  return (
    <div className="">
    <span className="absolute right-[50%] translate-x-1/2 top-48 xl:top-56 md:block">
        <CarecterGavad />
    </span>
    <span className="absolute left-[1%] top-0 lg:left-[5%] xl:top-5 hidden lg:block">
        <Carecterblue />
    </span>
    <span className="absolute right-[1%] top-0 lg:right-[5%] hidden lg:block">
        <CaracterBluetow />
    </span>
    <span className="absolute md:left-[3%] md:top-28 lg:top-40 lg:left-[15%] xl:top-52 hidden md:block">
        <CaracterGreen />
    </span>
    <span className="absolute md:right-[5%] md:top-28 lg:top-40 lg:right-[18%] xl:top-52 hidden md:block">
        <CaracterGreentow />
    </span>
    </div>
  )
}

export default CarectersHeroMain
