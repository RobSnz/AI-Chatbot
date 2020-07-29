import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';
import chatHead from './chatbotT.png';
import userHead from './userT.png';
import chatbotMain from './bigChatbot.png'

const fontType = 'courier'; // Global variable to change the font for each part of the interface

const backgroundStyle = { // Style to position avatar
  width: '50%',
  float: 'right',
  paddingRight: '15%'
};

const chatWindowStyle = { // Style to position main chat window
  backgroundColor: '#282c34',
  width: '30%',
  border: '4px solid black',
  borderRadius: '10px',
};

const headerStyle = { // Style for "AI Helpdesk Chatbot" header
  color: 'white',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: fontType
};

const inputBoxStyle = { // Style to change text box style
  color: 'white',
  textAlign: 'center',
  paddingBottom: '15px',
  fontSize: '20px',
  fontFamily: fontType
};

const queryBoxStyle = { // Style for query box
  color: 'white',
  backgroundColor: '#282c34',
  boxSizing: 'border-box',
  borderRadius: '5px',
  height: '300px',
  paddingTop: "20px",
  paddingBottom: "20px",
  border: "1px solid",
  wordWrap: 'break-word',
  overflow: 'auto',
  fontFamily: fontType
};

var chatbotStyle = { // Style for chatbot messages
  color: 'black',
  backgroundColor: '#3283a8',
  width: '250px',
  wordWrap: 'break-word',
  listStyleType: 'none',
  textAlign: 'left',
  paddingTop: '5px',
  paddingLeft: '3px',
  paddingBottom: '5px',
  marginBottom: '20px',
  marginLeft: '40px',
  borderRadius: '10px',
  boxSizing: 'border-box',
};

var userStyle = { // style for user messages
  position: 'relative',
  color: 'black',
  backgroundColor: '#a83832',
  width: '250px',
  wordWrap: 'break-word',
  listStyleType: 'none',
  textAlign: 'left',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingRight: '3px',
  marginBottom: '20px',
  marginLeft: '115px',
  borderRadius: '10px',
  boxSizing: 'border-box',
};

const chatImgStyle = { // style for chatbot image
  float: 'left',
  width: '35px',
  height: '30px',
}

const userImgStyle = { // style for user image
  float: 'right',
  paddingRight: '40px',
  width: '35px',
  height: '30px',
}

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

    if(query.trim() === "") {
      alert("Query but not be blank!");
      return;
    } else {
      sendMessage(query);
      this.setState({ query: "" });
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

  render() {
    const { messages } = this.props;

    return (
      <div>
        <img src={ chatbotMain } alt='chatbotMain' style={ backgroundStyle }></img>

        <div style={ chatWindowStyle }>
          <h1 style={ headerStyle }>AI Helpdesk Chatbot</h1>

          <ul style={ queryBoxStyle } id="messageBox">
              {messages.map(entry => {
                if(entry.sender === "user") {
                  return <div><img src={ userHead } alt='user' style={ userImgStyle }></img><li style={ userStyle }>{ entry.text }</li></div>;
                } else {
                  return <div><img src={ chatHead } alt='chatbot' style={ chatImgStyle }></img><li style={ chatbotStyle }>{ entry.text }</li></div>;
                }
              })}
          </ul>
          
          <form onSubmit={ this.handleSubmit } style={ inputBoxStyle }>
            <input type='text' placeholder='Enter Query!' onChange={ this.handleChange } value={ this.state.query } style={ { fontFamily: fontType } }/>
            <p><button style={ { fontFamily: fontType } }>Send Query</button></p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps, {sendMessage})(App);