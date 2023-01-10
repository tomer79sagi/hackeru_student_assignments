import React, { Component } from 'react';

import "./Middle.css";

class Middle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    isbn: "123456789",
                    name: "Daddy went to work",
                    description: "A book abuot a prson's"
                },
                {
                    isbn: "987654321",
                    name: "who let the dogs out",
                    description: "song"
                }
            ]
        };
    }

    render() {
        return (
            <article class="holy-grail__middle">
                {this.state.books.map(book => {
                        return (<div>{book.isbn}</div>)
                    }
                )}
            </article>
        );
    }
}

export default Middle;
