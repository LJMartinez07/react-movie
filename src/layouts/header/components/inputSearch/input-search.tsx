import React, { FC, useState } from 'react';
import styles from './input-search.module.scss';
import MovieService from '../../../../http/service/TMDbService';
import { KeyWordsComponent } from '../keyWords/key-word';

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
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    function handleClick(event: any) {
        setQuery(event.target.value);
        if (event.target.value)
            service.getKeywords(event.target.value).then((res) => {
                setSuggestions(res.results);
            });
    }

    function openSuggestion() {
        setOpen(true);
    }

    function hideSuggestion() {
        setOpen(false);
    }
    return (
        <div className={styles.input_search}>
            <input
                onBlur={hideSuggestion}
                onFocus={openSuggestion}
                className="bp3-input"
                value={query}
                onChange={handleClick}
                placeholder="Search your favorite Movie/Tv Show"
                type="search"
            />
            {open === true && <KeyWordsComponent suggestions={suggestions} />}
        </div>
    );
};
