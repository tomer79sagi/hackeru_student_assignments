import React, { Component } from 'react'

export class PageHeader extends Component {
  render() {
    return (
        <div style={styleSheet.header}>
            <input style={styleSheet.search} placeholder="Search"></input>
        </div>
    )
  }
}

export default PageHeader

const styleSheet = {
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    search: {
        width: "60%",
        border: "1px solid gray",
        borderRadius: "25px",
        padding: "5px"
    } , 
}