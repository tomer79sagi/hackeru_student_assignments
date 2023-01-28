import React, { Component } from "react";
import "./Crm.css";

// ENUMS
const status = Object.freeze({
  LEAD: "Lead",
  INTERESTED: "Interested",
  TRIAL: "Trial",
  CUSTOMER: "Customer",
});
const formStatus = Object.freeze({
  CREATE: "create",
  EDIT: "edit",
  NONE: "none",
});

// CRM Class Component
class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formStat: formStatus.NONE, //form status variable
      //temp customer object to hold edited item
      editCustomer: {
        id: 0,
        fname: "",
        lname: "",
        phone: "",
        email: "",
        birthdate: "",
        status: status.LEAD,
        picture: "",
      },
      currId: 4, //current customer id
      customers: [
        //customers array
        {
          id: 1,
          fname: "Karn",
          lname: "Yong",
          phone: "1234360",
          email: "karn.yong@melivecode.com",
          birthdate: "2000-01-01",
          status: status.LEAD,
          picture: "https://www.melivecode.com/users/1.png",
        },
        {
          id: 2,
          fname: "Ivy",
          lname: "Cal",
          phone: "1212121",
          email: "ivy.cal@melivecode.com",
          birthdate: "2010-02-02",
          status: status.LEAD,
          picture: "https://www.melivecode.com/users/2.png",
        },
        {
          id: 3,
          fname: "Walter",
          lname: "Beau",
          phone: "13131313",
          email: "walter.beau@melivecode.com",
          birthdate: "2003-03-03",
          status: status.LEAD,
          picture: "https://www.melivecode.com/users/3.png",
        },
      ],
      //status options for the <select>
      options: [
        {
          label: "Lead",
          value: "lead",
        },
        {
          label: "Intersted",
          value: "interested",
        },
        {
          label: "Trial",
          value: "trial",
        },
        {
          label: "Customer",
          value: "customer",
        },
      ],
    };
  }
  handleNewCustomer() {
    this.setState({
      formStat: formStatus.CREATE,
    });
  }

  handleCreateCustomerForm(event) {
    event.preventDefault();

    this.setState({ currId: this.state.currId + 1 });

    this.setState({
      customers: [
        ...this.state.customers,
        {
          id: this.state.currId,
          fname: event.target.frm_fname.value,
          lname: event.target.frm_lname.value,
          phone: event.target.frm_phone.value,
          email: event.target.frm_email.value,
          birthdate: event.target.frm_birthday.value,
          status: event.target.frm_status.value,
          picture: event.target.frm_image.value,
        },
      ],
    });

    this.setState({ formStat: formStatus.NONE });
  }

  handleCancel() {
    this.setState({ formStat: formStatus.NONE });
  }

  handleEdit() {
    const customer = this.state.customers.find(
      (customer) => customer.id === arguments[0]
    );
    this.setState({
      formStat: formStatus.EDIT,
      editCustomer: {
        id: customer.id,
        fname: customer.fname,
        lname: customer.lname,
        phone: customer.phone,
        email: customer.email,
        birthdate: customer.birthdate,
        status: customer.status,
        picture: customer.picture,
      },
    });
  }
  handleUpdate(event) {
    event.preventDefault();
    this.setState({
      formStat: formStatus.NONE,
      customers: this.state.customers.map((customer) => {
        if (customer.id === this.state.editCustomer.id) {
          customer.fname = event.target.frm_fname.value;
          customer.lname = event.target.frm_lname.value;
          customer.phone = event.target.frm_phone.value;
          customer.email = event.target.frm_email.value;
          customer.birthdate = event.target.frm_birthday.value;
          customer.status = event.target.frm_status.value;
          customer.picture = event.target.frm_image.value;

          return customer;
        }

        return customer;
      }),
    });
  }
  handleDelete() {
    this.setState({
      customers: this.state.customers.filter(
        (customer) => customer.id !== arguments[0]
      ),
    });
  }
  render() {
    return (
      <div className="crm">
        <button onClick={this.handleNewCustomer.bind(this)}>
          {" "}
          Add New Customer
        </button>
        <br />
        <br />
        {/* Create New Cstomer form */}
        {this.state.formStat === formStatus.CREATE && (
          <form
            onSubmit={this.handleCreateCustomerForm.bind(this)}
            className="addCustomerForm"
            action="add_customer"
          >
            <div class="form-group">
              <span className="frm_item">
                <label htmlFor="frm_fname">First name:</label>&nbsp;
                <input type="text" name="frm_fname" required/>
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="lname">Last name:</label>&nbsp;
                <input type="text" name="frm_lname" required/>
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_phone">Phone:</label>&nbsp;
                <input type="number" name="frm_phone" required/>
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_email">Email:</label>&nbsp;
                <input type="email" name="frm_email" required/>
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_birthday">Birthday:</label>&nbsp;
                <input type="date" name="frm_birthday" id="birthday" required/>
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_status">Status:</label>&nbsp;
                <select name="frm_status" id="status">
                  {this.state.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </span>
              <br />

              <span className="frm_item">
                <label htmlFor="frm_image">Image url:</label>&nbsp;
                <input type="text" name="frm_image" required/>
              </span>
              <br />
              <span className="frm_item">
                <button>Save</button>
                <button onClick={this.handleCancel.bind(this)}>Cancel</button>
              </span>
            </div>
          </form>
        )}

        {/* Edit Form */}
        {this.state.formStat === formStatus.EDIT && (
          <form
            onSubmit={this.handleUpdate.bind(this)}
            className="addCustomerForm"
            action="add_customer"
          >
            <span>Customer ID: {this.state.editCustomer.id}</span>
            <br />
            <br />
            <div class="form-group">
              <span className="frm_item">
                <label htmlFor="frm_fname">First name:</label>&nbsp;
                <input
                  type="text"
                  name="frm_fname"
                  defaultValue={this.state.editCustomer.fname}
                />
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="lname">Last name:</label>&nbsp;
                <input
                  type="text"
                  name="frm_lname"
                  defaultValue={this.state.editCustomer.lname}
                />
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_phone">Phone:</label>&nbsp;
                <input
                  type="text"
                  name="frm_phone"
                  defaultValue={this.state.editCustomer.phone}
                />
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_email">Email:</label>&nbsp;
                <input
                  type="text"
                  name="frm_email"
                  defaultValue={this.state.editCustomer.email}
                />
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_birthday">Birthday:</label>&nbsp;
                <input
                  type="date"
                  name="frm_birthday"
                  id="birthday"
                  defaultValue={this.state.editCustomer.birthdate}
                />
              </span>
              <br />
              <span className="frm_item">
                <label htmlFor="frm_status">Status:</label>&nbsp;
                <select
                  name="frm_status"
                  id="status"
                  defaultValue={this.state.editCustomer.status}
                >
                  {this.state.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </span>
              <br />

              <span className="frm_item">
                <label htmlFor="frm_image">Image url:</label>&nbsp;
                <input
                  type="text"
                  name="frm_image"
                  defaultValue={this.state.editCustomer.picture}
                />
              </span>
              <br />
              <span className="frm_item">
                <button>UPDATE</button>
                <button onClick={this.handleCancel.bind(this)}>Cancel</button>
              </span>
            </div>
          </form>
        )}

        {/* Customers List */}
        <div className="customers_list">
          {this.state.customers.map((customer) => (
            <div className="customer_item">
              <span className="customer_id">{customer.id}</span>
              <span className="customer_pic">
                <img src={customer.picture} alt="eM"></img>
              </span>
              <span className="customer_name">{customer.fname}</span>
              <span className="customer_lname">{customer.lname}</span>
              <span className="customer_phone">{customer.phone}</span>
              <span className="customer_email">{customer.email}</span>
              <span className="customer_birthdate">{customer.birthdate}</span>
              <span className="customer_status">{customer.status}</span>
              <span className="customer_action">
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to DELETE this customer?"
                      )
                    ) {
                      this.handleDelete(customer.id);
                    }
                  }}
                >
                  Delete
                </button>
                &nbsp;&nbsp;
                <button onClick={this.handleEdit.bind(this, customer.id)}>
                  Edit
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Crm;
