import React from "react";
const Child=({mod,valueof})=>{
    console.log(valueof)
    return(
        <div className="child">
            <h3>Child Component</h3>
        <button onClick={()=>mod('true')}>show Modal</button>
        { valueof==='true' && <div>
                    <h2>Modal Content</h2>
                    <p>This is the modal content</p></div>}
         
        </div>)
}

export default Child;