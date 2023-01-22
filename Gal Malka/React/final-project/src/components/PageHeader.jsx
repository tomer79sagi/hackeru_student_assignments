import React, { Component } from 'react';
import './PageHeader.css'

class PageHeader extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    } 
    
    render() { 
        return (
            <header className='header'>
                <h1>Customer Relations Management</h1>
            </header>
        );
    }
}
 
export default PageHeader;
