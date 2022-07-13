import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container-fluid">
			<div className="container">
				<div>
					<h2 className="text-center mb-5 shadow-sm p-3">Hubungi Kami</h2>
				</div>
				<div className="row">
					<div className="col-md-7 shadow rounded p-5">
						<div className="row">
							<div className="col mb-3">
								<label className="form-label">First Name</label>
								<input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" />
							</div>
							<div className="col mb-3">
								<label className="form-label">Last Name</label>
								<input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" />
							</div>
						</div>
						<div className="mb-3">
							<div className="col mb-3">
								<label className="form-label">Email</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="form-control"
									placeholder="Email"
									required
								/>
							</div>
							<div className="col mb-3">
								<label className="form-label">Subject</label>
								<input type="text" name="firstName" id="firstName" className="form-control" placeholder="Subject" />
							</div>
							<div className="col mb-1">
								<label className="form-label">Message</label>
								<textarea className="form-control" placeholder="Message" rows={3} />
							</div>
						</div>
						<Button variant="primary" onClick={handleShow}>
							Submit
						</Button>

						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>Modal heading</Modal.Title>
							</Modal.Header>
							<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Button variant="primary" onClick={handleClose}>
									Save Changes
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<div className="col-md-5 shadow rounded p-5">
						<div className="col mb-3">
							<label className="form-label">Nama Badan Usaha</label>
							<input
								type="text"
								name="firstName"
								id="firstName"
								className="form-control"
								placeholder="Nama Perusahaan"
							/>
						</div>
						<div className="col mb-3">
							<label className="form-label">No. NPWP</label>
							<input type="text" name="firstName" id="firstName" className="form-control" placeholder="Nomer NPWP" />
						</div>
						<div className="col mb-3">
							<label className="form-label">Jenis Usaha</label>
							<input type="text" name="firstName" id="firstName" className="form-control" placeholder="Jenis Usaha" />
						</div>
						<div className="col mb-3">
							<label className="form-label">Alamat Perusahaan</label>
							<textarea
								type="text"
								name="firstName"
								id="firstName"
								className="form-control"
								placeholder="Alamat Perusahaan"
								rows={3}
							/>
						</div>
						<div className="col mb-3">
							<label className="form-label">Email</label>
							<input type="text" name="firstName" id="firstName" className="form-control" placeholder="Jenis Usaha" />
						</div>
						<div className="col mb-3">
							<label className="form-label">No Telepon</label>
							<input type="text" name="firstName" id="firstName" className="form-control" placeholder="Jenis Usaha" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
