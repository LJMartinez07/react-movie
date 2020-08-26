import React, { FC, useState, useEffect } from 'react';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './index.scss';

import MovieService from '../../http/service/MovieService'
const service = new MovieService();
const Header: FC = () => {

    const [query, setQuery] = useState('')
    useEffect(() => {
        service.getKeywords(query)
    }, [query])
    function handleClick(event: any) {

        setQuery(event.target.value)
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (
        <Navbar className="bp3-violet1">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Link to="/">React Movies</Link>
                </Navbar.Heading>
                {!isTabletOrMobile && (
                    <input className="bp3-input"
                        value={query}
                        onChange={handleClick}
                        placeholder="Search your favorite Movie/Tv Show"
                        type="search" />
                )}
                <Navbar.Divider className="customize-bar-divider" />
                <Link to="/movies">
                    <Button className="bp3-minimal" icon="film">Movies</Button>
                </Link>
                <Link to="/">
                    <Button className="bp3-minimal" icon="video">TV Shows</Button>
                </Link>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;
