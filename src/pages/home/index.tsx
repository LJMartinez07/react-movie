import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
export default () => {
    return (
        <div
            style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <div>
                <div style={{maxWidth:600+'px', margin: '0px auto' }}>
                    <h1>React Movies</h1>
                    <h4 style={{color: '#5c255c'}}>
                        The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.
                    </h4>
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
