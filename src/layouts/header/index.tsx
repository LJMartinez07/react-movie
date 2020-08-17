import React, { FC } from 'react';

import './index.scss';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { useMediaQuery } from 'react-responsive'
const Header: FC = () => {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <Navbar className="bp3-violet1">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading >React Movies</Navbar.Heading>
                {!isTabletOrMobile && 
                 <input className="bp3-input" placeholder="Search your favorite Movie/Tv Show" type="search" />
                }
               <Navbar.Divider className="customize-bar-divider" />
                <Button className="bp3-button bp3-minimal bp3-icon-film">Movies</Button>
                <Button className="bp3-button bp3-minimal bp3-icon-video">TV Shows</Button>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;
