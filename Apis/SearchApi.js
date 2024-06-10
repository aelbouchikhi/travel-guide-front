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
export function getAttractions(query){
    return api.get(`/api/attractions?location=${query}`);
}
export function getCityAllData(query){
    return api.get(`/api/places/search/all?q=${query}`)
}



export default api;