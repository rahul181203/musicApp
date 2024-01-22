import axios from "axios";

const instance = axios.create({
    baseURL:"https://musicappserver.vercel.app/api/v1",
    headers:{"Content-Type":"application/json",'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',}
})

export default instance