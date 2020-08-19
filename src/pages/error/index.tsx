import React from 'react';
import Main from '../../layouts/main';
export default () => {
    return (
        <Main>
            <div
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <h1>Page Not Found 404</h1>
            </div>
        </Main>
    );
};
