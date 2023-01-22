import React, { Component } from 'react'
import Left from './PageLeft';
import Middle from './PageMiddle';
import Right from './PageRight';

class PageMain extends Component {
  render() {
    return (
        <div style={styleSheet.body}>
            <div style={styleSheet.bodyLeft}>
                <Left />
            </div>
            <div style={styleSheet.bodyMid}>
                <Middle />
            </div>
            <div style={styleSheet.bodyRight}>
                <Right />
            </div>
        </div>
        
    )
  }
}

export default PageMain

const styleSheet = {
    body: {
        marginTop: "25px",
        marginBottom: "25px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        border: "1px solid gray",
        
    },
    
    bodyLeft: {
        width: "10%",
        height: "600px",
        border: "1px solid gray",
        textAlign: "center",
    },

    bodyMid: {
        width: "60%",
        height: "600px",
        border: "1px solid gray",
        textAlign: "center",
    }, 

    bodyRight: {
        width: "30%",
        height: "600px",
        border: "1px solid gray",
        textAlign: "center",
    },
}