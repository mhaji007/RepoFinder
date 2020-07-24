import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Search from '../components/search';
import {searchRepos} from '../services/githubService';

const index = () => {

    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);


    const onSearchTextChange = (text) => {
        setSearchText(text);
        if (text) {

            loadRepos(text, language);
        }
    }

    const onLanguageChange = (language) => {
        setLanguage(language);
        loadRepos(searchText, language)
    }

    const loadRepos = async (searchText, language) => {
        setLoading(true);
        const res = await searchRepos(searchText, language);
        
        if (res && res.data) {
            
            setLoading(false);
            setRepos(res.data.items);
        }
        
    };


    return (
        <div>

            <Search searchText={searchText}
            language={language}
            onSearchTextChange = {onSearchTextChange}
            onLanguageChange = {onLanguageChange}/>
            
            {loading? 'Loading...' : <div>{JSON.stringify(repos, null, 2)}</div>}
        
        </div>

    )
}

export const getServerSideProps = async() => {
    return {
        props: {
            value: 1
        }
    }
}

export default index;


