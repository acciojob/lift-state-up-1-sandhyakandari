
const Child=({mod})=>{

    return(
        <div>
            <h3>Child Component</h3>
        <button onClick={()=>mod('true')}>show Modal</button>
        </div>)
}

export default Child;