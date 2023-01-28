/** @format */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FormPopupEditFun(props) {
	//const [index, setIndex] = useState(props.clients.index);
	//const [avatar, setAvatar] =  useState(props.clients.avatar);
	const [firstName, setFirstName] = React.useState(props.firstName);
	const [lastName, setLastName] = useState(props.lastName);
	const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
	const [email, setEmail] = useState(props.email);
	const [birthDate, setBirthDate] = useState(props.birthDate);
	const [isOpen, setIsOpen] = useState(false);

	const handleShow = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	function handleFirstNameChange (e){
		setFirstName(e.target.firstName);
	}

	function handleLastNameChange (e){
		setLastName(e.target.lastName);
	}

	function handlePhoneNumberChange (e){
		setPhoneNumber(e.target.phoneNumber);
	}

	function handleBirthDateChange (e){
		setBirthDate(e.target.birthDate.value);
	}

	function handleEmailChange (e){
		setEmail(e.target.email);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
	}
	return (
		<div>
			<Button color="success" onClick={handleShow}>
				Edit Client
			</Button>
			<Modal isOpen={isOpen} onClose={handleClose}>
				<form onSubmit={handleSubmit}>
					<ModalHeader>Edit Client Form</ModalHeader>
					<ModalBody>
						<>
							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1">First</InputGroup.Text>
								<Form.Control className="firstName"
									name="firstName"
									defaultValue={firstName}
									onChange={handleFirstNameChange}
									aria-label="FirstName"
									aria-describedby="basic-addon1"
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1">Last</InputGroup.Text>
								<Form.Control
									name="lastName"
									defaultValue={lastName}
									onChange={handleLastNameChange}
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
									defaultValue={phoneNumber}
									onChange={handlePhoneNumberChange}
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
									defaultValue={birthDate}
									onChange={handleBirthDateChange}
									aria-label="Date Of Birth"
									aria-describedby="basic-addon1"
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<Form.Control
									name="email"
									defaultValue={email}
									onChange={handleEmailChange}
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
						<Button color="danger" onClick={handleClose}>
							Cancel
						</Button>
					</ModalFooter>
				</form>
			</Modal>
		</div>
	);
}

export default FormPopupEditFun;
