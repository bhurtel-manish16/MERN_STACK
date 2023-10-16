import React, {useEffect, useState } from 'react'

const Count = () => {
    //INternal CSS
  const divstyle = {
    "color":"red",
    "textAlign":"center",
    "marginTop":"100px"
  }

  //hook
  let [count, setcount] = useState(0); //0 + 1 = 1 ..............

  //useEffect
  useEffect(() => {
    //write code here
    console.log("INside useEffect")

    return () => {
        console.log("clean up")
    }
  }, [count])

  return (
    <div style={divstyle}>
        <h1>Number: {count}</h1>
        <button onClick={() => {setcount(count + 1)}}>Increase</button>
        <button onClick={() => {setcount(count - 1)}}>Decrease</button>
    </div>
  )
}

export default Count