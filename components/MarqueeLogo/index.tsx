import { BoldoLogo, PrestoLogo } from "../../icons";

const MarqueeLogo = () => {
  return (
    <div className="relative flex overflow-x-hidden w-full">
      <div className="py-12  flex items-center animate-marquee whitespace-nowrap">
        {[...Array(5)].map((_) => (
          <>
            <span className="mx-2 md:mx-4 scale-75 md:scale-100">
              <BoldoLogo />
            </span>
            <span className=" mx-2 md:mx-4  scale-75 md:scale-100">
              <PrestoLogo />
            </span>
          </>
        ))}
      </div>

      <div className="absolute flex items-center top-0 py-12 animate-marquee2 whitespace-nowrap">
        {[...Array(5)].map((_) => (
          <>
            <span className="mx-2 md:mx-4  scale-75 md:scale-100">
              <BoldoLogo />
            </span>
            <span className="mx-2 md:mx-4  scale-75 md:scale-100">
              <PrestoLogo />
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export { MarqueeLogo };
