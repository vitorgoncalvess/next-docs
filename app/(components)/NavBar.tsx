import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import strings from "../(utils)/strings";
import Button from "./Button";

const NavBar = () => {
  const { NAV } = strings;
  return (
    <nav className="flex h-16 items-center justify-between border-b-[1px] border-zinc-800 px-64">
      <section className="flex items-center">
        <Image src={logo} alt="Next Js" />
        <ul className="ml-10 mt-1.5 flex items-center gap-6 text-sm font-medium">
          {NAV.map((item) => (
            <li
              className="cursor-pointer opacity-50 transition duration-100 hover:opacity-100"
              key={item.NAME}
            >
              {item.NAME}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex items-center gap-2">
        <input
          placeholder="Procurar na documentação..."
          className="h-8 w-56 rounded-md border-none bg-zinc-900 text-xs"
          type="text"
        />
        <Button size="sm" backgroundColor="black">
          Deploy
        </Button>
        <Button size="sm" backgroundColor="white">
          Aprender
        </Button>
      </section>
    </nav>
  );
};

export default NavBar;
