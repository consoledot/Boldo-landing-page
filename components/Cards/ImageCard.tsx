import { FC } from "react";
import cn from "classnames";

interface ImageCardProps {
  name: string;
  position?: "left" | "right";
  type: "man" | "woman";
}
const ImageCard: FC<ImageCardProps> = ({ position = "left", name, type }) => {
  return (
    <div className="relative">
      <img src={`/assets/${type}.png`} />
      <img
        src={`/assets/${name}.png`}
        className={cn("absolute -bottom-[40%] md:-bottom-[30%] ", {
          "md:left-[20%] -right-[10%] md:scale-100 scale-75":
            position === "right",
          "md:right-[50%] right-[30%]  md:scale-100 scale-75 ":
            position === "left",
        })}
      />
    </div>
  );
};

export { ImageCard };
