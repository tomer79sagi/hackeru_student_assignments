import React , { Component} from 'react'

class Middle extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [
                {
                    isbn: "123456789",
                    name: "Daddy went to work",
                    description: "A book about a person's journy to work."
                },
                {
                    isbn: "012345678",
                    name: "Who let the dogs out",
                    description: "A story about 3 dogs that fled the cannel."
                },
                {
                    isbn: "987654321",
                    name: "The lost pirate",
                    description: "A story about a lost pirate."
                }
            ]
        }
    }
    render() { 
        return (
        <div style={styleSheet.main}>
            {this.state.books.map((book , index) => {
                return(
                    <div style={styleSheet.book}>
                        <div style={styleSheet.title}>
                            Title {index}
                        </div>
                        <p>{book.name}</p>
                        <div style={styleSheet.title}>
                            Description
                        </div>
                        <p>{book.description}</p>
                        <div style={styleSheet.title}>
                            ISBN
                        </div>
                        <p>{book.isbn}</p>
                    </div>
                )
            })}
        </div>
        );
    }
}
 
export default Middle;

const styleSheet = {
    main: {
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
    },

    book: {
        margin: "2px 0px 2px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: "1px solid black"
    },

    title: {
        fontWeight: "600"
    }
}