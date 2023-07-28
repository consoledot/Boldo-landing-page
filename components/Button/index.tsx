import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";
interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonInterface> = ({
  title,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        " py-3 px-6 md:py-[16px] md:px-[56px] border-2 border-[#0A2640] font-bold rounded-[56px]",
        {
          "text-white bg-[#0A2640]": variant === "secondary",
        },
        className
      )}
    >
      {title}
    </button>
  );
};

export { Button };
