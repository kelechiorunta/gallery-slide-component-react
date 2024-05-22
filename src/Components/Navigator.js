import React from 'react'
import Slider from './Slider'
import NestedContext from './NestedContext'

function Navigator({posts, decrement, increment, no}) {

    const sliders = posts.map((post, i) => {
        
    return (
    <div key={post.id} 
        className={`slider_container ${((post.id===no)) 
        ? 'scroll_center' : ``}`}><Slider  key={post.id} 
                                            slidepic={post.name}
                                            slideNo={post.text}
                                            quote={post.quotes} 
                                            // no={post.id+1} 
                                            val={no}
                                            index={i+1}/></div>,  
                    
          <div key={post.id} className={`slider_container ${((post.id<no-1)) 
                                            ? 'scroll_left' : ``}`}><Slider  key={post.id} 
                                                                                slidepic={post.name}
                                                                                slideNo={post.text}
                                                                                quote={post.quotes} 
                                                                                val={no} 
                                                                                index={i+1}/></div>
          
          // <div key={post.id} className={`slider_container ${((post.id>no)) 
          //                                   ? 'scroll_right' : ``}`}><Slider  key={post.id} 
          //                                                                       slidepic={post.name}
          //                                                                       slideNo={post.text} 
          //                                                                       no={post.id+1} 
          //                                                                       index={i+1}
          //                                                                       onload={onload}
          //                                                                       isActive={isActive}
          //                                                                       status={status}/></div>
          )
    })
    
  return (
    <div className='container'>
        <nav className='slider_nav'>
            <button onClick={decrement}>{"<<"}</button>
            <h2>{`Slide ${no}`}</h2>
            <button onClick={increment}>{">>"}</button>
        </nav>
        
        <nav className='slider_pics'>
          <NestedContext count={no}>
            {sliders}
          </NestedContext>
        {console.log(sliders)}
        </nav>    
    </div>
  )
}

export default Navigator