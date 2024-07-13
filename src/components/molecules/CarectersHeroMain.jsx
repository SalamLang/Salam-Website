import CarecterGavad from "../../../public/caracter1.svg"
import Carecterblue from "../../../public/carecter-hero-1.svg"
import CaracterBluetow from "../../../public/carecter-hero-4.svg"
import CaracterGreen from "../../../public/carecter-hero-2.svg"
import CaracterGreentow from "../../../public/carecter-hero-3.svg"

function CarectersHeroMain() {
  return (
    <>
    <span className="absolute right-[25%] top-80 lg:right-[35%] lg:top-64 xl:right-[38%] hidden md:block">
        <CarecterGavad />
    </span>
    <span className="absolute right-[72%] top-14 lg:right-[72%] lg:top-2 xl:right-[68%] xl:top-5 hidden md:block">
        <Carecterblue />
    </span>
    <span className="absolute right-[0%] top-14 lg:right-[5%] lg:top-0 xl:right-[16%] hidden md:block">
        <CaracterBluetow />
    </span>
    <span className="absolute right-[58%] top-56 lg:right-[62%] lg:top-48 xl:right-[57%] xl:top-52 hidden md:block">
        <CaracterGreen />
    </span>
    <span className="absolute right-[6%] top-64 lg:right-[20%] lg:top-48 xl:right-[26%] xl:top-52 hidden md:block">
        <CaracterGreentow />
    </span>
    </>
  )
}

export default CarectersHeroMain
