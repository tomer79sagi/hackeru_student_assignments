import React, { Component } from "react";

import "./MainContent.css";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isAdd: false,
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
                    birth_date: "02/11/1967",
                    status: "Lead",
                },
                {
                    ID: 2,
                    first_name: "Ivy",
                    last_name: "Cal",
                    email: "ivy.cal@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/2.png",
                    birth_date: "04/06/1969",
                    status: "Lead",
                },
                {
                    ID: 3,
                    first_name: "Walter",
                    last_name: "Beau",
                    email: "walter.beau@melivecode.com",
                    profile_pic: "https://www.melivecode.com/users/3.png",
                    birth_date: "02/11/1967",
                    status: "Lead",
                }
            ],
        };
    }

    onSubmitHandle(event) {
        event.preventDefault();

        // Find the highest ID used so far
        let maxID = 0;
        this.state.users.forEach(user => {
            if (user.ID > maxID) {
                maxID = user.ID;
            }
        });

        // Increment the highest ID by 1 to get the new user's ID
        maxID++;

        // Add the new user to the users array with the new ID
        this.setState({
            isAdd: false,
            users: [
                ...this.state.users,
                {
                    ID: maxID,
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

        let confirmAction = window.confirm("Are you sure to execute this action?");
        if (confirmAction) {
            this.setState({
                users: this.state.users.filter((user) => user.ID !== arguments[0]),
            });
            alert("Action successfully executed");
        } else {
            alert("Action canceled");
        }
    }



    onEditHandle() {
        // 1. Find book by book ID (I received it in 'arguments[0]')
        const user = this.state.users.find((user) => user.ID === arguments[0]);

        // 2. Update the 'editBook' property in 'this.state' to contain the extracted details for editing
        this.setState({
            isAdd: false,
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
                    user.first_name = event.target.first_name.value;
                    user.last_name = event.target.last_name.value;
                    user.phone_number = event.target.phone_number.value;
                    user.email = event.target.email.value;
                    user.birth_date = event.target.birth_date.value;
                    user.status = event.target.status.value;
                    user.profile_pic = event.target.profile_pic.value;
                    return user;
                }

                // Return the original book from the array (in the current iteration)
                return user;
            }),
        });
    }

    addCustomerHandle() {
        this.setState({
            isAdd: true,
            isEdit: false
        })
    }

    cancelCustomerHandle() {
        this.setState(
            {
                isAdd: false
            }
        )
    }

    CancelCustomerUpdate() {
        this.setState({
            isEdit: false,
        });
    }


    render() {
        return (
            <article className="holy-grail__middle">
                <div className="fs-2 shadow p-3 mb-5 crudDiv">CRUD</div>
                <div class="col-md-12 text-center p-3 up">
                    <button className="btn btn-primary " onClick={this.addCustomerHandle.bind(this)}>Add Customer</button>
                </div>
                {/* EDIT NEW BOOK */}
                {this.state.isEdit === true && (
                    <div className="user_edit user_add input-group-text ">
                        <form onSubmit={this.onUpdateHandle.bind(this)}>
                            {/* <input type="text" name="frm_user_name" defaultValue={this.state.editUser.name}></input> */}

                            <input
                                type="text"
                                name="first_name"
                                defaultValue={this.state.editUser.first_name}
                            ></input>
                            <input
                                type="text"
                                name="last_name"
                                defaultValue={this.state.editUser.last_name}
                            ></input>
                            <input
                                type="number"
                                name="phone_number"
                                defaultValue={this.state.editUser.phone_number}
                            ></input>
                            <input
                                type="email"
                                name="email"
                                defaultValue={this.state.editUser.email}
                            ></input>
                            <input
                                type="date"
                                name="birth_date"
                                defaultValue={this.state.editUser.birth_date}
                            ></input>

                            <select
                                name="status"
                                id="status"
                                defaultValue={this.state.editUser.status}
                            >
                                <option value="Lead">Lead</option>
                                <option value="Interested">Interested</option>
                                <option value="Trial">Trial</option>
                                <option value="Custiomer">Custiomer</option>
                            </select>

                            <input
                                type="url"
                                name="profile_pic"
                                defaultValue={this.state.editUser.profile_pic}
                            ></input>
                            <button className="btn btn-primary m-2">Update</button>
                            <button
                                onClick={this.CancelCustomerUpdate.bind(this)}
                                className="cancle_btn btn btn-primary "
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                )}

                {/* ADD NEW BOOK */}
                {this.state.isAdd && (
                    // { this.state.isEdit === false &&
                    // { this.state.isEdit !== true &&
                    <div className="user_add d-flex mb-3">
                        <form onSubmit={this.onSubmitHandle.bind(this)}>
                            <div className="d-flex">
                                <div className="p-2">
                                    <input type="text" name="first_name" placeholder="First Name"></input>
                                </div>

                                <div className="p-2">
                                    <input type="text" name="last_name" placeholder="Last Name"></input>
                                </div>

                                <div className="p-2">
                                    <input type="number" name="phone_number" placeholder="Phone Number"></input>
                                </div>

                                <div className="p-2">
                                    <input type="email" name="email" placeholder="Email"></input>
                                </div>

                                <div className="p-2">
                                    <input type="date" name="birth_date" placeholder="Birth Date"></input>
                                </div>

                                <div className="p-2">
                                    <select name="status" id="status">
                                        <option value="Lead">Lead</option>
                                        <option value="Interested">Interested</option>
                                        <option value="Trial">Trial</option>
                                        <option value="Customer">Customer</option>
                                    </select>
                                </div>

                                <div className="p-2">
                                    <input type="url" name="profile_pic" placeholder="Profile Pic URL"></input>
                                </div>
                                <div className="ms-auto p-2 ">
                                    <button className="btn btn-outline-primary">Save</button>
                                </div>
                                <div className="ms-auto p-2 ">
                                    <button onClick={this.cancelCustomerHandle.bind(this)} className="cancle_btn btn btn-primary ">Cancel</button>
                                </div>
                            </div>

                        </form>
                    </div>
                )}
                <table className="user_list table-secondary">

                    <tr className="border border-2">
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


                            <tr className="user_item border border-1 border-dark-subtle">
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
                                    <button className="btn btn-outline-danger"
                                        onClick={this.onDeleteHandle.bind(this, user.ID)}>Delete
                                    </button>
                                    <button className="btn btn-outline-success" onClick={this.onEditHandle.bind(this, user.ID)}>Edit
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