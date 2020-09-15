import axios from 'axios';

function storeDB(sender, text) {
    const conversation = {
        username: sender,
        text: text
      };
    
    axios.post('http://localhost:5000/conversations/add', conversation)
    .then(res => console.log(res.data));
  }

export default storeDB;
