import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';

const mainStyle = {
  backgroundColor: '#282c34',
  width: '500px'
};

const headerStyle = {
  color: 'white'
};

const queryStyle = {
  color: 'white',
  backgroundColor: '#282c34',
  boxSizing: 'border-box',
  height: '300px',
  paddingTop: "20px",
  paddingBottom: "20px",
  border: "1px solid",
  wordWrap: 'break-word',
  overflow: 'scroll'
};

const chatbot = {
  color: 'black',
  width: '200px',
  backgroundColor: '#3283a8',
  paddingTop: '5px',
  wordWrap: 'break-word',
  paddingBottom: '5px'
};

const user = {
  color: 'black',
  width: '200px',
  backgroundColor: '#a83832',
  paddingTop: '5px',
  wordWrap: 'break-word',
  textAlign: 'right',
  paddingBottom: '5px',
};

class App extends React.Component {
  render() {
    const {feed, sendMessage} = this.props;

    return (
      <div style={mainStyle}>
        <h1 style={headerStyle}>AI Helpdesk Chatbot</h1>
        
          <ul style={queryStyle}>
              {feed.map(entry => {
                if(entry.sender === "user") {
                  return <li style={user}>{entry.text}</li>;
                } else {
                  return <li style={chatbot}>{entry.text}</li>;
                }
              })}
          </ul>
        
        <p style={headerStyle}>Enter query:
          <input 
            type="text" 
            onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null}
          />
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps, {sendMessage})(App);