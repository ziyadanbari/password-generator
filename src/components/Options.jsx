import React from "react";
import Option from "./Option";
import Range from "./Range";

export default function Options() {
  return (
    <div className="flex sm:justify-between px-5 py-4 sm:flex-row flex-col-reverse items-center [&>*]:my-2">
      <div>
        <Range />
      </div>
      <div className="sm:flex sm:flex-col grid grid-cols-2 space-y-2 [&>*]:mx-2">
        <Option name={"UpperCase"} value={"uppercase"} />
        <Option name={"LowerCase"} value={"lowercase"} />
        <Option name={"Numbers"} value={"numbers"} />
        <Option name={"Symbols"} value={"symbols"} />
      </div>
    </div>
  );
}
