import React, { Component } from 'react';
import './PageMain.css';
import MainContent from './MainContent';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import "bootstrap/dist/css/bootstrap.min.css";


class PageMain extends Component {
    state = {  } 
    render() { 
        return (
            <div className = "holy-grail__main">
                <LeftBar/>
                <MainContent/>
                <RightBar/>
            </div>
        );
    }
}
 
export default PageMain;
