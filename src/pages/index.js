import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Search from '../components/search';

const index = () => {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);


    const onSearchTextChange = (text) => {
        setSearchText(text);
    }

    const onLanguageChange = (language) => {
        setLanguage(language);
    }


    return (
        <div>

            <Search searchText={searchText}
            language={language}
            onSearchTextChange = {onSearchTextChange}
            onLanguageChange = {onLanguageChange}/>
            
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


