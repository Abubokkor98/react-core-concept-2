import { useState } from "react"

export default function Counter () {  
    const [count, setCount] = useState (0);
    console.log(count, setCount);

    const plusHandler = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const minusHandler = () => { 
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid blue'}}>
            <h3>Counter:{count}</h3>
            <button onClick={plusHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </div>
    )
}