/** @format */

import "./PageHeader.css";
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { faker } from "@faker-js/faker";
import { format, parseISO } from "date-fns";
import Image from "react-bootstrap/Image";

class PageHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
		};
		this.toggle = this.toggle.bind(this);
		this.onSubmitHandle = this.onSubmitHandle.bind(this);
		this.onUpdateHandle = this.onUpdateHandle.bind(this);
		this.onCancelHandel = this.onCancelHandle.bind(this);
		this.onAddHandle = this.onAddHandle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	onSubmitHandle(event) {
		event.preventDefault();
		this.props.SubmitForm(
			event.target.avatar.value,
			event.target.firstName.value,
			event.target.lastName.value,
			event.target.phoneNumber.value,
			event.target.email.value,
			event.target.birthDate.value,
			event.target.status.value
		);
		this.setState({
			modal: false,
		});
	}

	onAddHandle() {
		this.setState({
			modal: true,
		});
		this.props.AddClient();
	}
	onCancelHandle = () => {
		this.props.CancelAction();
		this.setState({
			modal: false,
		});
	};

	onUpdateHandle(event) {
		event.preventDefault();
		this.props.UpdateClient(
			event.target.avatarEdit.value,
			event.target.firstNameEdit.value,
			event.target.lastNameEdit.value,
			event.target.phoneNumberEdit.value,
			event.target.emailEdit.value,
			event.target.birthDateEdit.value,
			event.target.statusEdit.value
		);
	}

	render() {
		return (
			<header className="border-bottom">
				{this.props.isAdd && (
					<Modal isOpen={this.state.modal}>
						<form onSubmit={this.onSubmitHandle}>
							<ModalHeader>New Client Form</ModalHeader>
							<ModalBody>
								<>
									<Image
										alt="avatar"
										name="avatar"
										src={faker.image.avatar()}
										roundedCircle
									/>

									<InputGroup
										className="mb-3"
										controlId="validationCustom01"
										hasValidation
									>
										<InputGroup.Text id="basic-addon1">First</InputGroup.Text>
										<Form.Control
											required
											name="firstName"
											placeholder="FirstName"
											aria-label="FirstName"
											aria-describedby="basic-addon1"
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">
											Please provide a First Name.
										</Form.Control.Feedback>
									</InputGroup>

									<InputGroup
										className="mb-3"
										controlId="validationCustom02"
										hasValidation
									>
										<InputGroup.Text id="basic-addon1">Last</InputGroup.Text>
										<Form.Control
											required
											name="lastName"
											placeholder="LastName"
											aria-label="LastName"
											aria-describedby="basic-addon1"
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">
											Please provide a Last Name.
										</Form.Control.Feedback>
									</InputGroup>

									<InputGroup
										className="mb-3"
										controlId="validationCustom03"
										hasValidation
									>
										<InputGroup.Text id="basic-addon1">
											Phone Number
										</InputGroup.Text>
										<Form.Control
											required
											name="phoneNumber"
											placeholder="PhoneNumber"
											aria-label="Phonenumber"
											aria-describedby="basic-addon1"
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>

										<Form.Control.Feedback type="invalid">
											Please provide a Phone Number.
										</Form.Control.Feedback>
									</InputGroup>

									<InputGroup
										className="mb-3"
										controlId="validationCustom04"
										hasValidation
									>
										<InputGroup.Text id="basic-addon1">
											Date Of Birth
										</InputGroup.Text>
										<Form.Control
											required
											type="date"
											name="birthDate"
											placeholder="Date of Birth"
											aria-label="Date Of Birth"
											aria-describedby="basic-addon1"
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>

										<Form.Control.Feedback type="invalid">
											Please provide a Date.
										</Form.Control.Feedback>
									</InputGroup>

									<InputGroup
										className="mb-3"
										controlId="validationCustom05"
										hasValidation
									>
										<Form.Control
											name="email"
											placeholder="Gmail"
											required
											pattern=".+@gmail\.com"
											aria-label="Email"
											aria-describedby="basic-addon2"
										/>

										<InputGroup.Text id="basic-addon2">
											@gmail.com
										</InputGroup.Text>
										<Form.Control.Feedback type="invalid">
											Please provide a valid gmail.
										</Form.Control.Feedback>
										<Form.Control.Feedback type="valid">
											Looks good!
										</Form.Control.Feedback>
									</InputGroup>

									<Form.Select
										required
										aria-label="Default select example"
										name="status"
										defaultValue={1}
									>
										<option>Status</option>
										<option value="1">Lead</option>
										<option value="2">Interested</option>
										<option value="3">Trial</option>
										<option value="4">Customer</option>
									</Form.Select>
								</>
							</ModalBody>
							<ModalFooter>
								<input
									type="submit"
									value="Submit"
									color="primary"
									className="btn btn-primary"
								/>
								<Button color="danger" onClick={this.onCancelHandle}>
									Cancel
								</Button>
							</ModalFooter>
						</form>
					</Modal>
				)}

				{this.props.isEdit && (
					<div>
						<Button color="success" onClick={this.toggle}>
							Edit Client
						</Button>
						<Modal isOpen={this.state.modal}>
							<form onSubmit={this.onUpdateHandle}>
								<ModalHeader>Edit Client</ModalHeader>
								<ModalBody>
									<>
										<Image
											name="avatarEdit"
											src={this.props.EditClient.avatar}
											roundedCircle
										/>

										<InputGroup className="mb-3">
											<InputGroup.Text id="basic-addon1">First</InputGroup.Text>
											<Form.Control
												name="firstNameEdit"
												defaultValue={this.props.EditClient.firstName}
												placeholder="FirstName"
												aria-label="FirstName"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>

										<InputGroup className="mb-3">
											<InputGroup.Text id="basic-addon1">Last</InputGroup.Text>
											<Form.Control
												name="lastNameEdit"
												defaultValue={this.props.EditClient.lastName}
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
												name="phoneNumberEdit"
												defaultValue={this.props.EditClient.phoneNumber}
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
												name="birthDateEdit"
												defaultValue={this.props.EditClient.birthDate}
												placeholder="Date of Birth"
												aria-label="Date Of Birth"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>

										<InputGroup className="mb-3">
											<Form.Control
												name="emailEdit"
												defaultValue={this.props.EditClient.email}
												placeholder="Email"
												aria-label="Email"
												aria-describedby="basic-addon2"
											/>
											<InputGroup.Text id="basic-addon2">
												@example.com
											</InputGroup.Text>
										</InputGroup>

										<Form.Select
											name="statusEdit"
											defaultValue={this.props.EditClient.status}
											aria-label="Default select example"
										>
											<option>Status</option>
											<option value="1">Lead</option>
											<option value="2">Interested</option>
											<option value="3">Trial</option>
											<option value="4">Customer</option>
										</Form.Select>
									</>
								</ModalBody>
								<ModalFooter>
									<input
										type="submit"
										value="Submit"
										color="primary"
										className="btn btn-primary"
									/>
									<Button color="danger" onClick={this.onCancelHandle}>
										Cancel
									</Button>
								</ModalFooter>
							</form>
						</Modal>
					</div>
				)}

				{!this.props.isForm && (
					<Button color="success" onClick={this.onAddHandle}>
						Add New Client
					</Button>
				)}
			</header>
		);
	}
}

export default PageHeader;
