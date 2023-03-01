import axios from "axios";

const Axios = axios.create({
    baseURL : 'http://cinegest.nicolasbarbey.fr/api/1',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export default Axios;