import { BoldoLogo, PrestoLogo } from "../../icons";

const MarqueeLogo = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12  flex items-center animate-marquee whitespace-nowrap">
        <span className="mx-4">
          <BoldoLogo />
        </span>
        <span className="mx-4">
          <PrestoLogo />
        </span>
      </div>

      <div className="absolute flex items-center top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="mx-4">
          <BoldoLogo />
        </span>
        <span className="mx-4">
          <PrestoLogo />
        </span>
      </div>
    </div>
  );
};

export { MarqueeLogo };