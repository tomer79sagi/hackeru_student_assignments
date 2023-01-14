import './MainContent.css';
import React, {Component} from 'react';


class MainContent extends Component{

    constructor(props){
        super(props);
        this.state={
            isEdit: false,
            editBook:{
                isnb:"",
                name:"",
                description:""
            },
            books: [
                {
                    isbn: "123456789",
                    name:"Daddy went to work",
                    description: "A book about a person's journey to work"
                },
                {
                    isbn: "987654321",
                    name:"Who let the dogs out?",
                    description: "A story about 3 dogs that fled the cannel"
                }
            ]
        };
    }

    onSubmitHandle(event){
        event.preventDefault();
        this.setState({
            books: [
                ...this.state.books,
                {
                    name: event.target.frm_book_name.value
                }
            ]
        })
        event.target.frm_book_name.value = "";
    }

    onDeleteHandle(){
        this.setState({
            books: this.state.books.filter(book => book.isbn !== arguments[0])
        });
    }

    onEditHandle(){
        const book = this.state.books.find(book => book.isbn === arguments[0]);

        this.setState({
            isEdit: true,
            editBook:{
                isbn: book.isbn,
                name: book.name,
                description: book.description
            }
        });
    }

    onUpdateHandle(event){
        event.preventDefault() ;

        this.setState({
            isEdit: false,
            books: this.state.books.map(book => {
                if(book.isbn === this.state.editBook.isbn){
                    book.name = event.target.frm_book_name.value;
                    return book;
                }

                return book;
            })
        })
    }
    render(){
        return (
            <article className="holy-grail__middle">

                {this.state.isEdit &&
                    <div className="book_edit">
                        <form onSubmit={this.onUpdateHandle.bind(this)}>
                            <input type="text" name="frm_book_name" defaultValue={this.state.editBook.name}></input>
                            <button>Update</button>
                        </form>
                    </div>
                }
                
                {!this.state.isEdit &&
                    <div className="book_add">
                        <form onSubmit={this.onSubmitHandle.bind(this)}>
                            <input type="text" name="frm_book_name"></input>
                            <button>Add</button>
                        </form>
                    </div>
                }

                <div className="book_list">
                { this.state.books.map(book => (
                    <div className="book_item">
                        <div>
                            <span className="book_name">{book.name}</span>
                            <span className="book_isbn">&nbsp;({book.isbn})</span>
                            <span className="book_description">{book.description}</span>
                        </div>
                        <div className="book_actions">
                            <button onClick={this.onDeleteHandle.bind(this, book.isbn)}>Delete</button>
                            <button onClick={this.onEditHandle.bind(this, book.isbn)}>Edit</button>
                        </div>
                    </div>
                    )
                    ) }
                </div>
            </article>
        );
    }
}

export default MainContent;