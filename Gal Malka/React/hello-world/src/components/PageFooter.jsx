import React, { Component } from 'react'

export class PageFooter extends Component {
  render() {
    return (
        <div style={styleSheet.footer}>
            Footer
        </div>
    )
  }
}

export default PageFooter

const styleSheet = {
    footer: {
        margin: "auto",
        display: "flex",
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        border: "1px solid gray",
        borderRadius: "25px",
    }
}