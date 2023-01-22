import React , { Component} from 'react'

class Left extends Component {
    state = {  } 
    arr = ['Home' , 'Search' , 'ETC ' , 'Check' , 'Test']
    render() { 
        return (
            <div style={styleSheet.main}>
                <div>
                    Home
                </div>
                <div>
                    Search
                </div>
                <div>
                    ETC
                </div>
                <div>
                    Check
                </div>
                <div>
                    Test
                </div>
            </div>
        );
    }
}
 
export default Left ;

const styleSheet = {
    main: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-evenly"
    }
}