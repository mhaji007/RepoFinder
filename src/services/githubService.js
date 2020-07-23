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

    return axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`,
        axiosConfig
    );
}