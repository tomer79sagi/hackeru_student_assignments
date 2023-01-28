import React, { Component } from "react";

import "./MainContent.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isADD: false,
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
          phone_number: "978-452-1103",
          birth_date: "02/14/1967",
          status: "Lead",
        },
        {
          ID: 2,
          first_name: "Ivy",
          last_name: "Cal",
          email: "ivy.cal@melivecode.com",
          profile_pic: "https://www.melivecode.com/users/2.png",
          phone_number: "978-452-1103",
          birth_date: "05/28/1986",
          status: "Lead",
        },
        {
          ID: 3,
          first_name: "Walter",
          last_name: "Beau",
          email: "walter.beau@melivecode.com",
          profile_pic: "https://www.melivecode.com/users/3.png",
          phone_number: "947-622-5503",
          birth_date: "06/31/1992",
          status: "Lead",
        },
      ],
    };
  }

  onSubmitHandle(event) {
    event.preventDefault();
    this.setState({
      isADD: false,
      users: [
        ...this.state.users,
        {
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

    event.target.first_name.value = "";
    event.target.last_name.value = "";
    event.target.phone_number.value = "";
    event.target.email.value = "";
    event.target.birth_date.value = "";
    event.target.status.value = "";
    event.target.profile_pic.value = "";
  }

  onDeleteHandle() {
    let applay = window.confirm("Are you sure you want to delete this client?");
    if (applay) {
      this.setState({
        users: this.state.users.filter((user) => user.ID !== arguments[0]),
      });
      alert("Deleted");
    } else {
      alert("Not deleted");
    }
  }

  onEditHandle() {
    const user = this.state.users.find((user) => user.ID === arguments[0]);
    this.setState({
      isADD: false,
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

        return user;
      }),
    });
  }

  AddCustomerHandle() {
    this.setState({
      isADD: true,
      isEdit: false,
    });
  }
  CancelCustomerHandle() {
    this.setState({
      isADD: false,
    });
  }
  CancelCustomerUpdate() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    return (
      <article className="holy-grail__middle">
        <div className="add_customer">
          <button
            className="btn btn-primary m-2"
            onClick={this.AddCustomerHandle.bind(this)}
          >
            Add Client
          </button>
        </div>

        {this.state.isEdit === true && (
          <div className="input-group-text">
            <form onSubmit={this.onUpdateHandle.bind(this)}>

              <input
                className="form-control"
                type="text"
                name="first_name"
                placeholder="First Name"
                defaultValue={this.state.editUser.first_name}
              ></input>
              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder="Last Name"
                defaultValue={this.state.editUser.last_name}
              ></input>
              <input
                className="form-control"
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                defaultValue={this.state.editUser.phone_number}
              ></input>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={this.state.editUser.email}
              ></input>
              <input
                className="form-control"
                type="date"
                name="birth_date"
                placeholder="Birth Date"
                defaultValue={this.state.editUser.birth_date}
              ></input>

              <select
                className="form-select"
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
                className="form-control"
                type="url"
                name="profile_pic"
                placeholder="Profile Pic URL"
                defaultValue={this.state.editUser.profile_pic}
              ></input>
              <button className="btn btn-primary m-2 btn btn-success">
                Update
              </button>
              <button
                onClick={this.CancelCustomerUpdate.bind(this)}
                className="cancle_btn btn btn-primary btn btn-light"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {this.state.isADD && (
          <div className="input-group-text   ">
            <form onSubmit={this.onSubmitHandle.bind(this)}>

              <input
                className="form-control "
                type="text"
                name="first_name"
                placeholder="First Name"
              ></input>

              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder="Last Name"
              ></input>

              <input
                className="form-control"
                type="number"
                name="phone_number"
                placeholder="Phone Number"
              ></input>

              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              ></input>

              <input
                className="form-control"
                type="date"
                name="birth_date"
                placeholder="Birth Date"
              ></input>

              <select className="form-select" name="status" id="status">
                <option value="Lead">Lead</option>
                <option value="Interested">Interested</option>
                <option value="Trial">Trial</option>
                <option value="Customer">Customer</option>
              </select>

              <input
                className="form-control"
                type="url"
                name="profile_pic"
                placeholder="Profile Pic URL"
              ></input>

              <button className="btn btn-primary btn btn-info">Save</button>
              <button
                onClick={this.CancelCustomerHandle.bind(this)}
                className="cancle_btn btn btn-primary m-2 btn btn-light"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
        <table className="user_list  ">
          <tr className="border border-3  ">
            <th>#</th>
            <th>Avatar</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Birth date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          {
            this.state.users.map((user, index) => (
              <tr className="user_item border border-2  ">
                <td className="ID ">&nbsp;{(user.ID = index += 1)}</td>
                <td className="profile_pic">
                  <img src={user.profile_pic} alt="avatar" height="50px" />
                </td>
                <td className="first_name ">{user.first_name}</td>
                <td className="last_name">{user.last_name}</td>
                <td className="phone_number">{user.phone_number}</td>
                <td className="email">{user.email}</td>
                <td className="birth_date">{user.birth_date}</td>
                <td className="status">{user.status}</td>
                <td className="user_actions">
                  <button
                    className="btn btn-outline-danger"
                    onClick={this.onDeleteHandle.bind(this, user.ID)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={this.onEditHandle.bind(this, user.ID)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          }
        </table>
      </article>
    );
  }
}
export default MainContent;