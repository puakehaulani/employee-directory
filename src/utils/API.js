import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";
function search() {
  return axios.get(BASEURL);
}
export default search;