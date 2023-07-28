import { FC } from "react";
import { ArrowRight } from "../../icons";

interface ServiceCardProp {
  title: string;
  index: number;
}
const ServiceCard: FC<ServiceCardProp> = ({ title, index }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={`/assets/service-${index}.png`} className=" md:h-full w-full" />
      <p className="text-[14px] md:text-[16px]">{title}</p>
      <div className="flex items-center gap-1 md:gap-3 border-b-2 w-fit pb-1 md:pb-3 cursor-pointer">
        <p className="text-[14px] md:text-[16px]">Explore page</p>
        <ArrowRight />
      </div>
    </div>
  );
};

export { ServiceCard };
