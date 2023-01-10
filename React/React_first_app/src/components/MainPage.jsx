import React, { Component } from 'react';

import "./MainPage.css";

import Middle from './Middle';
import Right from './Right';
import Left from './Left';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <main class="holy-grail__main">
                {/* <!-- Left sidebar --> */}
                <Left/>

                {/* <!-- Main content --> */}
                <Middle/>
    
                {/* <!-- Right sidebar --> */}
                <Right/>
            </main>
        );
    }
}

export default MainPage;