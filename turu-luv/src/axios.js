import axios from "axios";

const instance= axios.create({
    baseURL:"https://turu-luv-backend.herokuapp.com"
})

export default instance;