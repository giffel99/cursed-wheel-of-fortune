import React, { Component } from 'react';
import arrow from "../assets/arrow.png"
import "../App.css"
class Circle extends Component {

    constructor(props) {
      super(props);
        this.state = {
            rotate: false,
            toggle: false,
            angle: 0
        };
      //  this.rotatingDone = this.rotatingDone.bind(this);

      
      }
/*
      componentDidMount() {
        const elm = this.image;
        elm.addEventListener("animationend", this.rotatingDone);
      }
      componentWillUnmount() {
        const elm = this.image;
        elm.removeEventListener("animationend", this.rotatingDone);
      }
    
      rotatingDone() {
        this.setState(function(state) {
          return {
            toggle: !state.toggle,
            rotate: false
          };
        });
      }
     */
    
     /* rotationStyle =  () =>  {
          return {
        transform:  `rotate(${this.state.angle}deg)` , 
        transition: 'transform 150ms ease', // smooth transition
       }
    };
*/
      rotate(amount){
          //(this.state.angle % 360 === 0)?
         
        this.setState({ angle:  this.state.angle + 20 * amount, rotate:true });
        console.log("State set " + this.state.angle)
        
      }

    circleStyles = {
        width:700,
        height:700,
    };
    
    render() { 
            this.rotationStyle = {
            transform:  `rotate(${this.state.angle}deg)` , 
            transition: `transform ${ 10000 }ms ease`, // smooth transition
            
           };

                return (
            <div style={this.circleStyles} className="  d-flex justify-content-center align-items-center rounded-circle ">
            <div className="" >
            
            <img src={
                arrow
            }
            alt="Nothing"
        ref={elm => {
          this.image = elm;
        }}
       style={this.rotationStyle}
       className=""
      />

            </div>

            </div>
        );
    }
}

export default Circle;