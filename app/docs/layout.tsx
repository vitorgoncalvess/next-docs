import React from "react";
import SideBar from "../(components)/SideBar";
import Summary from "../(components)/Summary";

const layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <main className="px-96 py-28">{children}</main>
      <Summary />
    </div>
  );
};

export default layout;
