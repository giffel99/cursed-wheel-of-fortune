import React, { Component } from 'react';
import Circle from './circle';

class Index extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.circleRef = React.createRef();

      }


      handleClick () {
       
            this.circleRef.current.rotate( 100 + Math.floor(Math.random() * 100))
        
      }

    render() {
        return (
        <div className="index">          
      <button type="button" className="mt-5 mr-5 p-3 btn btn-primary" onClick={this.handleClick} >PRESS FOR ACTION</button>

       <div className="h1">WHEEL OF FORTUNE</div>
     
      <div className=" position d-flex justify-content-center">
      <Circle
      ref={this.circleRef}
      ></Circle>

     </div>     

    
 </div>
        );
    }
}

export default Index;