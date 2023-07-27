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
        className={cn("absolute -bottom-[30%] ", {
          "left-[20%]": position === "right",
          "right-[50%]": position === "left",
        })}
      />
    </div>
  );
};

export { ImageCard };
