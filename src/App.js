import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './chat';
import chatHead from './images/Avatar-Icon.png';
import userHead from './images/userT.png';
import styles from './mystyle.module.css';
import Robot from "./components/Robot";
import Man2 from "./components/Man2";
import ReactAnime from 'react-animejs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', avatar: 'robot', counter: 0 };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Method which is called everytime the whole component has an update
  componentDidUpdate() {
    this.scrollToTop();
  }

  // Method which is called on enter or "Send Query" button press,
  // is used to 1) Check message isnt blank, 2) Send message, 3)
  // reset query to be blank
  handleSubmit(event) {
    event.preventDefault();
    
    const { query } = this.state;
    const { sendMessage } = this.props;

    if (query.trim() === "") {
      alert("Query but not be blank!");
      return;

    } else {
      sendMessage(query);
      this.setState({ query: "" });
      event.preventDefault();
    }
  }

  // Method which is called anytime a character is added into the query box
  // which updates the current query state to be sent to the chatbot
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  // Method which updates the box with messages to show the most recent message at the
  // bottom of the screen.
  scrollToTop() {
    var element = document.getElementById("messageBox");
    element.scrollTop = element.scrollHeight;
  }

  // Method which sets the date when a new message is processed
  setDate(entry) {
    if(entry.date == null) {
      entry.date = new Date();
    }

    var minutes = entry.date.getMinutes();
    
    if(minutes < 10) {
      minutes = "0" + minutes;
    }

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
    const { Anime, Stagger } = ReactAnime;
    
    return (
      <div>
        <div>
          <div className={ styles.chatWindowStyle }>
            <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  this.state.counter++;
                  if(entry.date == null) {
                    this.setDate(entry);
                  }

                  if(entry.sender === "user") {
                    return <div key={this.state.counter}><img src={ userHead } alt='user' className={ styles.imgStyle }></img><ul className={ styles.userStyle }><li className={ styles.titleStyle }>User { entry.date }</li><br />{ entry.text }</ul></div>;
                  } else {
                    return <div key={this.state.counter}><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }></img><ul className={ styles.chatbotStyle }><li className={ styles.titleStyle }>Chatbot { entry.date }</li><br />{ entry.text }</ul></div>;
                  }
                })}
            </ul>
            
            <form onSubmit={ this.handleSubmit } className={ styles.inputBoxStyle }>
              <textarea onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}} style={{ width: "200px", height: "50px", overflowWrap: "break-word"}} type='text' placeholder='Enter Query!' onChange={ this.handleChange } value={ this.state.query } className={ styles.fontChoice }/>
            </form>
          </div>
        </div>

        <Anime
          initial={[
            {
              targets: "#Box",
              translateX: 50,
              easing: "linear",
              loop: true,
              duration: 10000,
              keyframes: [
                {
                  translateX: 630
                },
                {
                  translateY: 700
                },
                {
                  translateX: 0
                },
                {
                  translateY: 0
                }
              ],
            }
          ]}
        >
          <div id="Box" style={{ height: 50, width: 50, background: "#194a70", marginLeft: "60%" }} />
        </Anime>
        <Robot></Robot>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps, { sendMessage })(App);
//<h1 className={ styles.headerStyle }>AI Helpdesk Chatbot</h1>
//<button className={ styles.fontChoice }>Send Query</button>