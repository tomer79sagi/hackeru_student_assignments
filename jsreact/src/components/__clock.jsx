import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props); // Invoke parent's constructor BEFORE executing my stuff

        // Initialize the 'state' object with 'counter = 0';
        // Alternatively, call the SERVER and place the value in the 'counter' variable
        // ONLY in the constructor, we can directly SET the 'state' object.
        // Outside of the constructor, I MUST use 'this.setState()'
        this.state = { 
            counter: 0
        } 

        // Outside of the constructor because it's run 1 second later
        setInterval(() => {
            this.setState({counter: this.state.counter+1});
        }, 1000);
    }
    
    render() { 
        return (
            <div className="center" style={{paddingTop: "50px"}}>
                {this.state.counter}
            </div>
        );
    }
}

export default Clock;
