import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";
interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input: FC<InputInterface> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn("py-4 px-7 rounded-[56px] text-black", className)}
    />
  );
};

export { Input };
