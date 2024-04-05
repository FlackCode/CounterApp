import { useState } from "react";
export default function Counter() {
    const [currentCount, setCount] = useState({ count: 0 });

    const handleCountUp = () => {
        const newCount = { count: currentCount.count + 1 };
        setCount(newCount)
    }
    const resetCount = () => {
        const newCount = { count: currentCount.count = 0}
        setCount(newCount)
    }
    const handleCountDown = () => {
        const newCount = { count: currentCount.count - 1 }
        setCount(newCount)
    }

    return (
        <div>
            <h1>{currentCount.count}</h1>
            <button onClick={handleCountDown}>Counter Down</button>
            <button onClick={resetCount}>Reset Counter</button>
            <button onClick={handleCountUp}>Counter Up</button>
        </div>
    )
}