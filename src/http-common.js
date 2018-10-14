import axios from "axios";
 
export default axios.create({
  baseURL: "http://localhost:8081/apilivros",
  headers: {
    "Content-type": "application/json",
  }
});