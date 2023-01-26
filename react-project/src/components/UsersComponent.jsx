import React, { Component } from 'react';
import './Content.css';

class UsersComponent extends Component {

    onDeleteHandle(userId) {
        this.props.DeleteUser(userId);
    }

    onEditHandle(userId) {
        this.props.EditUser(userId);
    }

    render() {
        return (
            <>

                <table>
                    <tbody>
                        <tr className='border-bottom border-4'>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>eMail</th>
                            <th>Birthday</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {this.props.Users.map((user, index) => (
                        <React.Fragment key={user.id}   >
                            <tbody>
                                <tr className='border-bottom'>
                                    <td>{user.id = (index += 1)}</td>
                                    <td><img src={user.avatar} height='50px' alt='Avatar' /></td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.bdate}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button className='btn btn-outline-secondary' onClick={this.onEditHandle.bind(this, user.id)}>Edit</button>
                                        <button className='btn btn-outline-danger' onClick={this.onDeleteHandle.bind(this, user.id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </React.Fragment>
                    ))}
                </table>
            </>
        );
    }
}

export default UsersComponent;
