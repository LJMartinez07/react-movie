import React, { FC } from 'react';

import './index.scss';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

const Header: FC = () => {
    return (
        <Navbar className="bp3-violet1">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading >React Movies</Navbar.Heading>
                <Navbar.Divider className="customize-bar-divider" />
                <Button className="bp3-button bp3-minimal bp3-icon-home ">Home</Button>
                <Button className="bp3-button bp3-minimal bp3-icon-document ">Files</Button>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;
