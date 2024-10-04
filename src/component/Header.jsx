import React, { memo, useContext } from "react";
import { contextData } from "./context/DataContext";

const Header = () => {
  console.log('test memo page->header')

  const {email} = useContext(contextData);
  return (
    <>
      <p>Header, Email :{email}</p>
      
    </>
  );
};

export default memo(Header);
