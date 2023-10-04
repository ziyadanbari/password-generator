import React from "react";
import { DataShared } from "../context/DataShareCenter";
import copy from "clipboard-copy";
import { toast } from "react-toastify";
import zxcvbn from "zxcvbn";
export default function Screen() {
  const { options, setOptions } = React.useContext(DataShared);
  const [score, setScore] = React.useState(1);
  const scores = {
    1: [25, "red"],
    2: [50, "#e6d800"],
    3: [75, "orange"],
    4: [100, "green"],
  };
  React.useEffect(() => {
    const { score } = zxcvbn(options.password);
    if (score !== 0) setScore(score);
  }, [options.password]);
  return (
    <div className="relative">
      <div className="w-full h-[67px] bg-[rgba(230,230,230,1)] rounded-sm flex items-center justify-between space-x-4 px-2">
        <div className="w-full h-[67px]">
          <input
            className="bg-transparent w-full h-full outline-none text-2xl font-semibold"
            value={options.password}
            onChange={() => "use strict"}
          />
        </div>
        <div className="flex space-x-3">
          <span>
            <i
              className="fa-solid fa-clone fa-xl cursor-pointer text-[#1E3050] hover:text-[#2f4b7b]"
              onClick={(e) => {
                copy(options.password).then(
                  toast.success("Password Copied", {
                    position: "bottom-right",
                    hideProgressBar: true,
                    theme: "dark",
                  })
                );
              }}
            ></i>
          </span>
          <span>
            <i
              className="fa-solid fa-arrows-rotate fa-xl cursor-pointer text-[#1E3050] hover:text-[#2f4b7b]"
              onClick={(e) =>
                setOptions({
                  ...options,
                  option: {
                    ...options.option,
                    refresh: true,
                  },
                })
              }
            ></i>
          </span>
        </div>
      </div>
      <div className="w-full h-2 bg-[rgba(230,230,230,1)] absolute rounded-b-sm bottom-0">
        <div
          className="h-full rounded-b-sm"
          style={{
            width: `${scores[score][0]}%`,
            background: scores[score][1],
            transition: "width .5s linear",
          }}
        ></div>
      </div>
    </div>
  );
}
