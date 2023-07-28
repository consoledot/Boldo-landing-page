import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";
interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonInterface> = ({
  title,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(
        "py-[16px] px-[56px] border-2 border-[text-primary] rounded-[56px]",
        {
          "text-white bg-[#0A2640]": variant === "secondary",
        }
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export { Button };
