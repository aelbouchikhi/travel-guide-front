import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers :  {
        'Content-Type': 'application/json',
    }
})

export function getSuggestions(query){
    return api.get(`api/places/autocomplete?q=${query}`);
}
export function getPlaces(query){
    return api.get(`/api/places/search?q=${query}`);
}



export default api;