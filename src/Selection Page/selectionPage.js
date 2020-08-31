import React from 'react';
import "./style.css";
import maleBG from '../images/BackgroundImgL.jpg';
import femaleBG from '../images/BackgroundImgR.jpg';
import  { Redirect } from 'react-router-dom'

class selectionPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      /*
        alert('A name was submitted: ' + this.state.value);
        if(this.state.value === "M")
        {
          alert("Load female page");
        }
        else if(this.state.value === "F")
        {
          alert("Load female page");
        }*/
    }
  
    render() {
      if (this.state.value == "M") {
        return (
          <Redirect to="/AI-Chatbot"/>//redirect to male avatar
        )
      }
      if (this.state.value == "F") {
        return (
          <Redirect to="/AI-Chatbot"/>//redirect to female avatar
        )
      }
      return (
        <div>
          <form>
            <input className="leftColumn" type="image" src={ maleBG } value={this.value = 'M'} onClick={this.handleChange}/>
            <span className="leftText">Male</span>
            <input className="rightColumn" type="image" src={ femaleBG } value={this.value = 'F'} onClick={this.handleChange}/>
            <span className="rightText">Female</span>
          </form> 
          <header className="header">Hello who would you like helping you</header>       
        </div>
      );
    }
  }
 
export default selectionPage;