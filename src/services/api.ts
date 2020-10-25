import axios from 'axios'

const port = 3000;
const url = `http://localhost:${port}/v1/`

const api = axios.create({
    baseURL: url
})


export default api