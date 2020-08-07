import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
export default () => {
    return (
        <div
            style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100vh',
            }}
        >
            <div>
                <div>
                    <h1>React Movies</h1>
                </div>
            </div>
            <div>
                <a href={'https://github.com/LuisMartinez28/react-movie'}>
                    <i style={{ color: '#5e6367' }} className={'fab fa-github fa-4x'} />
                </a>
                <br />
                <small>Source Code</small>
            </div>
        </div>
    );
};
