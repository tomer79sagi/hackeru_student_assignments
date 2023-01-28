import React, { Component } from 'react';
import "./Main.css"

class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
            //1. properties - declare them 
            //2. action - find out how to use enum in order to use three states/statuses

            action: "none",
            editCustomer:{
                id: "",
                avatar: "",
                first_name: "",
                last_name: "",
                phone: "",
                username: "",
                birth_date: "",
                status: ""
            },
            customers:[
                {
                    id: 1,
                    avatar: "https://www.melivecode.com/users/1.png",
                    first_name: "Karn",
                    last_name: "Yong",
                    phone: "0525498555",
                    username: "karn.yong@melivecode.com",
                    birth_date: "1997-12-05",
                    status: ""
                },
                {
                    id: 2,
                    first_name: "Ivy",
                    avatar: "https://www.melivecode.com/users/2.png",
                    last_name: "Cal",
                    phone: "0545899974",
                    username: "ivy.cal@melivecode.com",
                    birth_date: "2002-10-25",
                    status: ""
                },
                {
                    id: 3,
                    avatar: "https://www.melivecode.com/users/3.png",
                    first_name: "Walter",
                    last_name: "Bertrand",
                    phone: "0508745211",
                    username: "walter.beau@melivecode.com",
                    birth_date: "1985-07-10",
                    status: ""
                }
            ]
        }  
    }

    onCreateHandle(event){
        event.preventDefault();
            this.setState({
                action: "create"
            })
        }

    onSubmitHandle(event){
        event.preventDefault();
        this.setState({
            customers:[
                ...this.state.customers,
                {
                    //probs: when i delete a customer someting with the id goes wrong -
                    //1. the last id is depends on the length of the array which is changing
                    //2. the order of the ids is changing
                    //solution1: find a way to check the id of the last cell in the array and increase it in one.

                    id:this.state.customers.length+1,
                    avatar: event.target.avatar.value,
                    first_name: event.target.firstName.value,
                    last_name: event.target.lastName.value,
                    phone: event.target.phone.value,
                    username: event.target.username.value,
                    birth_date: event.target.birthDate.value,
                    status: event.target.status.value
                }
            ] 
        });
        this.setState({
            action: "none"
        })
    }

    onCancleHandle(event){
        this.setState({
            action: "none"
        })
    }

    onEditHandle(event){
        const cus = this.state.customers.find(cus => cus.id === arguments[0]);
        this.setState({
            action: "edit",
            editCustomer: {
                id: cus.id,
                avatar: cus.avatar,
                first_name: cus.first_name,
                last_name: cus.last_name,
                phone: cus.phone,
                username: cus.username,
                birth_date: cus.birth_date,
                status: cus.status
            }
        })
    }

    onDeleteHandle(event){
        this.setState({
            customers: this.state.customers.filter(cus => cus.id !== arguments[0])
        })
    }

    onUpdateHandle(event){

    }


    render() { 
        return (
            <div>
                <div className="headline">
                    <h1>Uesrs</h1>
                    <button onClick={this.onCreateHandle.bind(this)}>Create</button>
                </div>
                {this.state.action === "create" &&
                    <form onSubmit={this.onSubmitHandle.bind(this)}>
                        <label htmlFor="avatar">avatar:&nbsp;</label><input type="text" name="avatar"/><br/>
                        <label htmlFor="firstName">firs tName:&nbsp;</label><input type="text" name="firstName" id="firstName"/><br/>
                        <label htmlFor="lastName">last Name:&nbsp;</label><input type="text" name="lastName" id="lastName"/><br/>
                        <label htmlFor="phone">phone number:&nbsp;</label><input type="number" name="phone" id="phone"/><br/>
                        <label htmlFor="username">username:&nbsp;</label><input type="email" name="username" id="username"/><br/>
                        <label htmlFor="birthDate">birth date:&nbsp;</label><input type="date" name="birthDate" id="birthDate"/><br/>
                        <label htmlFor="status">status:&nbsp;</label><input type="text" name="status" id="status"/><br/>
                        <div>
                            <button>Add</button>&nbsp;
                            <button onClick={this.onCancleHandle.bind(this)}>Cancel</button>
                        </div>
                    </form>
                }

                {this.state.action === "edit" &&
                    <form onSubmit={this.onUpdateHandle.bind(this, this.id)}>
                        <label htmlFor="id">#:&nbsp;</label><input type="text" name="id" defaultValue={this.state.editCustomer.id}/><br/>
                        <label htmlFor="avatar">avatar:&nbsp;</label><input type="text" name="avatar" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="firstName">firs tName:&nbsp;</label><input type="text" name="firstName" id="firstName" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="lastName">last Name:&nbsp;</label><input type="text" name="lastName" id="lastName" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="phone">phone number:&nbsp;</label><input type="number" name="phone" id="phone" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="username">username:&nbsp;</label><input type="email" name="username" id="username" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="birthDate">birth date:&nbsp;</label><input type="date" name="birthDate" id="birthDate" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <label htmlFor="status">status:&nbsp;</label><input type="text" name="status" id="status" defaultValue={this.state.editCustomer.avatar}/><br/>
                        <div>
                            <button>Update</button>&nbsp;
                            <button onClick={this.onCancleHandle.bind(this)}>Cancel</button>
                        </div>
                    </form>
                }

                <table className="cls_table">
                   <tr>
                      <th>#</th>
                      <th>Avatar</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Phone</th>
                      <th>Username</th>
                      <th>Birth Date</th>
                      <th>Status</th>
                      <th>Action</th>
                   </tr>
                   {this.state.customers.map(cus =>{
                       return(
                           <tr>
                               <td>{cus.id}</td>
                               <td>{cus.avatar}</td>
                               <td>{cus.first_name}</td>
                               <td>{cus.last_name}</td>
                               <td>{cus.phone}</td>
                               <td>{cus.username}</td>
                               <td>{cus.birth_date}</td>
                               <td>{cus.status}</td>
                               <td>
                                   <button onClick={this.onEditHandle.bind(this)}>Edit</button>&nbsp;
                                   <button onClick={this.onDeleteHandle.bind(this, cus.id)}>Delete</button>
                               </td>
                           </tr>)}
                   )}
                </table>
            </div>
        );
    }
}
 
export default Main;

// change the icon
