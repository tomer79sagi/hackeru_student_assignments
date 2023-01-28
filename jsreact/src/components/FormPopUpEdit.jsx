/** @format */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class FormEditPopUp extends React.Component {
	constructor(props) {
		super(props);
/* 		this.state =
			{
				modal: false,
				index: this.props.clients.index,
				avatar: this.props.clients.avatar,
				firstName: this.props.clients.firstName,
				lastName: this.props.clients.lastName,
				phoneNumber: this.props.clients.phoneNumber,
				email: this.props.clients.email,
				birthDate: this.props.clients.birthDate,
				test:"test"
			} */

		this.toggle = this.toggle.bind(this);
/* 		this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
		this.handleChangeLastName = this.handleChangeLastName.bind(this);
		this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this); */
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	handleChangeFirstName = (event) => {
		this.setState({ firstName: event.target.value });
		//this.props.onChangeFirstName(event.target.value);
	};
	handleChangeLastName = (event) => {
		this.setState({ lastName: event.target.value });
		//this.props.onChangeLastName(event.target.value);
	};
	handleChangePhoneNumber = (event) => {
		this.setState({ phoneNumber: event.target.value });
		//this.props.onChangePhoneNumber(event.target.value);
	};
	handleChangeEmail = (event) => {
		this.setState({ email: event.target.value });
		//this.props.onChangeEmail(event.target.value);
	};
	handleChangeBirthDate = (event) => {
		this.setState({ birthDate: event.target.value });
		//this.props.onChangeBirthDate(event.target.value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onUpdateHandle(this.state)
	};

	render() {
		return (
			<div>
				<Button color="success" onClick={this.toggle}>
					Edit Client
				</Button>
				<Modal isOpen={this.state.modal}>
					<form onSubmit={this.handleSubmit}>
						<ModalHeader>Edit Client Form</ModalHeader>
						<ModalBody>
							<>
								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">First</InputGroup.Text>
									<Form.Control
										name="firstName"
										defaultValue={this.state.firstName}
										onChange={this.handleChangeFirstName.bind(this)}
										aria-label="FirstName"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">Last</InputGroup.Text>
									<Form.Control
										name="lastName"
										defaultValue={this.state.lastName}
										onChange={this.handleChangeLastName.bind(this)}
										aria-label="LastName"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">
										Phone Number
									</InputGroup.Text>
									<Form.Control
										name="phoneNumber"
										defaultValue={this.state.phoneNumber}
										onChange={this.handleChangePhoneNumber.bind(this)}
										aria-label="Phonenumber"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">
										Date Of Birth
									</InputGroup.Text>
									<Form.Control
										type="date"
										name="birthDate"
										defaultValue={this.state.birthDate}
										onChange={this.handleChangeBirthDate.bind(this)}
										aria-label="Date Of Birth"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<Form.Control
										name="email"
										defaultValue={this.state.email}
										onChange={this.handleChangeEmail.bind(this)}
										aria-label="Email"
										aria-describedby="basic-addon2"
									/>
									<InputGroup.Text id="basic-addon2">
										@example.com
									</InputGroup.Text>
								</InputGroup>

								{/* 								<InputGroup className="mb-3">
									<InputGroup.Text>$</InputGroup.Text>
									<Form.Control aria-label="Amount (to the nearest dollar)" />
									<InputGroup.Text>.00</InputGroup.Text>
								</InputGroup>

								<InputGroup>
									<InputGroup.Text>With textarea</InputGroup.Text>
									<Form.Control as="textarea" aria-label="With textarea" />
								</InputGroup> */}
							</>
						</ModalBody>
						<ModalFooter>
							<input
								type="submit"
								value="Submit"
								color="primary"
								className="btn btn-primary"
							/>
							<Button color="danger" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</form>
				</Modal>
			</div>
		);
	}
}
