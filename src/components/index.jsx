import React, { Component } from 'react';
import Circle from './circle';
import fireBall from "../assets/fireball-long.m4a";
class Index extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.circleRef = React.createRef();
    this.state = {
      audio: new Audio(fireBall),
    };

  }
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async handleClick() {
    this.circleRef.current.rotate(100 + Math.floor(Math.random() * 200));
    this.state.audio.volume = 1;
    this.state.audio.play()
    this.sleep(10000)
      .then(() => { this.fade(this.state.audio) });
  }

  fade = () => {
    if (this.state.audio.volume - 0.01 > 0) {
      this.state.audio.volume -= 0.01;
      console.log("!!!");
      setTimeout(this.fade, 20);

    } else {
      this.state.audio.pause();
    }
  }

  render() {
    let listOfNollK = [
      { text: "IT", number: 3 },
      { text: "D", number: 2 },
      { text: "Z", number: 7 },
      { text: "V", number: 4 },
      { text: "AE", number: 5 },
      { text: "I", number: 6 },
      { text: "KFKB", number: 1 },
      { text: "TD", number: 8 },
      { text: "A", number: 9 },
      { text: "F", number: 10 },
    ];

    return (
      <div style={{ height: '100vh' }} className=" d-flex ">

        <div className=" row worldwide w-100 v-100 bg-light d-flex justify-content-center">
          <div className="display-1 text-dark row ">WHEEL OF FORTUNE</div>
          <div className="row justify-content-between"><div className="display-3 text-dark col-5 ">FEAT. MR WORLDWIDE</div>
            <div type="button" className="col col-2 align-self-end btn btn-primary" onClick={this.handleClick} >PRESS FOR ACTION ;)</div>
          </div>
          <div className="p-5 d-flex "><Circle

            listOfNollK={listOfNollK}
            ref={this.circleRef}
          ></Circle>
          </div>
          <div>

          </div>


        </div>


      </div >
    );
  }
}

export default Index;