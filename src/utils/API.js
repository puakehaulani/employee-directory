import axios from "axios";

function API() {
  return axios.get("https://randomuser.me/api/20");
};

export default API

//need to be sure this is going to call and save to one obj that we will sort from, not make a call each filter/sort call made (or else all results will match that parameter and be new random users)