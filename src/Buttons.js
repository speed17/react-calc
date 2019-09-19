import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Buttons extends Component {
    constructor(props){
        super(props);
    }

    handleClick = (e) => {
        this.props.onNumber(e);
        //test commit
    }

    operationClick = (e) => {
        this.props.onOperation(e);
    }

    deleteText = (e) => {
        this.props.onDelete(e);
    }
  
    render(){
      return (
        <div>
        <p>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>7</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>8</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>9</Button>
        <Button variant="info" onClick={(e) => this.operationClick(e)}>+</Button>
        <Button variant="warning" onClick={(e) => this.deleteText(e)}>DEL</Button>
        </p>

        <p>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>4</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>5</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>6</Button>
        <Button variant="info" onClick={(e) => this.operationClick(e)}>-</Button>
        </p>

        <p>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>1</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>2</Button>
        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>3</Button>
        <Button variant="info" onClick={(e) => this.operationClick(e)}>=</Button>
        </p>

        <Button variant="secondary" onClick={(e) => this.handleClick(e)}>0</Button>

        <Button variant="secondary">joska</Button> 
        </div>  
      )
  }

  }

  export default Buttons;