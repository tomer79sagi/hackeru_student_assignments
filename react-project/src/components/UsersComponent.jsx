import React, { Component } from 'react';
import './UsersComponent.css';

class UsersComponent extends Component {

    onDeleteHandle(userId) {
        this.props.DeleteUser(userId);
    }

    onEditHandle(userId) {
        this.props.EditUser(userId);
    }

    render() {
        return (
            <section className=''>
                <div>
                    <div className="col border-bottom border-dark border-4">#</div>
                    <div className="col border-bottom border-dark border-4">Avatar</div>
                    <div className="col border-bottom border-dark border-4">First Name</div>
                    <div className="col border-bottom border-dark border-4">Last Name</div>
                    <div className="col border-bottom border-dark border-4">Phone Number</div>
                    <div className="col border-bottom border-dark border-4">eMail</div>
                    <div className="col border-bottom border-dark border-4">Birthday</div>
                    <div className="col border-bottom border-dark border-4">Status</div>
                    <div className="col border-bottom border-dark border-4">Action</div>
                </div>
                {this.props.Users.map((user, index) => (
                    <React.Fragment key={user.id} >
                        <div>
                            <div className="col border-bottom border-dark">{user.id = (index += 1)}</div>
                            <div className="col border-bottom border-dark"><img src={user.avatar} height='50px' alt='Avatar' /></div>
                            <div className="col border-bottom border-dark">{user.fname}</div>
                            <div className="col border-bottom border-dark">{user.lname}</div>
                            <div className="col border-bottom border-dark">{user.phone}</div>
                            <div className="col border-bottom border-dark">{user.email}</div>
                            <div className="col border-bottom border-dark">{user.bdate}</div>
                            <div className="col border-bottom border-dark">{user.status}</div>
                            <div className="col border-bottom border-dark">
                                <button className='btn btn-outline-secondary' onClick={this.onEditHandle.bind(this, user.id)}>Edit</button>
                                <button className='btn btn-outline-danger' onClick={this.onDeleteHandle.bind(this, user.id)}>Delete</button>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </section>
        );
    }
}

export default UsersComponent;
