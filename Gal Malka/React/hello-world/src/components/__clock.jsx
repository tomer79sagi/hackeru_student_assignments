import React, { Component } from 'react';


class Clock extends Component {
    constructor(props) {
        super(props);
        var today = new Date(),
        date = today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear()
        this.state = {
            currentDate: date
        }
    }

    
    render() { 
        return (
            <div className="center" style={{paddingTop: "50px"}}>
               { this.state.currentDate }
            </div>
        );
    }
}

export default Clock;
