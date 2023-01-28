/** @format */

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import * as ReactBootStrap from "react-bootstrap";

class ShowCustomers extends Component {
	onDeleteHandle(clientIndex) {
		this.props.DeleteClient(clientIndex);
	}

	onEditHandle(clientIndex) {
		this.props.EditClient(clientIndex);
	}

	render() {
		return (
			<ReactBootStrap.Table className="table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Avatar</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Phone Number</th>
						<th scope="col">Email</th>
						<th scope="col">Birth Date</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>

				{this.props.Clients.map((client, index) => (
					<React.Fragment key={index}>
						<tbody>
							<tr>
								<td>
									<div>{(client.index = index + 1)}</div>
								</td>
								<td>
									<div>
										<img src={client.avatar} height="50px" alt="Avatar" />
									</div>
								</td>
								<td>
									<div>{client.firstName}</div>
								</td>
								<td>
									<div>{client.lastName}</div>
								</td>
								<td>
									<div>{client.phoneNumber}</div>
								</td>
								<td>
									<div>{client.email}</div>
								</td>
								<td>
									<div>{client.birthDate}</div>
								</td>
								<td>
									<div>{client.status}</div>
								</td>
								<td className="user_actions">
									<div>
										<button
											className="btn btn-outline-secondary"
											onClick={this.onEditHandle.bind(this, client.index)}
										>
											Edit
										</button>
										<button
											className="btn btn-outline-danger"
											onClick={this.onDeleteHandle.bind(this, client.index)}
										>
											Delete
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</React.Fragment>
				))}
			</ReactBootStrap.Table>
		);
	}
}

export default ShowCustomers;
