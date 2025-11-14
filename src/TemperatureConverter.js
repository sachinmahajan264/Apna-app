import { useState } from "react";
import React from "react";

export default function TemperatureConverter(){
    const[celsius,setCelsius]= useState();
    const[fahrenheit,setFahrenheit]=useState();

    const onchangehendlar=(e)=>{
        const c= e.target.value;
        setCelsius(c);
        setFahrenheit(c !== "" ? (c * 9)/5 + 32 : "")
    };
    const onchangehendlarf=(e)=>{
         const f= e.target.value;
         setFahrenheit(f)
        setCelsius((f !== ""?((f-32)*5)/9 : ""));
    }
    return(
        <>
        <div>
            <h1 style={{textAlign:'center'}}>Temperature Converter</h1>
        </div>
        <div>
             <label>Celsius (°C) :</label>
             <input
                type="number"
                value={celsius}
                placeholder="Enter °C"
                onChange={onchangehendlar}

             />
        </div>
          <div>
             <label>Fahrenheit :</label>
             <input
                type="number"
                value={fahrenheit}
                placeholder="Enter °F"
                onChange={onchangehendlarf}

             />
        </div>
        <div>

        </div>
        </>
    )
}