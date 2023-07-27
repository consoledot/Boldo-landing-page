import { ButtonHTMLAttributes, FC } from "react";

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
      {...props}
      className="py-2 px-7 border-2 border-[text-primary] rounded-[12px]"
    >
      {title}
    </button>
  );
};

export { Button };
