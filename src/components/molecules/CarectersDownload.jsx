import CarecterBlue from "../../../public/carecterblue.svg"
import Ghost from "../../../public/ghost.svg"
import CaracterGreen from "../../../public/caracter5.svg"

function CarectersDownload() {
  return (
    <>
    <span className="absolute bottom-20 lg:right-[17%] md:right-[15%] right-[13%] sm:bottom-24">
        <CarecterBlue />
    </span>
    <span className="absolute right-12 sm:right-14 top-36 sm:top-40 z-20">
        <Ghost />
    </span>
    <span className="absolute left-12 top-24 -rotate-[55deg]">
        <Ghost />
    </span>
    <span className="absolute right-[55%] bottom-6">
        <CaracterGreen />
    </span>
    </>
  )
}

export default CarectersDownload
