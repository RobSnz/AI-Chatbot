import axios from 'axios';

function storeRating(sender, num)
{
    const ratingValue = {
        username: sender,
        rating: num
    };
    
    axios.post('/ratings/add', ratingValue)
    .then(res => console.log(res.data))
}

export default storeRating;

