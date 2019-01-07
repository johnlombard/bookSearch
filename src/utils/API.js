import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDwtFCLRMezjrctbctLqs4uUIVh6zlwclY";

export default {
  search: function(query) {
    console.log(query);
    console.log(BASEURL + query );
    return axios.get(BASEURL + query);
  }
};
