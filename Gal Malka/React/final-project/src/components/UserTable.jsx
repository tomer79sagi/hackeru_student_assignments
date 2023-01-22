import React, { Component } from 'react';
import { Button  } from '@mui/material';
import './UserTable.css'
import helper from '../helpers/helper';

class UserTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            popupVisibility: false,
            tableTags: ['#' , 'Avatar' , 'First Name' , 'Last Name' , 'Phone' , 'Email' , 'Birthday' , 'Status' , 'Actions'],
            users: [],
            options: ['Lead','Interested','Trial','Customer']
        }
    }

    onDeleteHandle(event){
        let key = event.target.id
        let newUsers = [...this.state.users]
        newUsers.splice(key,1)
        this.setState({users: newUsers})
    }

    onEditHandle(event){
        console.log(event.target.id);
    }

    onOptionChangeHandle(id,event){
        console.log(event.target.value);
        console.log(id);
        helper.updateStatus(event.target.value, id - 1)
    }

    onVisibilityChangeHandle(){
        this.setState({popupVisibility: !this.state.popupVisibility})
    }
    

    componentDidMount(){
        this.setState({users: helper.getUsers()})
    }

    render() { 
        return (
            <div>
                {this.state.popupVisibility ? this.onUserEditPopupHandle() : null}
                <table>
                    <tr>
                        {this.state.tableTags.map((label , index) => {
                            return(
                                <th key={index}>{label}</th>
                            )
                        })}
                    </tr>
                    
                    {this.state.users.map((user, index) => {
                        return(
                            <tr key={index}>
                                <td>{user.id}</td>

                                <td>
                                    <img src={user.avatar} alt="" style={{width: '32px' , height: '32px'}} />
                                </td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.email}</td>
                                <td>{user.birthday}</td>
                                <td>
                                    <select onChange={this.onOptionChangeHandle.bind(this,user.id)}>
                                        <option>{user.status}</option>
                                        {this.state.options.map((option,index) => {
                                            return(
                                                
                                                <option key={index} value={option} hidden={option === user.status}>{option}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <Button id={index} variant="outlined" onClick={() => this.props.onEditPress(index)}>Edit</Button>
                                    <Button id={index} variant="outlined" color='error' onClick={this.onDeleteHandle.bind(this)}>Del</Button>
                                </td>
                            </tr>
                        )
                    } )}
                </table>
            </div>
            
        );
    }
}
 
export default UserTable;