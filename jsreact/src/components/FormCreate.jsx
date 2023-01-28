/** @format */

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { Component } from "react";

function FormCreate() {
	return (
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
				<InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
				<Form.Control
					placeholder="PhoneNumber"
					aria-label="Phonenumber"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>

			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Date Of Birth</InputGroup.Text>
				<Form.Control
					type="date"
					name="dob"
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
				<InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
			</InputGroup>

			<InputGroup className="mb-3">
				<InputGroup.Text>$</InputGroup.Text>
				<Form.Control aria-label="Amount (to the nearest dollar)" />
				<InputGroup.Text>.00</InputGroup.Text>
			</InputGroup>

			<InputGroup>
				<InputGroup.Text>With textarea</InputGroup.Text>
				<Form.Control as="textarea" aria-label="With textarea" />
			</InputGroup>
		</>
	);
}

export default FormCreate;
