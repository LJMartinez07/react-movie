import React, { FC, useState, useEffect } from 'react';
import styles from './input-search.module.scss';
import MovieService from '../../../../http/service/MovieService';
import { KeyWordsComponent } from '../keyWords/key-word';
import { get } from 'http';

interface result {
    id: number;
    name: string;
}

interface res {
    results: result[];
}

export const InputSearchComponent: FC = () => {
    const service = new MovieService();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    // useEffect(() => {

    //     // setSuggestions(service.getKeywords(query));
    // }, [query]);
    function handleClick(event: any) {
        setQuery(event.target.value);
        if (event.target.value)
            service.getKeywords(event.target.value).then((res) => {
                // console.log(res);
                setSuggestions(res.results);
            });
    }
    return (
        <div className={styles.input_search}>
            <input
                className="bp3-input"
                value={query}
                onChange={handleClick}
                placeholder="Search your favorite Movie/Tv Show"
                type="search"
            />
            <KeyWordsComponent suggestions={suggestions} />
        </div>
    );
};
