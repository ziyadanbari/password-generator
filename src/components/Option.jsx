import React from "react";
import { DataShared } from "../context/DataShareCenter";

export default function Option({ name, value }) {
  const { options, setOptions } = React.useContext(DataShared);
  function checkTruthOptions() {
    let truthOptions = 0;
    const { uppercase, numbers, lowercase, symbols } = options.option;
    if (uppercase) truthOptions++;
    if (numbers) truthOptions++;
    if (lowercase) truthOptions++;
    if (symbols) truthOptions++;
    return truthOptions !== 1;
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="w-[35px] h-[35px]">
        <input
          type="checkbox"
          className="w-[35px] h-[35px] absolute checkbox z-40 opacity-0 box-border"
          checked={options.option[value]}
          onChange={(e) => {
            if (!e.target.checked) {
              const isValid = checkTruthOptions();
              if (isValid) {
                setOptions({
                  ...options,
                  option: { ...options.option, [value]: e.target.checked },
                });
              }
            } else {
              setOptions({
                ...options,
                option: { ...options.option, [value]: e.target.checked },
              });
            }
          }}
        />
        <div className="w-[35px] h-[35px] block rounded-sm relative custom-checkbox"></div>
      </div>
      <div className="text-black font-semibold tracking-wide ">{name}</div>
    </div>
  );
}
