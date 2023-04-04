import React from "react";
import { FC } from "react";
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
};
export default Wrapper;
