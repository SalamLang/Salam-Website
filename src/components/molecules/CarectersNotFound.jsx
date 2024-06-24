import CarecterNotFound from "../../../public/carecter404.svg"
import Ghost from "../../../public/ghost.svg"
import NotFound from "../../../public/404.svg"

function CarectersNotFound() {
  return (
    <>
    <span className="absolute right-0 top-10 w-52 h-10">
        <CarecterNotFound />
    </span>
    <span className="absolute right-10 top-12 w-14 h-16 z-20">
        <Ghost />
    </span>
    <span className="absolute right-[68%] top-9 w-14 h-16 -rotate-[55deg]">
        <Ghost />
    </span>
    <span className="absolute right-[65%] bottom-10 w-48 h-24">
        <NotFound />
    </span>
    </>
  )
}

export default CarectersNotFound