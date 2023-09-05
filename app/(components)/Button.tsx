"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "py-1.5 px-2 font-medium rounded-md text-[16px] transition",
  variants: {
    backgroundColor: {
      white: "bg-white text-black border-[1px] border-black hover:opacity-80",
      black: "bg-zinc-950 border-[1px] border-zinc-500 hover:bg-zinc-900",
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
  onClick?: any;
  redirect?: string;
};

const Button = ({
  children,
  backgroundColor,
  size = "base",
  onClick,
  redirect,
}: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={redirect ? () => router.push(redirect) : onClick}
      className={buttonStyles({ backgroundColor: backgroundColor, size: size })}
    >
      {children}
    </button>
  );
};

export default Button;
