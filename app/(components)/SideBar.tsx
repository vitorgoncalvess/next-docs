import React from "react";
import DocList from "./DocList";
import strings from "../(utils)/strings";

const SideBar = () => {
  const { SIDEBAR } = strings;

  return (
    <div className="fixed left-0 top-16 h-full min-h-screen w-96 pl-24 pt-16 text-sm">
      <main className="flex h-full flex-col gap-5 overflow-auto">
        {SIDEBAR.map((item) => (
          <DocList
            title={item.TITLE}
            redirect={item.REDIRECT}
            options={item.OPTIONS}
          />
        ))}
      </main>
    </div>
  );
};

export default SideBar;
