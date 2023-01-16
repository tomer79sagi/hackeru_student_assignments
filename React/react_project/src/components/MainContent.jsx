import React, { Component } from "react";

import "./MainContent.css";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            editUser: {
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                birth_date: "",
                status: "",
                profile_pic: "",
            },
            users: [
                {
                    ID: 1,
                    first_name: "Karn",
                    last_name: "Yong",
                    email: "karn.yong@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/1.png",
                },
                {
                    ID: 2,
                    first_name: "Ivy",
                    last_name: "Cal",
                    email: "ivy.cal@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/2.png",
                },
            ],
        };
    }

    onSubmitHandle(event) {
        event.preventDefault();

        // Add the new user to the users array with the new ID
        this.setState({
            users: [
                ...this.state.users,
                {
                    first_name: event.target.first_name.value,
                    last_name: event.target.last_name.value,
                    phone_number: event.target.phone_number.value,
                    email: event.target.email.value,
                    birth_date: event.target.birth_date.value,
                    status: event.target.status.value,
                    profile_pic: event.target.profile_pic.value,
                },
            ],
        });

        // Clear the form fields
        event.target.first_name.value = "";
        event.target.last_name.value = "";
        event.target.phone_number.value = "";
        event.target.email.value = "";
        event.target.birth_date.value = "";
        event.target.status.value = "";
        event.target.profile_pic.value = "";
    }

    onDeleteHandle() {
        // 'arguments' is a pre-defined array that contains ALL properties sent to this function (aka event handler)
        // arguments[0] = book.ID

        // 1. Find the book with the provided ISBN and remove it from the 'this.state.books'
        this.setState({
            users: this.state.users.filter((user) => user.ID !== arguments[0]),
        });
    }

    onEditHandle() {
        // 1. Find book by book ID (I received it in 'arguments[0]')
        const user = this.state.users.find((user) => user.ID === arguments[0]);

        // 2. Update the 'editBook' property in 'this.state' to contain the extracted details for editing
        this.setState({
            isEdit: true,
            editUser: {
                ID: user.ID,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                email: user.email,
                birth_date: user.birth_date,
                status: user.status,
                profile_pic: user.profile_pic,
            },
        });
    }

    onUpdateHandle(event) {
        event.preventDefault();

        this.setState({
            isEdit: false,
            users: this.state.users.map((user) => {
                // If the ID of the book in the current iteration EQUALS the 'ID' in the 'this.state.editBook'
                if (user.ID === this.state.editUser.ID) {
                    user.name = event.target.frm_user_name.value;
                    return user;
                }

                // Return the original book from the array (in the current iteration)
                return user;
            }),
        });
    }

    render() {
        return (
            <article className="holy-grail__middle">
                {/* EDIT NEW BOOK */}
                {this.state.isEdit === true && (
                    <div className="user_edit">
                        <form onSubmit={this.onUpdateHandle.bind(this)}>
                            {/* <input type="text" name="frm_user_name" defaultValue={this.state.editUser.name}></input> */}

                            <input
                                type="number"
                                name="ID"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="text"
                                name="first_name"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="text"
                                name="last_name"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="number"
                                name="phone_number"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="email"
                                name="email"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="date"
                                name="birth_date"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="text"
                                name="status"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <input
                                type="url"
                                name="profile_pic"
                                defaultValue={this.state.editUser.name}
                            ></input>
                            <button>Update</button>
                        </form>
                    </div>
                )}

                {/* ADD NEW BOOK */}
                {!this.state.isEdit && (
                    // { this.state.isEdit === false &&
                    // { this.state.isEdit !== true &&
                    <div className="user_add">
                        <form onSubmit={this.onSubmitHandle.bind(this)}>
                            {/* <input type="number" name="ID" placeholder="ID"></input> */}

                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                            >
                            </input>

                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                            >
                            </input>

                            <input
                                type="number"
                                name="phone_number"
                                placeholder="Phone Number"
                            >
                            </input>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            >
                            </input>

                            <input
                                type="date"
                                name="birth_date"
                                placeholder="Birth Date"
                            >
                            </input>

                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                            >
                            </input>

                            <input
                                type="url"
                                name="profile_pic"
                                placeholder="Profile Pic URL"
                            >
                            </input>

                            <button>Add User</button>
                        </form>
                    </div>
                )}
                <table className="user_list">

                    <tr className="border border-5 border-primary">
                        <th>#</th>
                        <th>Avatar</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>phone number</th>
                        <th>email</th>
                        <th>birth date</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>

                    {
                        this.state.users.map((user, index) => (

                            <tr className="user_item border border-3 border-info">
                                <td className="ID">&nbsp;({user.ID = index += 1})</td>
                                <td className="profile_pic">
                                    <img
                                        src={user.profile_pic}
                                        alt="avatar"
                                        height="50px"
                                    />
                                </td>
                                <td className="first_name">{user.first_name}</td>
                                <td className="last_name">{user.last_name}</td>
                                <td className="phone_number">{user.phone_number}</td>
                                <td className="email">{user.email}</td>
                                <td className="birth_date">{user.birth_date}</td>
                                <td className="status">{user.status}</td>
                                <td className="user_actions">
                                    <button class="btn btn-outline-danger"
                                        onClick={this.onDeleteHandle.bind(this, user.ID)}>Delete
                                    </button>
                                    <button class="btn btn-outline-success" onClick={this.onEditHandle.bind(this, user.ID)}>Edit
                                    </button>
                                </td>
                            </tr>

                        )) /* this code creates a new ARRAY and hands it to REACT to display */
                    }

                </table>
            </article>
        );
    }
}

export default MainContent;