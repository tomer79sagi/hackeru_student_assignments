/** @format */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class FormCreatePopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clients: [
				{
					index: "",
					avatar: "",
					firstName: "",
					lastName: "",
					phoneNumber: "",
					email: "",
					birthDate: "",
				},
			],
		};

		this.toggle = this.toggle.bind(this);
		this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
		this.handleChangeLastName = this.handleChangeLastName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}
	handleChangeFirstName(event) {
		this.setState({ firstName: event.target.value });
	}
	handleChangeLastName(event) {
		this.setState({ lastName: event.target.value });
	}
	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			modal: false,
		});
	}

	render() {

		return (
			<div>
				<Button color="success" onClick={this.toggle}>
					Add New Client
				</Button>
				<Modal isOpen={this.state.modal}>
					<form onSubmit={this.handleSubmit}>
						<ModalHeader>New Client Form</ModalHeader>
						<ModalBody>
							<>
								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">First</InputGroup.Text>
									<Form.Control
										name="firstName"
										placeholder="FirstName"
										aria-label="FirstName"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">Last</InputGroup.Text>
									<Form.Control
										name="lastName"
										placeholder="LastName"
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
										placeholder="PhoneNumber"
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
										placeholder="Date of Birth"
										aria-label="Date Of Birth"
										aria-describedby="basic-addon1"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<Form.Control
										name="email"
										placeholder="Email"
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
