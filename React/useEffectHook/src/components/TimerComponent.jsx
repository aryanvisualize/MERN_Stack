import {useState, useEffect} from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("setInterval Executed")
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);

        return () => {
            console.log("Time to stop");
            clearInterval(intervalId);
        };
    },[]);  //Run only on 1st render


    return (
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    );
}

export default TimerComponent
