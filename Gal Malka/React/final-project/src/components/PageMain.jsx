import React, { Component } from 'react';
import './PageMain.css'
import { Button , TextField } from '@mui/material';
import UserTable from './UserTable';
import helper from '../helpers/helper';

class PageMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                id: 0,
                avatar: 'https://www.melivecode.com/users/3.png',
                firstname: '',
                lastname: '',
                phonenumber: '',
                email: '',
                birthday: '',
                status: 'unknown'
            },
            currentUserID : null,
            currentUser: null,
            popupVisibility: false,
        } 
        
    }

    onVisibilityChangeHandle(){
        this.setState({popupVisibility: !this.state.popupVisibility})
    }

    onEventPopupHandle(user){
        let labels = ['First Name' , 'Last Name', 'Phone Number', "Email" , "dd/mm/yyyy"]
        if(user){
            labels = [user.firstname, user.lastname , user.phonenumber , user.email , user.birthday]
        }
        return(
                <div className='popup'>
                    <div className='close-btn' onClick={this.onVisibilityChangeHandle.bind(this)}>&times;</div>
                    <h2>Create New User</h2>
                    <div className='input-container'>
                        <TextField className='input-field' name="fname" label={labels[0]} variant="outlined" type={'text'} value={this.state.form.firstname} onChange={this.onChangeHandle.bind(this)}/>
                        <TextField className='input-field' name="lname" label={labels[1]} variant="outlined" type={'text'} value={this.state.form.lastname} onChange={this.onChangeHandle.bind(this)} />
                        <TextField className='input-field' name="phonenum" label={labels[2]} variant="outlined" type={'number'} value={this.state.form.phonenumber} onChange={this.onChangeHandle.bind(this)} />
                        <TextField className='input-field' name="email" label={labels[3]} variant="outlined" type={'email'} value={this.state.form.email} onChange={this.onChangeHandle.bind(this)} />
                        <TextField className='input-field' name="birthday" type={'date'} variant="outlined" placeholder={labels[4]} value={this.state.form.birthday} onChange={this.onChangeHandle.bind(this)} />
                        <TextField style={{width: '40%'}} className='input-field' id="outlined-basic"  variant="outlined" type={'submit'}  onClick={this.onSumbitHandle.bind(this)}/>
                    </div>
                </div>
        )
    }

    onSumbitHandle(){
        if(this.verifyFields()){
            this.state.currentUser ? helper.updateUser(this.state.form,this.state.currentUserID) : helper.addUser(this.state.form)
            this.clearAllFields()
            this.onVisibilityChangeHandle()
        } else {
            alert("Please that you filled correctly all the fields")
        }
        
        
    }

    onChangeHandle(event){
        switch(event.target.name){
            case 'fname':
                this.setState({
                    form: {
                        ...this.state.form,
                        firstname: event.target.value
                    }
                })
                break
            case 'lname':
                this.setState({
                    form: {
                        ...this.state.form,
                        lastname: event.target.value
                    }
                })
                break
            case 'phonenum':
                this.setState({
                    form: {
                        ...this.state.form,
                        phonenumber: event.target.value
                    }
                })
                break
            case 'email':
                this.setState({
                    form: {
                        ...this.state.form,
                        email: event.target.value
                    }
                })
                break
            case 'birthday':
                this.setState({
                    form: {
                        ...this.state.form,
                        birthday: event.target.value
                    }
                })
                break
        }
        
    }

    onEditPress(id){
        this.setState({currentUserID: id})
        this.setState({currentUser: helper.getUser(id)})
        this.onVisibilityChangeHandle()
    }

    verifyFields(){
        let form = {...this.state.form}
        if(form.firstname.length < 1){
            return false
        }
        else if(form.lastname.length < 1){
            return false
        }
        else if(form.phonenumber.length !== 10){
            return false
        }
        else if(!form.email.includes("@") || !form.email.includes(".")){
            return false
        }
        else if(!this.verifyBirthday(form.birthday)){
            return false
        }

        return true
    }

    verifyBirthday(birthday){
        let parts = String(birthday).split('/')
        if(parts[0] > 31 || parts[0] <= 0){
            return false
        }
        else if(parts[1] > 12 || parts[1] <= 0){
            return false
        }
        return true
    }

    clearAllFields(){
        this.setState({form:{
            ...this.state.form,
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            birthday: ''
        }})

        this.setState({currentUser: null})
        this.setState({currentUserID: null})
    }

    render() { 
        return (
            <div>

                <div style={styleSheet.container}>
                    <h2>Users</h2>
                </div>
                {this.state.popupVisibility ? this.onEventPopupHandle(this.state.currentUser) : null}
                <UserTable onEditPress={this.onEditPress.bind(this)}/>
                <div style={styleSheet.container}>
                    <Button variant='outlined' onClick={this.onVisibilityChangeHandle.bind(this)}>Add New User</Button>
                </div>
            </div>
            
        );
    }
}
 
export default PageMain;

const styleSheet = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1%'
    }
}