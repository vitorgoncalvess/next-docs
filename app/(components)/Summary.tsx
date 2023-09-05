"use client";

import React, { useEffect, useState } from "react";
import content from "../(utils)/docs";

const Summary = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <summary className="fixed right-0 top-16 h-full min-h-screen w-96 pl-24 pt-16 text-sm marker:content-['']">
      <ul className="flex list-none flex-col gap-2 [&>li]:cursor-pointer">
        <li className="font-medium">Nessa Pagina</li>
        {content[url]?.map((item: { NAME: string; ID: string }) => (
          <li
            className="ml-1 opacity-70 transition hover:opacity-100"
            key={item.ID}
          >
            {item.NAME}
          </li>
        ))}
      </ul>
    </summary>
  );
};

export default Summary;
