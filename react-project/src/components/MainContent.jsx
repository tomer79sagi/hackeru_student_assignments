import React, { Component } from 'react';
import Header from './Header';
import UsersComponent from './UsersComponent';
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
    }

    onSubmitHandle = (...args) => {
        this.setState({
            isAdd: false,
            users: [
                ...this.state.users,
                {
                    avatar: args[0],
                    fname: args[1],
                    lname: args[2],
                    phone: args[3],
                    email: args[4],
                    bdate: format(parseISO(args[5]), 'dd/MM/yyyy'),
                    status: args[6]
                }
            ]
        })
        this.setState({ isForm: false })
    }

    onDeleteHandle = (...args) => {
        let text = "Are you sure that you want to delete this user? ";
        if (window.confirm(text) === true) {
            this.setState({
                users: this.state.users.filter(user => user.id !== args[0])
            });
        }
    }
    onEditHandle = (...args) => {
        this.setState({
            isForm: false,
            isEdit: false
        })
        const user = this.state.users.find(user => user.id === args[0]);
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
    onAddHandle = () => {
        this.setState({ isForm: true, isAdd: true });
    }
    onCancelHandle = () => {
        this.setState({ isForm: false, isAdd: false, isEdit: false });
    }
    onUpdateHandle = (...args) => {
        this.setState({
            isEdit: false,
            isForm: false,
            users: this.state.users.map(user => {
                if (user.id === this.state.editUser.id) {
                    user.avatar = args[0];
                    user.fname = args[1];
                    user.lname = args[2];
                    user.phone = args[3];
                    user.email = args[4];
                    user.bdate = format(parseISO(args[5]), 'dd/MM/yyyy');
                    user.status = args[6];
                }
                return user;
            })
        });
    }

    transformDate = (dateString) => {
        const dateArray = dateString.split("/");
        return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    }

    render() {
        const editBDate = this.transformDate(this.state.editUser.bdate);
        return (
            <>
                <Header
                    SubmitForm={this.onSubmitHandle}
                    UpdateUser={this.onUpdateHandle}
                    AddUser={this.onAddHandle}
                    CancelAction={this.onCancelHandle}
                    TransformDate={editBDate}
                    EditUser={this.state.editUser}
                    isAdd={this.state.isAdd}
                    isForm={this.state.isForm}
                    isEdit={this.state.isEdit}
                    Users={this.state.users}
                />
                <UsersComponent
                    DeleteUser={this.onDeleteHandle}
                    EditUser={this.onEditHandle}
                    Users={this.state.users}
                />
            </>
        );
    }
}
export default MainContent;