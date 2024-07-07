import CarecterBlue from "../../../public/caracter2.svg"
import CarecterOrange from "../../../public/caracter4.svg"
import CaracterGreen from "../../../public/carecter7.svg"
import CaracterGreentow from "../../../public/carecter8.svg"


function CarecterGoToLearn() {
  return (
    <>
    <span className="absolute right-[65%] top-10">
        <CarecterBlue />
    </span>
    <span className="absolute right-[55%] top-72">
        <CarecterOrange />
    </span>
    <span className="absolute right-[40%] top-64">
        <CaracterGreentow />
    </span>
    <span className="absolute right-[18%] top-6">
        <CaracterGreen />
    </span>
    </>
  )
}

export default CarecterGoToLearn