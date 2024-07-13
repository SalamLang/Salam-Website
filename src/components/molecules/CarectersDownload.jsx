import CarecterBlue from "../../../public/carecterblue.svg"
import Ghost from "../../../public/ghost.svg"
import CaracterGreen from "../../../public/caracter5.svg"

function CarectersDownload() {
  return (
    <>
    <span className="absolute right-[15%] bottom-10 sm:-right-[8%] sm:bottom-16">
        <CarecterBlue />
    </span>
    <span className="absolute right-2 sm:-right-16 top-14 sm:top-24 z-20">
        <Ghost />
    </span>
    <span className="absolute right-[80%] sm:right-[88%] top-9 sm:top-16 -rotate-[55deg]">
        <Ghost />
    </span>
    <span className="absolute right-[50%] sm:right-[60%] bottom-10 sm:bottom-4">
        <CaracterGreen />
    </span>
    </>
  )
}

export default CarectersDownload
