import React, { FC } from 'react';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './index.scss';
import { InputSearchComponent } from './components/inputSearch/input-search';

const Header: FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (
        <Navbar className="bp3-violet1">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Link to="/">React Movies</Link>
                </Navbar.Heading>
                {!isTabletOrMobile && <InputSearchComponent />}
                <Navbar.Divider className="customize-bar-divider" />
                <Link to="/movies">
                    <Button className="bp3-minimal" icon="film">
                        Movies
                    </Button>
                </Link>
                <Link to="/tv">
                    <Button className="bp3-minimal" icon="video">
                        TV Shows
                    </Button>
                </Link>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;
