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
  paddingTop: "60px",
  paddingBottom: "60px",
  border: "1px solid",
  wordWrap: 'break-word',
  overflow: 'scroll'
};

const chatbot = {
  color: 'blue',
};

const user = {
  color: 'red'
};

class App extends React.Component {
  render() {
    const {feed, sendMessage} = this.props;
    console.log(this.props);

    const number = feed.length;
    const styleType = feed[number-1].sender;
    console.log(styleType);

    return (
      <div style={mainStyle}>
        <h1 style={headerStyle}>AI Helpdesk Chatbot</h1>
        
        
          <ul style={queryStyle}>
              {feed.map(entry => <li style={chatbot}>{entry.text}</li>)}
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