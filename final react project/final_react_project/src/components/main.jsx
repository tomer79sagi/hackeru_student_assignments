import React, { Component } from 'react';
import "./Main.css"

class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
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
                    status: "Lead"
                },
                {
                    id: 2,
                    first_name: "Ivy",
                    avatar: "https://www.melivecode.com/users/2.png",
                    last_name: "Cal",
                    phone: "0545899974",
                    username: "ivy.cal@melivecode.com",
                    birth_date: "2002-10-25",
                    status: "Trial"
                },
                {
                    id: 3,
                    avatar: "https://www.melivecode.com/users/3.png",
                    first_name: "Walter",
                    last_name: "Bertrand",
                    phone: "0508745211",
                    username: "walter.beau@melivecode.com",
                    birth_date: "1985-07-10",
                    status: "Customer"
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
        let lengthArray = this.state.customers.length-1;
        this.setState({
            
            customers:[
                ...this.state.customers,
                {
                    id: this.state.customers[lengthArray].id+1,
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
        //when i delete a customer the order of the ids is changing
        if(window.confirm("Are you sure you want to delete this customer?") === true){
            this.setState({
                customers: this.state.customers.filter(cus => cus.id !== arguments[0])
            })
        }
    }

    onUpdateHandle(event){ 
        //update the date
        event.preventDefault();

        this.setState({
            action: "none",
            customers: this.state.customers.map(cus => {
                if(cus.id === this.state.editCustomer.id){
                    cus.avatar = event.target.avatar.value;
                    cus.first_name = event.target.firstName.value;
                    cus.last_name = event.target.lastName.value;
                    cus.phone = event.target.phone.value;
                    cus.username = event.target.username.value;
                    cus.birth_date = event.target.birthDate.value;
                    cus.status = event.target.status.value;  
                }
                return cus;
            })
        })
    }
    

    componentDidMount() {
        document.title = "Final React Project"; 
     }

    render() { 
        return (
            <div>
                <div className="headline">
                    <h1>Uesrs</h1>
                    <button className="cls_create_btn" onClick={this.onCreateHandle.bind(this)}>Create</button>
                </div>
                {this.state.action === "create" &&
                    <form className="form_container" onSubmit={this.onSubmitHandle.bind(this)}>
                        <label htmlFor="avatar">avatar:</label>
                        <input type="url" name="avatar"/>
                        <label htmlFor="firstName">firs tName:</label>
                        <input type="text" name="firstName" id="firstName"/>
                        <label htmlFor="lastName">last Name:</label>
                        <input type="text" name="lastName" id="lastName"/>
                        <label htmlFor="phone">phone number:</label>
                        <input type="tel" name="phone" id="phone"/>
                        <label htmlFor="username">e-mail:</label>
                        <input type="email" name="username" id="username"/>
                        <label htmlFor="birthDate">birth date:</label>
                        <input type="date" name="birthDate" id="birthDate"/>
                        <label htmlFor="status">status:</label>
                        <select id="status" name={"status"}>
                            <option value="Lead">Lead</option>
                            <option value="Interested">Interested</option>
                            <option value="Trial">Trial</option>
                            <option value="Customer">Customer</option>
                        </select>
                        <div>
                            <button className="cls_add_btn" type="submit">Add</button>&nbsp;
                            <button className="cls_cancle_btn" onClick={this.onCancleHandle.bind(this)}>Cancel</button>
                        </div>
                    </form>
                }

                {this.state.action === "edit" &&
                    <form className="form_container" onSubmit={this.onUpdateHandle.bind(this)}>
                        <label htmlFor="id">#:</label>
                        <input type="text" name="id" defaultValue={this.state.editCustomer.id} readOnly="readonly"/>
                        <label htmlFor="avatar">avatar:</label>
                        <input type="url" name="avatar" defaultValue={this.state.editCustomer.avatar}/>
                        <label htmlFor="firstName">first Name:</label>
                        <input type="text" name="firstName" id="firstName" defaultValue={this.state.editCustomer.first_name}/>
                        <label htmlFor="lastName">last Name:</label>
                        <input type="text" name="lastName" id="lastName" defaultValue={this.state.editCustomer.last_name}/>
                        <label htmlFor="phone">phone number:</label>
                        <input type="tel" name="phone" id="phone" defaultValue={this.state.editCustomer.phone}/>
                        <label htmlFor="username">e-mail:</label>
                        <input type="email" name="username" id="username" defaultValue={this.state.editCustomer.username}/>
                        <label htmlFor="birthDate">birth date:</label>
                        <input type="date" name="birthDate" id="birthDate" defaultValue={this.state.editCustomer.status}/>
                        <label htmlFor="status">status:</label>
                        <select id="status" name={"status"} defaultValue={this.state.editCustomer.status}>
                            <option value="Lead">Lead</option>
                            <option value="Interested">Interested</option>
                            <option value="Trial">Trial</option>
                            <option value="Customer">Customer</option>
                        </select>
                        <div>
                            <button className="cls_edit_btn" type="submit">Update</button>&nbsp;
                            <button className="cls_cancle_btn" type="button" onClick={this.onCancleHandle.bind(this)}>Cancel</button>
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
                               <td>
                                <img src={cus.avatar} alt="avatar" height={"60em"}/>
                                </td>
                               <td>{cus.first_name}</td>
                               <td>{cus.last_name}</td>
                               <td>{cus.phone}</td>
                               <td>{cus.username}</td>
                               <td>{cus.birth_date}</td>
                               <td>{cus.status}</td>
                               <td>
                                   <button className="cls_edit_btn" onClick={this.onEditHandle.bind(this, cus.id)}>Edit</button>&nbsp;
                                   <button className="cls_cancle_btn" onClick={this.onDeleteHandle.bind(this, cus.id)}>Delete</button>
                               </td>
                           </tr>)}
                   )}
                </table>
            </div>
        );
    }
}
 
export default Main;


