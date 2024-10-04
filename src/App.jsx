import React from 'react'
import DataContext from './component/context/DataContext'
import Home from './component/Home'

const App = () => {
  console.log('test memo page:app ')
  
  return (
    <>
       <DataContext>
        <Home />
       </DataContext>
    </>
  )
}

export default App