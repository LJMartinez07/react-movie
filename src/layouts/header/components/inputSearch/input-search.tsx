import React, { FC, useState, useEffect } from 'react';
import styles from './input-search.module.scss';
import MovieService from '../../../../http/service/MovieService';
import { KeyWordsComponent } from '../keyWords/key-word';
export const InputSearchComponent: FC = () => {
    const service = new MovieService();
    const [query, setQuery] = useState('');
    useEffect(() => {
        service.getKeywords(query);
    }, [query, service]);
    function handleClick(event: any) {
        setQuery(event.target.value);
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
            <KeyWordsComponent />
        </div>
    );
};
