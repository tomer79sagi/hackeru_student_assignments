/** @format */
/**working CRUD project the only things i didant managed to fix (wanted the edit to work) 
is the avatar generator giving blank image for some reason and the page dosent look very good.
and the look of the site isnt great
*/

import { faker } from "@faker-js/faker";
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormCreatePopUpAdd from "./FormPopUpAdd";
import FormPopupEditFun from "./FormPopUpEditTest";
import "./MainContent.css";
import PageHeader from "./PageHeader";
import ShowCustomers from "./ShowCustomers";
import { format, parseISO } from "date-fns";

const statusEnum = {
	1 : "Lead",
	2 : "Interested",
	3: "Trial",
	4: "Customer"
}
class MainContent extends Component {
	constructor(props) {
		super(props);
		

		this.state = {
			isForm: false,
			isAdd: false,
			isEdit: false,

			clients: [
				{
					index: "1",
					avatar: "",
					firstName: "Erez",
					lastName: "Dagan",
					phoneNumber: "054223123",
					email: "erezdagan@hackeru.com",
					birthDate: "1993-10-25",
					status: statusEnum[1],
				},
				{
					index: "2",
					avatar: "",
					firstName: "Erez",
					lastName: "Dagan",
					phoneNumber: "054223123",
					email: "erezdagan@hackeru.com",
					birthDate: "1993-10-25",
					status: statusEnum[1],
				},
			],
			editClient: {
				index: "",
				avatar: "",
				firstName: "",
				lastName: "",
				phoneNumber: "",
				email: "",
				birthDate: "",
				status: statusEnum[parseInt()],
			},
		};

		
	}

	onSubmitHandle = (...args) => {
		this.setState({
			isAdd: false,
			clients: [
				...this.state.clients,
				{
					avatar: args[0],
					firstName: args[1],
					lastName: args[2],
					phoneNumber: args[3],
					email: args[4],
					birthDate: args[5],
					status: statusEnum[args[6]],
				},
			],
		});
		this.setState({ isForm: false });
	};

	onDeleteHandle = (...args) => {
		let text = "Are you sure that you want to delete this user? ";
		if (window.confirm(text) === true) {
			this.setState({
				clients: this.state.clients.filter(
					(client) => client.index !== args[0]
				),
			});
		}
	};

	onEditHandle = (...args) => {
		const client = this.state.clients.find(
			(client) => client.index === args[0]
		);
		this.setState({
			isForm: true,
			isEdit: true,
			isAdd: false,
			editClient: {
				index: client.index,
				avatar: client.avatar,
				firstName: client.firstName,
				lastName: client.lastName,
				email: client.email,
				birthDate: client.birthDate,
				phoneNumber: client.phoneNumber,
				status: statusEnum[client.status],
			},
		});
	};
	onAddHandle = () => {
		this.setState({ isForm: true, isAdd: true });
	};
	onCancelHandle = () => {
		this.setState({ isForm: false, isAdd: false, isEdit: false });
	};
	onUpdateHandle = (...args) => {
		this.setState({
			isEdit: false,
			isForm: false,
			clients: this.state.clients.map((client) => {
				if (client.index === this.state.editClient.index) {
					client.avatar = args[0];
					client.firstName = args[1];
					client.lastName = args[2];
					client.phoneNumber = args[3];
					client.email = args[4];
					client.birthDate = args[5];;
					client.status = statusEnum[args[6]];
				}
				return client;
			}),
		});
	};
	transformDate = (dateString) => {
		const dateArray = dateString.split("/");
		return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
	};

	render() {
		const editBDate = this.transformDate(this.state.editClient.birthDate);

		return (
			<article className="holy-grail__middle">
				<PageHeader
					SubmitForm={this.onSubmitHandle}
					UpdateClient={this.onUpdateHandle}
					AddClient={this.onAddHandle}
					CancelAction={this.onCancelHandle}
					EditClient={this.state.editClient}
					isAdd={this.state.isAdd}
					isForm={this.state.isForm}
					isEdit={this.state.isEdit}
					Clients={this.state.clients}
				/>
				{/*Show Customers */}
				<ShowCustomers
					DeleteClient={this.onDeleteHandle}
					EditClient={this.onEditHandle}
					Clients={this.state.clients}
				/>
			</article>
		);
	}
}

export default MainContent;
