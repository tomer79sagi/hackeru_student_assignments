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

    // Add the new user to the users array with the new ID
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

    // Clear the form fields
    event.target.first_name.value = "";
    event.target.last_name.value = "";
    event.target.phone_number.value = "";
    event.target.email.value = "";
    event.target.birth_date.value = "";
    event.target.status.value = "";
    event.target.profile_pic.value = "";
  }

  onDeleteHandle() {
    // 'arguments' is a pre-defined array that contains ALL properties sent to this function (aka event handler)
    // arguments[0] = book.ID

    // 1. Find the book with the provided ISBN and remove it from the 'this.state.books'

    let confirmAction = window.confirm("Are you sure to execute this action?");
    if (confirmAction) {
      this.setState({
        users: this.state.users.filter((user) => user.ID !== arguments[0]),
      });
      alert("Action successfully executed");
    } else {
      alert("Action canceled");
    }
  }

  onEditHandle() {
    // 1. Find book by book ID (I received it in 'arguments[0]')
    const user = this.state.users.find((user) => user.ID === arguments[0]);

    // 2. Update the 'editBook' property in 'this.state' to contain the extracted details for editing
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
        // If the ID of the book in the current iteration EQUALS the 'ID' in the 'this.state.editBook'
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

        // Return the original book from the array (in the current iteration)
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
        {/* EDIT NEW user */}
        <div className="add_customer">
          <button
            className="btn btn-primary m-2"
            onClick={this.AddCustomerHandle.bind(this)}
          >
            Add Customer
          </button>
        </div>

        {this.state.isEdit === true && (
          <div className="input-group-text">
            <form onSubmit={this.onUpdateHandle.bind(this)}>
              {/* <input type="text" name="frm_user_name" defaultValue={this.state.editUser.name}></input> */}

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

        {/* ADD NEW USER */}
        {this.state.isADD && (
          // { this.state.isEdit === false &&
          // { this.state.isEdit !== true &&
          <div className="input-group-text   ">
            <form onSubmit={this.onSubmitHandle.bind(this)}>
              {/* <input type="number" name="ID" placeholder="ID"></input> */}

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
            )) /* this code creates a new ARRAY and hands it to REACT to display */
          }
        </table>
      </article>
    );
  }
}

export default MainContent;

//5. הוספת "קלאס" שלישי אשר יעזור להחביא את שדות הטקסט

//1. הסתרת כל שדות הוספת לקוח ופתיחתם אך ורק שADD CUSTOMER נלחץ

//2. יצירת כפתור ADD COSTUMER  לפתיחת תיבות הטקסט

//3. הוספת כפתור CANCEL אשר מעלים את שדות הטקסט ללא כל שינוי בסטיט

//4. שימוש בISEDIT כדי להחביא את תיבוט הטקסט

//7. לאחר לחיצה על כפתור EDIT כפתור SAVE ישתנה ל UPDATE- כלומר כשלוחצים על EDIT כל הפרטים הרולוונטים של המשמש יופיעו בתיבות הטקטס

//8.