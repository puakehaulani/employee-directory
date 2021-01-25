import axios from "axios";

function API() {
  return axios.get("https://randomuser.me/api/20");
};

export default API