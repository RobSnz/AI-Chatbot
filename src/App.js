import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';


const mainStyle = {
  backgroundColor: '#282c34',
  width: '500px',
  border: '4px solid black',
  borderRadius: '10px'
};

const headerStyle = {
  color: 'white',
  textAlign: 'center',
  fontSize: '40px',
};

const textStyle = {
  color: 'white',
  textAlign: 'center',
  paddingBottom: '15px',
  fontSize: '20px'
};

const queryStyle = {
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
};

const chatbot = {
  color: 'black',
  backgroundColor: '#3283a8',
  width: '300px',
  wordWrap: 'break-word',
  listStyleType: 'none',
  textAlign: 'left',
  paddingTop: '5px',
  paddingLeft: '3px',
  marginBottom: '20px',
  borderRadius: '10px',
};

const user = {
  position: 'relative',
  color: 'black',
  backgroundColor: '#a83832',
  width: '300px',
  wordWrap: 'break-word',
  listStyleType: 'none',
  textAlign: 'right',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingRight: '3px',
  marginBottom: '20px',
  marginLeft: '100px',
  borderRadius: '10px',
  boxSizing: 'border-box',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {query: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const {query} = this.state;
    const {sendMessage} = this.props;

    if(query.trim() === "") {
      alert("Query but not be blank!");
      return;
    } else {
      sendMessage(query);
      this.setState({query: ""})
      event.preventDefault();
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() {
    const {feed} = this.props;

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
        <form onSubmit={this.handleSubmit} style={textStyle}>
          <input type='text' placeholder='Enter Query!' onChange={this.handleChange} value={this.state.query} />
          <p><button>Send Query</button></p>
        </form>
        
        <AI-Robot> </AI-Robot>
      </div>

      
    )
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps, {sendMessage})(App);

/*
<p style={textStyle}>Enter query:
  <input  type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null}/>
</p>
*/