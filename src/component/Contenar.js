import React, { Component } from "react";
import Deitals from "./Deitals";

export default class Contenar extends Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            email:null,

        }
    }
    render(){
       return( 
       <div className="main">
        <h1>Sachin Mahajan</h1>
        <Deitals/>
        </div>
        );
    }
}