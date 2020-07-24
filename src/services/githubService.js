import axios from 'axios';
import {axiosGetCancelable} from '../helpers/axios.helper';

const axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    }
};

export function searchRepos(searchText, language) {

// If there are no languages, use searchText
const query = language ? `${searchText}+language:${language}`: searchText;

    // return axios.get(
    //     `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`,
    //     axiosConfig
    // );

    return axiosGetCancelable(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`,
    axiosConfig)
}