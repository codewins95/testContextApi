import React, { memo, useContext } from 'react';
import Header from './Header';
import Data from './Data';
import Footer from './Footer';
import { contextData } from './context/DataContext'; 

const Home = () => {
    console.log('test memo page->home ')
//   const email = useContext(contextData);
//   console.log(email); 

  return (
    <>
      <Header />
      <Data />
      <Footer />
    </>
  );
}

export default memo(Home);
