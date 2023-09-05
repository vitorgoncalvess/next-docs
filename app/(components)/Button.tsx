import React from "react";
import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "py-1.5 px-2 font-medium rounded-md text-[16px]",
  variants: {
    backgroundColor: {
      white: "bg-white text-black border-[1px] border-black",
      black: "bg-zinc-950 border-[1px] border-zinc-500",
    },
    size: {
      sm: "text-sm",
      base: "text-base py-3 px-3",
      md: "text-md",
      lg: "text-lg",
    },
  },
});

type Props = {
  children: string;
  backgroundColor: "white" | "black";
  size?: "sm" | "base" | "md" | "lg";
};

const Button = ({ children, backgroundColor, size = "base" }: Props) => {
  return (
    <button
      className={buttonStyles({ backgroundColor: backgroundColor, size: size })}
    >
      {children}
    </button>
  );
};

export default Button;
