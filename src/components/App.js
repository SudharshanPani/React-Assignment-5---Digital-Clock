import React, {Component, useState} from "react";
import '../styles/App.css';

const App =()=>{

    let time = new Date().toLocaleTimeString('en-US');
    const [currentTime, setCurrentTime] = React.useState(time);

    const updateTime=()=>{
        let time = new Date().toLocaleTimeString('en-US');
        setCurrentTime(time);
    }

    setTimeout(updateTime,1000)
    return(
        <>
        <div className="Clock" >
        <h1 id="time" >{currentTime}</h1>
        </div>
        </>
    )
}


export default App;
