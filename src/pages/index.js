import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const index = () => {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>

            <Search/>
            
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


