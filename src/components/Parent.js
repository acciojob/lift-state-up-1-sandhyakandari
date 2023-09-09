import { useState } from "react"
import Child from "./Child";

const Parent=()=>{
  const [showModal,setShowModal]=useState('false')
    return(
        <div>
            <h1>Parent Component</h1>
            <Child mod={setShowModal}>
                { showModal==='true' && <div>
                    <h2>Modal Content</h2>
                    <p>This is the modal content</p></div>}
            </Child>

        </div>
    )
}
export default Parent;