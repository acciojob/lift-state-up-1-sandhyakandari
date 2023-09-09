import React ,{ useState } from "react"
import Child from "./Child";

const Parent=()=>{
  const [showModal,setShowModal]=useState('false')
     
  return(
        <div className="main">
            <h1>Parent Component</h1>
            <Child mod={setShowModal} valueof={showModal}>  </Child>
                

        </div>
    )
}
export default Parent;