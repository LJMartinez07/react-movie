import React, { FC } from 'react';

// import './';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

const Header: FC = () => {
    return (
        <Navbar className="bp3-violet1">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading className="text-white">React Movies</Navbar.Heading>
                <Navbar.Divider className="customize-bar-divider" />
                <Button icon="home" text="Home" />
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;
