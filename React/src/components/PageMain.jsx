import React, { Component } from 'react';
import "./PageMain.css";


import MainContent from "./MainContent";
// import HomeWork from './HomeWork';


class PageMain extends Component {
    state = {  } 
        render() { 
            return ( 
                <main className="holy-grail__main">
       
            
            {/*  Main content */}
            <MainContent/>
                    
            
    
        </main> 
        );
    }
}
 

export default PageMain;
