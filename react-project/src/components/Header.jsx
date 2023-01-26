import './Header.css';
import React, { Component } from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.onUpdateHandle = this.onUpdateHandle.bind(this);
        this.onCancelHandel = this.onCancelHandle.bind(this);
        this.onAddHandle = this.onAddHandle.bind(this);
    }

    onSubmitHandle(event) {
        event.preventDefault();
        this.props.SubmitForm(
            event.target.frm_user_avatar.value,
            event.target.frm_user_fname.value,
            event.target.frm_user_lname.value,
            event.target.frm_user_phone.value,
            event.target.frm_user_email.value,
            event.target.frm_user_bdate.value,
            event.target.frm_user_status.value
        );
    }

    onAddHandle() {
        this.props.AddUser();
    }
    onCancelHandle = () => {
        this.props.CancelAction();
    }

    onUpdateHandle(event) {
        event.preventDefault();
        this.props.UpdateUser(
            event.target.frm_user_avatar.value,
            event.target.frm_user_fname.value,
            event.target.frm_user_lname.value,
            event.target.frm_user_phone.value,
            event.target.frm_user_email.value,
            event.target.frm_user_bdate.value,
            event.target.frm_user_status.value
        );
    }

    render() {
        return (
            <header className='border-bottom'>
                <span className='fs-4'>Me Call API - CRUD</span><br/>
                {this.props.isAdd &&
                    <form id="frm_add" onSubmit={this.onSubmitHandle} className="mx-auto">
                        <input type='text' name='frm_user_avatar' placeholder='Photo URL' required />
                        <input type='text' name='frm_user_fname' placeholder='First Name' required />
                        <input type='text' name='frm_user_lname' placeholder='Last Name' required />
                        <input type='tel' name='frm_user_phone' placeholder='Phone Number' required />
                        <input type='email' name='frm_user_email' placeholder='eMail' required />
                        <input type='date' name='frm_user_bdate' placeholder='Birthday' required />
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
                        <button type='button' className='btn btn-danger' onClick={this.onCancelHandle}>Cancel</button>
                    </form>
                }
                {this.props.isEdit &&
                    <form id="frm_add" onSubmit={this.onUpdateHandle} className="mx-auto">
                        <input type='text' name='frm_user_avatar' placeholder='Photo URL' defaultValue={this.props.EditUser.avatar} required />
                        <input type='text' name='frm_user_fname' placeholder='First Name' defaultValue={this.props.EditUser.fname} required />
                        <input type='text' name='frm_user_lname' placeholder='Last Name' defaultValue={this.props.EditUser.lname} required />
                        <input type='tel' name='frm_user_phone' placeholder='Phone Number' defaultValue={this.props.EditUser.phone} required />
                        <input type='email' name='frm_user_email' placeholder='eMail' defaultValue={this.props.EditUser.email} required />
                        <input type='date' name='frm_user_bdate' placeholder='Birthday' defaultValue={this.props.TransformDate} required />
                        <select name='frm_user_status' defaultValue={this.props.EditUser.status} required>
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
                        <button type='button' className='btn btn-danger' onClick={this.onCancelHandle}>Cancel</button>
                    </form>
                }
                {!this.props.isForm &&
                    <button className='btn btn-primary' onClick={this.onAddHandle}>Add Customer</button>
                }
            </header>
        );
    }
}

export default Header;
