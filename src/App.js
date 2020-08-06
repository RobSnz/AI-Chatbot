import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './chat';
import chatHead from './images/Avatar-Icon.png';
import userHead from './images/userT.png';
import styles from './mystyle.module.css';
import Robot from "./components/Robot";
import ReactAnime from 'react-animejs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', avatar: 'robot', counter: 0, keyValues: 0 };

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
    var number = this.state.counter;
    number++;
    this.setState({ counter: number});

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
    const { Anime } = ReactAnime;
    
    return (
      <div>
        <div>
          <div className={ styles.chatWindowStyle }>
            <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  if(entry.date == null) {
                    this.setDate(entry, messages.length);
                  }

                  console.log("Length: " + messages.length + ", Counter: " + this.state.counter);

                  if(entry.sender === "user") {
                    if(this.state.counter-1 === messages.length) {
                      return <div key={this.state.keyValues}><img src={ userHead } alt='user' className={ styles.imgStyle }>
                        </img><ul className={ styles.userStyleBig }><li className={ styles.titleStyle }>User { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    } else {
                      return <div key={this.state.keyValues}><img src={ userHead } alt='user' className={ styles.imgStyle }>
                        </img><ul className={ styles.userStyle }><li className={ styles.titleStyle }>User { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    }
                  } else {
                    if(this.state.counter-1 === messages.length) {
                      return <div key={this.state.keyValues}><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }>
                        </img><ul className={ styles.chatbotStyleBig }><li className={ styles.titleStyle }>Chatbot { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    } else {
                      return <div key={this.state.keyValues}><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }>
                        </img><ul className={ styles.chatbotStyle }><li className={ styles.titleStyle }>Chatbot { entry.date }</li>
                        <br />{ entry.text }</ul></div>;
                    }
                  }
                })}
            </ul>
            
            <form onSubmit={ this.handleSubmit } className={ styles.inputBoxStyle }>
              <textarea onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}} style={{ width: "220px", height: "25px", overflowWrap: "break-word", resize: "none"}} type='text' placeholder='Enter Query!' onChange={ this.handleChange } value={ this.state.query } className={ styles.fontChoice }/>
            </form>

            <Anime
              initial={[
                {
                  targets: "#Box",
                  translateX: 50,
                  easing: "linear",
                  loop: true,
                  duration: ReactAnime.stagger(400),
                  delay: 1000,
                  direction: "alternate",
                }
              ]}
            >
            <ul>
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "0px" }} />
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "-25px", marginLeft: "200px" }} />
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "-25px", marginLeft: "170px" }} />
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "-25px", marginLeft: "140px"  }} />
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "-25px", marginLeft: "110px" }} />
              <li id="Box" style={{ height: 25, width: 25, background: "#194a70", listStyleType: "none", marginTop: "-25px", marginLeft: "80px" }} />
            </ul>
            </Anime>
          </div>
        </div>
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
//        <div id="Box" style={{ height: 50, width: 50, background: "#194a70" }} />