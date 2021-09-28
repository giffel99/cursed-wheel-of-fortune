import React, { Component } from 'react';
import arrow from "../assets/fireball.png"
import "../App.css"
class Circle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      angle: 0,

    };


  }
  rotate(amount) {

    this.setState({ angle: this.state.angle + 20 * amount, rotate: true });

  }

  relativeX = (x) => {
    let rad = 280;
    let ang = x * 2 * Math.PI / 10;
    console.log(this.props.listOfNollK.length)

    return Math.cos(ang) * rad + 310;
  }

  relativeY = (y) => {
    let rad = 280;
    let ang = y * 2 * Math.PI / 10;

    return Math.sin(ang) * rad + 280 * 2;
  }

  listOfNollK = () => {

    return (this.props.listOfNollK.map(item => {
      console.log(item.text + "X " + this.relativeX(item.number));
      console.log(item.text + "Y " + this.relativeY(item.number));
      return (<div key={item.number} style={{
        zIndex: item.number,
        fontSize: '5rem',
        width: '10px',
        position: 'absolute', top: `${this.relativeY(item.number)}px`, left: `${this.relativeX(item.number)}px`
      }} className="nollk text-light" > {item.text}</div>);
    }));
  }

  render() {
    this.rotationStyle = {
      transform: `rotate(${this.state.angle}deg)`,
      transition: `transform ${10000}ms ease`, // smooth transition
      position: 'relative',
      left: 0,
      top: 0,
      zIndex: '50'
    };

    return (
      <div className=" globe bg-primary  d-flex justify-content-center align-items-center rounded-circle ">
        <div>

          {this.listOfNollK()}

          {<img src={arrow} alt="Nothing" ref={elm => { this.image = elm; }} style={this.rotationStyle} />}
        </div>

      </div>
    );
  }
}

export default Circle;