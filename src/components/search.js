import React from 'react';
import TextInput from './shared/text-input';
import Select from './shared/select';

const Search = (props) => {
    
    const {language, searchText, onSearchTextChange, onLanguageChange} = props;
    
    // Options used in select
    const language = []
    
    return (
        
        <div>
            <TextInput
            label = "Repo Search"
            value={searchText}
            onChange={(value) => onSearchTextChange(value)}/>

            <Select
            lable="language"
            value={language}
            options={languages}
            onChange={(value) => onLanguageChange(value)}
            />

        </div>

    );
}

export default Search;


