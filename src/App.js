import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './chat';
import chatHead from './images/Avatar-Icon.png';
import userHead from './images/userT.png';
import styles from './mystyle.module.css';
import Robot from "./components/Robot";
import Man from "./components/Man";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

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

  // Method which gives an entry a date if it doesnt already contain one
  setDate(entry) {
    if(entry.date == null) {
      entry.date = new Date();
    }

    var minutes = entry.date.getMinutes();
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

    return (
      <div>
        <div>
          <div className={ styles.chatWindowStyle }>
            <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  if(entry.date == null) {
                    this.setDate(entry);
                  }

                  if(entry.sender === "user") {
                    return <div><img src={ userHead } alt='user' className={ styles.imgStyle }></img><li className={ styles.userStyle }><li className={ styles.titleStyle }>User { entry.date }</li><br />{ entry.text }</li></div>;
                  } else {
                    return <div><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }></img><li className={ styles.chatbotStyle }><li className={ styles.titleStyle }>Chatbot { entry.date }</li><br />{ entry.text }</li></div>;
                  }
                })}
            </ul>
            
            <form onSubmit={ this.handleSubmit } className={ styles.inputBoxStyle }>
              <input type='text' placeholder='Enter Query!' onChange={ this.handleChange } value={ this.state.query } className={ styles.fontChoice }/>
            </form>
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