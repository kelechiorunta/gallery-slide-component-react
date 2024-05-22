import React from 'react'
import Navigator from './Navigator'
import { useState } from 'react'
import { pics } from './pics';

function MockSlider() {
    const [n, setN] = useState(1);
    

    async function increment(e){
        if (n < pics.length){
            e.target.disabled = true
            document.body.style.cursor = 'wait';
            setTimeout(() => {
                setN((n) => n + 1); e.target.disabled = false;
                document.body.style.cursor = 'default';}, 1500)
            console.log(e)
            
        }
    }

    async function decrement(e){
        if (n > 1){
            e.target.disabled = true
            document.body.style.cursor = 'wait';
            setTimeout(() => {
                setN((n) => n - 1); e.target.disabled = false;
                document.body.style.cursor = 'default';}, 1500)
            console.log(e)
            
        }
    }


  return (
    <div className='container'>
        <Navigator posts={pics} increment={increment} decrement={decrement} no={n}/>  
    </div>
  )
}

export default MockSlider