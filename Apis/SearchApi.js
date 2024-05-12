import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers :  {
        'Content-Type': 'application/json',
    }
})

export function getCity(query){
    return api.get(`/api/places/search?q=${query}`);
}
export function getResturants(query){
    return api.get(`/api/hotels?location=${query}`);
}



export default api;