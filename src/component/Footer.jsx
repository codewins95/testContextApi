import React, { memo, useContext } from "react";
import { contextData } from "./context/DataContext";

const Footer = () => {
  const { mobile } = useContext(contextData);
  return <div>Footer, Number:{mobile}</div>;
};

export default memo(Footer);
