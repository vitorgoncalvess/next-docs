"use client";

import React from "react";
//@ts-ignore
import logo from "../../public/logo.svg";
import Image from "next/image";
import strings from "../(utils)/strings";
import Button from "./Button";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { NAV } = strings;

  const router = useRouter();

  return (
    <nav className="fixed flex items-center justify-center border-b-[1px] border-zinc-800 bg-black px-2">
      <div className="flex h-16 w-[1330px] items-center justify-between">
        <section className="flex items-center">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo}
            alt="Next Js"
          />
          <ul className="ml-10 mt-1.5 flex items-center gap-6 text-sm font-medium">
            {NAV.map((item) => (
              <li
                onClick={() => router.push(item.REDIRECT)}
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
      </div>
    </nav>
  );
};

export default NavBar;
