import React from 'react';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

import { BiSend } from 'react-icons/bi';
import { BiMicrophone } from 'react-icons/bi';
import { GiSpeaker } from 'react-icons/gi';

import { sendMessage } from '../chat';
import storeDB from "../StoreDB";
import styles from '../mystyle.module.css';
import PageTransition from "./PageTransition";
import StarRating from "./Rating/StarRating";
import Navigation from '../Navbar';

import maleChatHead from '../images/Icon(2).svg';
import femaleChatHead from '../images/fem-icon.svg';
import userHead from '../images/userT.png';

import AvatarMale from "../components/Avatar-Male-2";
import AvatarFemale from "../components/Avatar-Female(3)";


class Chatbot extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', 
      colour: 'white', 
      avatar: 'robot', 

      eyes_scaleY: 1,     
      bgColor : "white", //D0CDE1  
      eyes_translateY: 1,
      mouth_scaleY: 1,
      mouth_duration: 0,
      eyesBrows_translateY: 1,
      catTail : 20,
      fingerclickY: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Function which is called everytime the whole component has an update
  componentDidUpdate = () => {
    this.scrollToTop();
  }

  // Function which is called on enter or "Send Query" button press,
  // is used to 1) Check message isnt blank, 2) Send message, 3)
  // reset query to be blank
  handleSubmit(event) {
    event.preventDefault();

    const { query } = this.state;
    const { sendMessage } = this.props;

    if (query.trim() === "") {
      alert("Query must not be blank!");
      return;

    } else {
      this.updateAnimation();
      sendMessage(query);
      storeDB("user", query);
      this.setState({ query: "" });
      event.preventDefault();
    }
  }

  // Function which is called anytime a character is added into the query box
  // which updates the current query state to be sent to the chatbot
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  // Function which updates the box with messages to show the most recent message at the
  // bottom of the screen.
  scrollToTop() {
    var element = document.getElementById("messageBox");
    element.scrollTop = element.scrollHeight;
  }

  // Function which sets the date when a new message is processed
  setDateFunction(entry) {
    if(entry.date == null) {
      entry.date = new Date();
    }

    var minutes = entry.date.getMinutes();

    if(minutes < 10) minutes = "0" + minutes;

    var hours;

    if(entry.date.getHours() > 12) {
      hours = entry.date.getHours() % 12 || 12;
      entry.date = hours + ":" + minutes + "pm";
    } else {
      hours = entry.date.getHours();
      entry.date = hours + ":" + minutes + "am";
    }
  }

  updateAnimation() {
    this.setState({
      eyes_scaleY: 0.5, 
      eyes_translateY: 17,
      mouth_scaleY: 0,
      mouth_duration: "Infinity",
      eyesBrows_translateY: 17,
      fingerclickY: -81
    })

    setTimeout(() => {
      this.setState({
        mouth_scaleY: 1,
        eyesBrows_translateY: 1,
        fingerclickY: 1
      })
    }, 5000);
  }

  render() {
    const { messages } = this.props;
    const { data } = this.props.location;
    var avatarName;
    var shownAvatar;
    var shownIcon;
    var counter = 0;
    var endResponse = "You're welcome! Let me know if you have any more questions. Leave a rating to let me know how I did!";

    if(data === "Cassy") {
      shownAvatar = <AvatarFemale eyes_scaleY = {this.state.eyes_scaleY} 
        eyes_translateY = {this.state.eyes_translateY} 
        bgColor = {this.state.bgColor} 
        width = "60%"
        catTail = {this.state.catTail}
        mouth_scaleY = {this.state.mouth_scaleY}
        mouth_duration = {this.state.mouth_duration}
        eyesBrows_translateY = {this.state.eyesBrows_translateY}
        fingerclickY = {this.state.fingerclickY}> 
      </AvatarFemale>;

      avatarName = "Cassy";
      shownIcon = femaleChatHead;
    } else {
      shownAvatar = <AvatarMale eyes_scaleY = {this.state.eyes_scaleY} 
        eyes_translateY = {this.state.eyes_translateY} 
        bgColor = {this.state.bgColor}  
        width = "60%"
        catTail = {this.state.catTail}
        mouth_scaleY = {this.state.mouth_scaleY}
        mouth_duration = {this.state.mouth_duration}
        eyesBrows_translateY = {this.state.eyesBrows_translateY}
        fingerclickY = {this.state.fingerclickY}>
      </AvatarMale>;

      avatarName = "Alex"
      shownIcon = maleChatHead;
    }
    
    const Mic = () => {
      const { transcript } = useSpeechRecognition();

      if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }

      const mouseUpFunction = () => {
        this.setState({ query: transcript });
        SpeechRecognition.stopListening();
        this.scrollToTop();
        this.setState({ colour: "white" });
      }

      const mouseDownFunction = () => {
        SpeechRecognition.startListening();
        this.setState({ colour: "red" });
      }

      return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={ styles.buttonStyle } onMouseDown={ mouseDownFunction }
        onMouseUp={ mouseUpFunction }><BiMicrophone size="25px" color={ this.state.colour } style={{ marginBottom: "20px"}}/></motion.button>
      )
    }

    const Speech = (speech) => {
      const { speak, voices } = useSpeechSynthesis();
      var voice;

      if(data === "Cassy") {
        voice = voices[1];
      } else {
        voice = voices[0];
      }

      const onclickSpeech = () => {
        this.updateAnimation();
        speak({ text: speech.speech, voice: voice });
      }

      return (
        <button className={ styles.buttonStyle } onClick={onclickSpeech}><GiSpeaker size="20px" color="black"/></button>
      );
    }

    return (
      <div>
        <Navigation></Navigation>
        <motion.div initial = "out" animate ="in"  exit = "out" variants = { PageTransition }>
          <motion.div 
            //popup animation
            intial = {{ opacity : 0, scale : 0 }} 
            animate = {{ opacity : 1, scale : 1.1 }}
            transition={{ duration: 1 }}
            className={ styles.chatWindowStyle }>
            <div>              
              <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  if(entry.date == null) {
                    this.setDateFunction(entry, messages.length);
                  }

                  counter++;

                  if(entry.sender === "user") {
                    return <div key={ counter }><img src={ userHead } alt='user' className={ styles.imgStyleSmall } style={{ position: "relative", left: "285px", top: "55px" }}/>
                      <ul className={ styles.userStyle }><li className={ styles.titleStyleSmall }>User{ entry.date }<Speech speech={ entry.text}/></li>
                      <br />{ entry.text }</ul></div>;
                  } else {
                    if(entry.text === endResponse) {
                      return <div key={ counter }><img src={ shownIcon } alt='chatbot'  style={{ position: "relative", top: "80px", right: "35px" }} />
                        <ul className={ styles.chatbotStyle }><li className={ styles.titleStyleSmall}>{ avatarName } { entry.date }<Speech speech={ entry.text }/></li>
                        <br />{ entry.text }<StarRating/></ul></div>;
                    } else {
                      return <div key={ counter }><img src={ shownIcon } alt='chatbot'  style={{ position: "relative", top: "80px", right: "35px" }} />
                        <ul className={ styles.chatbotStyle }><li className={ styles.titleStyleSmall}>{ avatarName } { entry.date }<Speech speech={ entry.text }/></li>
                        <br />{ entry.text }</ul></div>;
                    }
                  }
                })}
              </ul>

              <form className={ styles.inputBoxStyle } onSubmit={ this.handleSubmit }>
                <textarea onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e); }}
                  style={{ width: "255px", height: "30px", overflowWrap: "break-word", resize: "none", marginLeft: "15px" }}
                  type='text' placeholder='Enter Query!' onChange={ this.handleChange }
                  value={ this.state.query } className={ styles.fontChoice }
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={ styles.buttonStyle } >
                  <BiSend size="25px" color="white" style={{ marginBottom: "20px"}}/>
                </motion.button>
                <Mic />
              </form>
            </div>
          </motion.div>
        </motion.div>
        { shownAvatar }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps, { sendMessage })(Chatbot);