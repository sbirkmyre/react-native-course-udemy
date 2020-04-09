import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer yktYdu4M-dUrw5zaOmWgdYhZFcWcBLw9chg4sJfCg2uV3bXwodzZ-ReW9op2M4uciM3sM-xCYBaCIlzMjhuT_eFeqKbimO__TVl4mpFzgc8lrXuk_057mWWaP0iKXnYx'
  }
});
