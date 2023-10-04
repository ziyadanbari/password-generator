import React from "react";
import { DataShared } from "../context/DataShareCenter";

function Range() {
  const { options, setOptions } = React.useContext(DataShared);
  return (
    <>
      <div className="text-lg font-bold">Length Of Password</div>
      <div className="flex items-center space-x-2">
        <input
          min={4}
          type="range"
          className="input-range"
          value={options.option.length}
          onChange={(e) =>
            setOptions({
              ...options,
              option: { ...options.option, length: e.target.value },
            })
          }
          style={{
            background: `linear-gradient(90deg, #d54e14 ${options.option.length}%, #ccc ${options.option.length}%)`,
          }}
        />
        <div className="w-10 bg-[#ccc] text-center rounded">
          <input
            className="w-full bg-transparent text-center outline-none border-none"
            value={options.option.length}
            onChange={(e) => {
              if (
                /^\d+$/.test(e.target.value) &&
                e.target.value !== "3" &&
                parseInt(e.target.value) <= 100
              )
                setOptions({
                  ...options,
                  option: { ...options.option, length: e.target.value },
                });
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Range;
