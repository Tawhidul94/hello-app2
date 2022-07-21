import React,{useEffect, useState} from 'react'

export const UseEfact = () => {

    const [count, setCount] = useState(10)

    const click= () =>{
        setCount(count => count+1)
    }

    const clickhandle = () =>{
        setCount(count=>count-1)
    }

    useEffect( () =>{
        console.log("useEffect")

    } ,[count])

    
    
   
    

  return (
    <div>
        <h1>Count value is :{count}</h1>
        <button onClick={click}>+</button>
        <button onClick={clickhandle}>-</button>

    </div>
    
  )
}


