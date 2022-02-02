import axios from 'axios';


// NGROK CHANGES URL EVERY 8 HOURS. THIS NEEDS TO BE CHANGED EVERY 8 HOURS.
export default axios.create({
    baseURL: 'http://7a38-188-3-233-144.ngrok.io'
});