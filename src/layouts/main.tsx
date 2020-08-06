import React, { FC } from 'react';
import Header from './header/';
import './main.scss';
const Main: FC = ({ children }) => {
    return (
        <div className="main">
            <div className="header">
                <Header />
            </div>
            <div className="body">{children}</div>
        </div>
    );
};

export default Main;
