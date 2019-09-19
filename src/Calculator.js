import React, { Component } from 'react';
import Buttons from './Buttons';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Calculator extends Component {
  constructor(props){
    super(props);

    //this.writeJoska = this.writeJoska.bind(this);

    this.state = {
        firstNr: 0,
        firstToOp: false,
        secondNr: 0,
        secondToOp: false,
        operation: "",
        clicked: "Let's calculate"
    }

}

  writeJoska(event){
    console.log("JOSKA");
    console.log(this);

  }

  handleClick(e){
    if(this.state.firstNr === 0 && !this.state.firstToOp){
        this.setState({
            firstNr: parseInt(e.target.textContent),
            firstToOp: true,
            clicked: e.target.textContent
        });
    }
    else if(this.state.secondNr === 0 && !this.state.secondToOp && this.state.operation !== ""){
      this.setState({
          secondNr: parseInt(e.target.textContent),
          secondToOp: true,
          clicked: e.target.textContent
      });
    }
    else if(!this.state.secondToOp && this.state.operation == ""){
      this.setState({
        clicked: "!enter operator first!"
    });
    }
  }

operationClick = (e) => {
    if(e.target.textContent != "="){
    this.setState({
      operation: e.target.textContent,
      clicked: e.target.textContent
    });
    }
    else {
      this.calculate(parseInt(this.state.firstNr), parseInt(this.state.secondNr), this.state.operation);
    }
  }

  calculate(firstNum, secondNum, operator){
    console.log(firstNum + "" + operator + "" + secondNum);
    if(operator == "+"){
        this.setState({
          operation: operator,
          clicked: firstNum + secondNum
        }); 
    }
    else if(operator == "-"){
        this.setState({
          operation: operator,
          clicked: (firstNum - secondNum)
        }); 
    }
  }


  deleteText = (e) => {
    this.setState({
        firstNr: 0,
        firstToOp: false,
        secondNr: 0,
        secondToOp: false,
        operation: "",
        clicked: ""
    });   
  }


componentDidUpdate(props, state){
  /*if(this.state.firstToOp && this.state.secondToOp)
  {
    document.getElementById("inputBox").value = parseInt(this.state.firstNr + this.state.secondNr);
  }*/
}

  
  render() {

    return (
      <div>
          <h2>Welcome to my Calculator</h2>

          <Form.Control className="result"  type="text" readOnly={true} id="inputBox" value= {this.state.clicked}/>
          
          <Buttons
            onNumber={(e) => this.handleClick(e)}
            onOperation={(e) => this.operationClick(e)}
            onDelete={(e) => this.deleteText(e)}
          /> 
      </div>
    );
  }
}

export default Calculator;
