// import axios from 'axios';
import {axiosGetCancelable} from '../helpers/axios.helper';
import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username: process.env.GITHUB_CLIENT_ID,
        password: process.env.GITHUB_CLIENT_SECRET
    }
};

function searchRepos(searchText, language) {

// If there are no languages, use searchText
const query = language ? `${searchText}+language:${language}`: searchText;

if (isServer()) {
    return axios.get(
      `search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    );
  }

  return axiosGetCancelable(`api/search?q=${query}&sort=stars&order=desc`);
}

function isServer() {
    return typeof window === 'undefined';
  }

  function getRepo(id) {
    return axios.get(`repositories/${id}`, axiosConfig);
  }
  
  function getProfile(username) {
    return axios.get(`users/${username}`, axiosConfig);
  }
  

// Remove config since we now are making a request
// to our own API and not to Github
// return axiosGetCancelable(`api/search?q=${query}&sort=stars&order=desc`);

    // return axios.get(
    //     `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`,
    //     axiosConfig
    // );

    // return axiosGetCancelable(`search/repositories?q=${query}&sort=stars&order=desc`,
    // axiosConfig)

    


export {searchRepos, getProfile, getRepo};

