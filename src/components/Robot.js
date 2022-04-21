import React, { Component } from "react";
import '../css/Robot.css';
import RobotsList from "./RobotsList";

const API_ROBOTS_IMG = "https://robohash.org/";

function Robot({robot}) {

    let img = API_ROBOTS_IMG + robot.id;
    // let img = API_ROBOTS_IMG + ( ( Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)) * robot.id);
    
    return (
        <div className="card">
            <img className="robots" src={img} />
            <span id="robot-name">{robot.name}</span>
            <span id="robot-mail">{robot.email}</span>
        </div>
    );
}

export default Robot;