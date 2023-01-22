import React , { Component} from 'react'
import PageMain from './PageMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';


class Home extends Component {

    render() { 
        return (
            <div style={styleSheet.main}>
                <PageHeader />
                <PageMain />
                <PageFooter />
            </div>
        );
    }
}
 
export default Home;

const styleSheet = {
    main: {
        margin: "auto",
        marginTop: "2%",
        maxWidth: "1600px",
        maxHeight: "1080px",
        border: "6px solid gray",
        borderRadius: "25px",
        flex: "1",
        padding: "10px",
    },
}