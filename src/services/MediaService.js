import axios from 'axios'
import apikey from '../../apikey';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getResults(name) {
        try {
            return await apiClient.get(`/3/search/movie?api_key=${apikey.apikey}&language=en-US&query=${name}&page=1&include_adult=false`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getDetails(id) {
        try {
            return await apiClient.get(`/3/movie/${id}?api_key=${apikey.apikey}`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getTrending() {
        try {
            return await apiClient.get(`/3/trending/movie/day?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getPopular() {
        try {
            return await apiClient.get(`/3/movie/popular?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getTopRated() {
        try {
            return await apiClient.get(`/3/movie/top_rated?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getNowPlaying() {
        try {
            return await apiClient.get(`/3/movie/now_playing?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getRecommended(id) {
        try {
            return await apiClient.get(`/3/movie/${id}/recommendations?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getSimilar(id) {
        try {
            return await apiClient.get(`/3/movie/${id}/similar?api_key=${apikey.apikey}&language=en-US&page=1`);
        }
        catch (err) {
            console.log(err)
        }
    }
}