import React, { FC, useState, useEffect} from "react";


import MovieService from '../../../http/service/MovieService'
export const InputSearchComponent: FC = () =>{
    
const service = new MovieService();
    const [query, setQuery] = useState('')
    useEffect(() => {
        service.getKeywords(query)
    }, [query, service])
    function handleClick(event: any) {
        setQuery(event.target.value)
    }

    return (
        <input className="bp3-input"
        value={query}
        onChange={handleClick}
        placeholder="Search your favorite Movie/Tv Show"
        type="search" />
    )
}