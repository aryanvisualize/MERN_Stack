// import React from 'react'

// import MultiEffectComponent from "../components/MultiEffectComponent"
// import LoggerComponent from "../components/LoggerComponent"
// import DataFetcher from "../components/DataFetcher"
// import ResizeComponent from "../components/ResizeComponent"
// import TimerComponent from "../components/TimerComponent"

import { useEffect, useState } from "react"

function App () {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }

  // first -> side-effect function
  // second -> clean-up function
  // third -> dependencies (Updation of dependencies runs the function)

  //Variation-1: runs on every render
  useEffect(()=>{
    alert("I will run before each render")
  })


  //Variation-2: runs on only first render  (Depends on dependencies)
  useEffect(()=> {
    alert("I will run on only first render");
  }, [])
  
  //Variation-3:
  //Single dependency
  useEffect(()=>{
    alert("I will run every time when count is updated")
  },[count])

  //Variation-4:
  //multiple dependencies
  useEffect(()=>{
    alert("Runs every time when count/total is updated")
  },[count,total]);

  //Variation-5:
  //With cleanup function
  useEffect(()=>{
    alert("Count is updated");
    return () =>{
      alert("Count is unmounted from UI");
    }
  },[count])
  



  return (
    <div>
      {/* <LoggerComponent/> */}

      {/* <TimerComponent/>  */}
      {/* As soon as I unmount this component the cleanup func will run */}

      {/* <DataFetcher/> */}

      {/* <ResizeComponent/> */}

      {/* <MultiEffectComponent/> */}
      {/* As soon as I unmount this component the cleanup func will run */}

      <button onClick={handleClick}>
        Update count
      </button>
      <br />
      Count is {count}
      <br />
      <button onClick={handleClickTotal}>
        Update total
      </button>
      <br />
      Total is {total}
    </div>
  )
}

export default App
