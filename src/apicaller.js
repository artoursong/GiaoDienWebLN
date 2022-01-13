import axios from 'axios';


export default function callApi(endpoint, method, body){
    return axios({
        method: method,
        url: `https://localhost:5001/${endpoint}`,
        data: body,
        // withCredentials: true
      }).catch((err) => {
          console.log(err);
        });
        
}