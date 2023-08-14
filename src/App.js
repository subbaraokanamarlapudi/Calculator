import Keypad from "./keypad";
import './App.css'
import { useState } from "react";

function App() {
    let [input , setInput] = useState("")

    function handleClick(value)
    {
        setInput(input + value)
    }

    function handleClear()
    {
        setInput("")
    }

    function calculate()
    {
        let outputVal = eval(input)
        setInput(outputVal)
    }

    return (
        <div className="container">
            <h1>
                Calculator App Using React 
            </h1>

            <div className="calculator">
                
                <input type="text" value={input} className="output" />

                <Keypad handleClick={handleClick} 
                         handleClear={handleClear} 
                         calculate={calculate}> 
                </Keypad>

            </div>
        </div>
    )
}

export default App;