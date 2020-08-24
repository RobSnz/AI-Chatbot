import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './chat';
import chatHead from './images/Avatar-Icon.png';
import userHead from './images/userT.png';
import styles from './mystyle.module.css';
import AvatarMale from "./components/Avatar-Male";
import AvatarFemale from "./components/Avatar-Female";
//import ReactAnime from 'react-animejs';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Animation from './AnimatedCircles';
import { BiSend } from 'react-icons/bi';
import { BiMicrophone } from 'react-icons/bi';
import Nav from "./Nav";
import About from "./About";
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', avatar: 'robot'};

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
      sendMessage(query);
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

  render() {
    const { messages } = this.props;
    var counter = 0;

    const Mic = () => {
      const { transcript } = useSpeechRecognition()

      if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }

      const buttonFunc = () => {
        this.setState({ query: transcript });
        SpeechRecognition.stopListening();
        this.scrollToTop();
      }

      return (
        <button className={ styles.buttonStyle } onMouseDown={SpeechRecognition.startListening}
        onMouseUp={buttonFunc}><BiMicrophone size="30px" color="red"/></button>
      )
    }

    return (
      <div>
          {/* <Robot></Robot> */}
          <Nav></Nav>
          <AvatarMale></AvatarMale>
          <div className={ styles.chatWindowStyle }>
            <div>
              <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  if(entry.date == null) {
                    this.setDateFunction(entry, messages.length);
                  }

                  counter++;

                  if(entry.sender === "user") {
                    return <div key={ counter }><img src={ userHead } alt='user' className={ styles.imgStyleSmall }>
                      </img><ul className={ styles.userStyle }><li className={ styles.titleStyleSmall }>User { entry.date }</li>
                      <br />{ entry.text }</ul></div>;
                  } else {
                    if(counter === messages.length) {
                      return <div key={ counter }><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }>
                        </img><ul className={ styles.chatbotStyleBig }><li className={ styles.titleStyle }>Chatbot { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    } else {
                      return <div key={ counter }><img src={ chatHead } alt='chatbot' className={ styles.imgStyleSmall }>
                        </img><ul className={ styles.chatbotStyle } onClick={ this.changeSize } ><li className={ styles.titleStyleSmall}>Chatbot { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    }
                  }
                })}
            </ul>

            <form className={ styles.inputBoxStyle } onSubmit={ this.handleSubmit }>
              <textarea onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                style={{ width: "220px", height: "25px", overflowWrap: "break-word", resize: "none"}}
                type='text' placeholder='Enter Query!' onChange={ this.handleChange }
                value={ this.state.query } className={ styles.fontChoice }
              />
              <button className={ styles.buttonStyle } ><BiSend size="30px" color="#61658B"/></button>
              <Mic />
            </form>
            <Animation></Animation>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps, { sendMessage })(App);
