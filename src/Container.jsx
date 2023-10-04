import React from "react";
import Screen from "./components/Screen";
import Options from "./components/Options";

export default function Container() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[rgba(255,255,255,.3)] sm:w-[550px] h-80 rounded-md p-5 space-y-2 sm:m-0 mx-5 w-[500px]">
        <Screen />
        <Options />
      </div>
    </div>
  );
}
