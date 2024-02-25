import { useState } from 'react';
import "./Counter.css"
import CounterButton from './CounterButton';

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterFunction(by){
        setCount(count + by);
    }

    function decrementCounterFunction(by){
        setCount(count - by);
    }

    function reset(){
        setCount(0);
    }


    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementFunction={incrementCounterFunction} decrementFunction={decrementCounterFunction}/>
            <CounterButton by={2} incrementFunction={incrementCounterFunction} decrementFunction={decrementCounterFunction}/>
            <CounterButton by={5} incrementFunction={incrementCounterFunction} decrementFunction={decrementCounterFunction}/>
            <button className="reset"
                    onClick={reset}
            >RESET</button>
        </>
    )
}

