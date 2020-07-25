// import axios from 'axios';
import {axiosGetCancelable} from '../helpers/axios.helper';

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

// Remove config since we now are making a request
// to our own API and not to Github
return axiosGetCancelable(`api/search?q=${query}&sort=stars&order=desc`);

    // return axios.get(
    //     `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`,
    //     axiosConfig
    // );

    // return axiosGetCancelable(`search/repositories?q=${query}&sort=stars&order=desc`,
    // axiosConfig)

    
}

export {searchRepos};

