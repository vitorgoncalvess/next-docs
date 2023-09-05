import React from "react";
import { tv } from "tailwind-variants";

const titleStyles = tv({
  base: "w-full bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-center text-6xl font-bold tracking-wide text-transparent",
  variants: {
    size: {
      lg: "text-6xl",
      md: "text-4xl",
    },
  },
});

const Title = ({
  children,
  size = "lg",
}: {
  children: string;
  size?: "lg" | "md";
}) => {
  return <h1 className={titleStyles({ size: size })}>{children}</h1>;
};

export default Title;
