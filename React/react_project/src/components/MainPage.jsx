import React, { Component } from 'react';

import "./MainPage.css";

import MainContent from './MainContent';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <main className="holy-grail__main">
                {/* <!-- Main content --> */}
                <MainContent/>
            </main>
        );
    }
}

export default MainPage;