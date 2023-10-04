import React from "react";

const DataShared = React.createContext(null);

function DataShareCenterContext({ children }) {
  let [options, setOptions] = React.useState({
    option: {
      length: 12,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    },
    refresh: false,
    password: "",
  });
  return (
    <DataShared.Provider value={{ options, setOptions }}>
      {children}
    </DataShared.Provider>
  );
}
export { DataShared, DataShareCenterContext };
