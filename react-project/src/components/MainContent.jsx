import React, { Component } from 'react';
import './MainContent.css';
// import Select from 'react-select';
import { format, parseISO } from 'date-fns';


class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isForm: false,
            isAdd: false,
            isEdit: false,
            users: [
                { 'id': "", 'fname': 'Karn', 'lname': 'Yong', 'email': 'karn.yong@melivecode.com', 'bdate': '24/07/1998', 'avatar': 'https://www.melivecode.com/users/1.png', 'phone': '0541112233', 'status': 'Interested' },
                { 'id': "", 'fname': 'Ivy', 'lname': 'Cal', 'email': 'ivy.cal@melivecode.com', 'bdate': '24/07/1998', 'avatar': 'https://www.melivecode.com/users/2.png', 'phone': '0504445566', 'status': 'Interested' },
                { 'id': "", 'fname': 'Walter', 'lname': 'Beau', 'email': 'walter.beau@melivecode.com', 'bdate': '24/07/1998', 'avatar': 'https://www.melivecode.com/users/3.png', 'phone': '0587778899', 'status': 'Interested' },
            ],
            options: [
                { value: 'Lead', label: 'Lead' },
                { value: 'Interested', label: 'Interested' },
                { value: 'Trial', label: 'Trial' },
                { value: 'Customer', label: 'Customer' }
            ],
            editUser: {
                id: "",
                fname: "",
                lname: "",
                email: "",
                bdate: "",
                avatar: "",
                phone: "",
                status: "",
                date: ""
            }
        }
    };

    onSubmitHandle(event) {
        event.preventDefault();
        this.setState({
            isAdd: false,
            users: [
                ...this.state.users,
                {
                    avatar: event.target.frm_user_avatar.value,
                    fname: event.target.frm_user_fname.value,
                    lname: event.target.frm_user_lname.value,
                    phone: event.target.frm_user_phone.value,
                    email: event.target.frm_user_email.value,
                    bdate: format(parseISO(event.target.frm_user_bdate.value), 'dd/MM/yyyy'),
                    status: event.target.frm_user_status.value
                }
            ]
        })
        event.target.frm_user_avatar.value = "";
        event.target.frm_user_fname.value = "";
        event.target.frm_user_lname.value = "";
        event.target.frm_user_phone.value = "";
        event.target.frm_user_email.value = "";
        event.target.frm_user_bdate.value = "";
        event.target.frm_user_status.value = "Lead";
        this.setState({ isForm: false })
    }

    onDeleteHandle() {
        let text = "Are you sure that you want to delete this user? ";
        if (window.confirm(text) === true) {
            this.setState({
                users: this.state.users.filter(user => user.id !== arguments[0])
            });
        }
    }
    onEditHandle() {
        const user = this.state.users.find(user => user.id === arguments[0]);
        this.setState({
            isForm: true,
            isEdit: true,
            isAdd: false,
            editUser: {
                id: user.id,
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                bdate: user.bdate,
                avatar: user.avatar,
                phone: user.phone,
                status: user.status,
            }
        });
    }
    onAddHandle() {
        this.setState({ isForm: true, isAdd: true });
    }
    onCancelHandle() {
        this.setState({ isForm: false, isAdd: false, isEdit: false });
    }
    onUpdateHandle(event) {
        event.preventDefault();
        this.setState({
            isEdit: false,
            isForm: false,
            users: this.state.users.map(user => {
                if (user.id === this.state.editUser.id) {
                    user.fname = event.target.frm_user_fname.value;
                    user.lname = event.target.frm_user_lname.value;
                    user.email = event.target.frm_user_email.value;
                    user.bdate = format(parseISO(event.target.frm_user_bdate.value), 'dd/MM/yyyy');
                    user.avatar = event.target.frm_user_avatar.value;
                    user.phone = event.target.frm_user_phone.value;
                    user.status = event.target.frm_user_status.value;
                }
                return user;
            })
        });
    }

    transformDate(dateString) {
        const dateArray = dateString.split("/");
        return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    }


    render() {
        return (
            <>
                {this.state.isAdd &&
                    <form id="frm_add" onSubmit={this.onSubmitHandle.bind(this)} >
                        <input type='text' name='frm_user_avatar' placeholder='Photo URL' required />
                        <input type='text' name='frm_user_fname' placeholder='First Name' required />
                        <input type='text' name='frm_user_lname' placeholder='Last Name' required />
                        <input type='tel' name='frm_user_phone' placeholder='Phone Number' required />
                        <input type='email' name='frm_user_email' placeholder='eMail' required />
                        <input type='date' name='frm_user_bdate' placeholder='Birthday' required />
                        {/* <Select name='frm_user_status' options={this.state.options} defaultValue={this.state.options[0]} required/> */}
                        <select name='frm_user_status' defaultValue={'Lead'} required>
                            <option value='Lead'>
                                Lead
                            </option>
                            <option value='Interested'>
                                Interested
                            </option>
                            <option value='Trial'>
                                Trial
                            </option>
                            <option value='Customer'>
                                Customer
                            </option>
                        </select>
                        <button type='submit' className='btn btn-success'>Save</button>
                        <button type='button' className='btn btn-danger' onClick={this.onCancelHandle.bind(this)}>Cancel</button>
                    </form>
                }
                {this.state.isEdit &&
                    <form id="frm_add" onSubmit={this.onUpdateHandle.bind(this)} >
                        <input type='text' name='frm_user_avatar' placeholder='Photo URL' defaultValue={this.state.editUser.avatar} required />
                        <input type='text' name='frm_user_fname' placeholder='First Name' defaultValue={this.state.editUser.fname} required />
                        <input type='text' name='frm_user_lname' placeholder='Last Name' defaultValue={this.state.editUser.lname} required />
                        <input type='tel' name='frm_user_phone' placeholder='Phone Number' defaultValue={this.state.editUser.phone} required />
                        <input type='email' name='frm_user_email' placeholder='eMail' defaultValue={this.state.editUser.email} required />
                        <input type='date' name='frm_user_bdate' placeholder='Birthday' defaultValue={this.transformDate(this.state.editUser.bdate)} required />
                        <select name='frm_user_status' defaultValue={this.state.editUser.status} required>
                            <option value='Lead'>
                                Lead
                            </option>
                            <option value='Interested'>
                                Interested
                            </option>
                            <option value='Trial'>
                                Trial
                            </option>
                            <option value='Customer'>
                                Customer
                            </option>
                        </select>
                        <button type='submit' className='btn btn-success'>Update</button>
                        <button type='button' className='btn btn-danger' onClick={this.onCancelHandle.bind(this)}>Cancel</button>
                    </form>
                }
                {!this.state.isForm &&
                    <button className='btn btn-primary' onClick={this.onAddHandle.bind(this)}>Add Customer</button>
                }
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
                    {this.state.users.map((user, index) => (
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
    };
}
export default MainContent;