"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  redirect: string;
  options: {
    NAME: string;
    REDIRECT: string;
  }[];
};

const DocList = ({ title, redirect, options }: Props) => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <ul className="flex flex-col gap-3 [&>li]:cursor-pointer">
      <li
        onClick={() => router.push(redirect)}
        data-selected={redirect === url}
        className="font-medium data-[selected=true]:text-blue-600"
      >
        {title}
      </li>
      {options.map((opt) => (
        <li
          onClick={() => router.push(opt.REDIRECT)}
          className="ml-1 opacity-70 hover:opacity-100"
        >
          {opt.NAME}
        </li>
      ))}
    </ul>
  );
};

export default DocList;
