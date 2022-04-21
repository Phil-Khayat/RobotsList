import React, { Component } from "react";
import Robot from "./Robot";
import axios from "axios";
import '../css/RobotsList.css';

const API_ROBOTS_LIST = "https://jsonplaceholder.typicode.com/users";

class RobotsList extends Component {
    constructor() {
        super();
        this.state = {
            robotsItemList: [],
            robotsImg: [],
            myInputValue: ""
        }
    }

async componentDidMount () {
    let robots = await axios.get(API_ROBOTS_LIST);

    robots.data.map( (x) => {
        this.setState( { robotsItemList: [...this.state.robotsItemList, x] } );
    });
    // console.log("Liste des robots dans le state[]: ", this.state.robotsItemList);
}

inputSearch = (event) => {
    this.setState({myInputValue: event.target.value});
    // console.log("myInputValue: ", this.state.myInputValue);
}

render () {
    // let robots = this.state.robotsItemList.map(x => <Robot className="robot-component" key={x.id} robot={x} />);
    let robots = this.state.robotsItemList.filter( (x) => x.name.toLowerCase().includes(this.state.myInputValue.toLowerCase()) || x.email.toLowerCase().includes(this.state.myInputValue.toLowerCase()) ).map(x => <Robot className="robot-component" key={x.id} robot={x} />);

    // console.log("Liste des robots components: ",robots);
    //console.log("myInputValue: ", this.state.myInputValue);

    return (
        <div id="main">
            <div id="header">Robots Friends : <input value={this.state.myInputValue} onChange={this.inputSearch} placeholder="Recherchez un robot" type="text"></input></div>
            {/* <div id="header">Robots Friends : <input value={this.state.myInputValue} onChange={event => this.setState({myInputValue: event.target.value})} placeholder="Recherchez un robot" type="text"></input></div> */}
            <div>
                <div id="conteneur">{robots}</div>
            </div>
        </div>
        )   
    };
}

export default RobotsList;