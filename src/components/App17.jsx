import { useEffect, useRef, useState } from "react";

function App() {
    const [turboCounter, setTurboCounter] = useState(0);    
    const counter= useRef(0);
    const crazyRef = useRef();

    const clicker = () => {
        counter.current++;
        console.log('kaunteris: ', counter.current);
    } 
    const turboClicker = () => {
        setTurboCounter(turboCounter +1);
    }

    useEffect (() => {
        
        console.log(crazyRef.current);
        crazyRef.current.style.fontSize = "50px"
        document.querySelector('.crazy').style.color="blue";
    }, []);

    return(<>
    <div>REF: {counter.current}</div>
    <div>STATE: {turboCounter}</div>
        <button onClick={clicker}>REF: Nya-nya!</button>
        <button onClick={turboClicker}>STATE: Nya-nya!</button>
        <div ref={crazyRef}className="crazy">CRAZY!!!</div>
    </>)
}

export default App;