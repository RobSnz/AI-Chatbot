import axios from 'axios';

function storeRating(num)
{
    const ratingValue = {
    username: "user",
    rating: num
    };
    
    axios.post('/ratings/add', ratingValue)
    .then(res => console.log(res.data))
}

export default storeRating;

