import React from 'react'
import { SlideContext } from './SlideContext'
 import { useContext } from 'react'

function NestedContext({count, children}) {
    const imgContext = useContext(SlideContext)//{imgPic: pics[3].name}
  return (
    <>
        <SlideContext.Provider value={imgContext}>
            {children}
        </SlideContext.Provider>    
    </>
  )
}

export default NestedContext