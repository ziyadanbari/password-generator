import React from "react";
import { GeneratePassword as gp } from "js-generate-password";
import { DataShared } from "../context/DataShareCenter";
function GeneratePassword() {
  const { options, setOptions } = React.useContext(DataShared);
  React.useEffect(() => {
    const password = gp(options.option);
    setOptions({ ...options, password, refresh: false });
  }, [options.option]);
}

export default GeneratePassword;
