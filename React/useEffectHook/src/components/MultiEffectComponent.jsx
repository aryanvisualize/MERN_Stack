import { useEffect, useState } from 'react';

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('Count changed', count);
    }, [count]);    //Side effect logic run only when count is changed

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Set interval executed");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () =>{
            console.log("Time to stop")
             clearInterval(intervalId); //Clean-up Function
        }
    }, []);     //[] => Dependency - It will run only on first render

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>Seconds: {seconds}</h2>
        </div>
    );
};

export default MultiEffectComponent
