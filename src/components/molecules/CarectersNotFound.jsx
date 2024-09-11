import CarecterNotFound from "../../../public/svgs/carecter404.svg";
import Ghost from "../../../public/svgs/ghost.svg";
import NotFound from "../../../public/svgs/404.svg";

function CarectersNotFound() {
  return (
    <>
      <span className="absolute right-0 sm:-right-24 top-10 sm:top-24 w-52 h-10">
        <CarecterNotFound />
      </span>
      <span className="absolute right-10 sm:-right-16 top-12 sm:top-24 w-14 h-16 z-20">
        <Ghost />
      </span>
      <span className="absolute right-[68%] sm:right-[88%] top-9 sm:top-16 w-14 h-16 -rotate-[55deg]">
        <Ghost />
      </span>
      <span className="absolute right-[65%] sm:right-[85%] bottom-10 sm:bottom-16 w-48 h-24">
        <NotFound />
      </span>
    </>
  );
}

export default CarectersNotFound;
