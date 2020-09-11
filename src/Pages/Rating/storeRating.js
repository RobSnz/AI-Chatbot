import axios from 'axios';

function storeRating(num)
{
    const ratingValue = {
    username: "TestUser",
    rating: num
    };
    
    axios.post('http://localhost:5000/ratings/add', ratingValue)
    .then(res => console.log(res.data))
}

export default storeRating;

