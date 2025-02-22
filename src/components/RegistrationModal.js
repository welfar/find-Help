import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewFoundation } from "../store/selectFoundationReducer";

function RegistrationModal() {
	const [Name, setName] = useState("");
	const [Phone, setPhone] = useState("");
	const [Email, setEmail] = useState("");
	const [Address, setAddress] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const handleRegister = () => {
		dispatch(createNewFoundation(Name, Email, Phone, Address, history));
	};

  const onSave = () => {
		const modalEl = document.getElementById("foundationRegistration");
		const modal = window.bootstrap.Modal.getInstance(modalEl);
		modal.hide();
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleRegister();
			}}
		>
			<div
				className="modal fade"
				role="dialog"
				Style="z-index: 1400 display: block"
				id="foundationRegistration"
				data-backdrop="static"
				tabIndex="-1"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Registro para Fundaciones</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div>
								<label htmlFor="Name">
									<strong> *Nombre: </strong>
								</label>
								<input
									required
									autoFocus
									id="Name"
									type="text"
									name="Name"
									className="form-control"
									onChange={(e) => setName(e.target.value)}
									value={Name}
								/>
								<label htmlFor="Email">
									<strong> *Correo: </strong>
								</label>
								<input
									required
									id="Email"
									type="text"
									name="email"
									className="form-control"
									placeholder="example@email.com"
									onChange={(e) => setEmail(e.target.value)}
									value={Email}
								/>
								<label htmlFor="Phone">
									<strong> *Telefono: </strong>
								</label>
								<input
									required
									id="Phone"
									type="text"
									name="Phone"
									className="form-control"
									pattern="[0-9]+"
									onChange={(e) => setPhone(e.target.value)}
									value={Phone}
								/>
								<label htmlFor="Address">
									<strong> *Dirección: </strong>
								</label>
								<input
									required
									id="Address"
									type="text"
									name="Address"
									className="form-control"
									onChange={(e) => setAddress(e.target.value)}
									value={Address}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary btn-sm"
								data-bs-dismiss="modal"
							>
								Cancelar
							</button>
							<button
								type="submit"
								disabled={Email === ""}
								className="btn btn-primary btn-sm"
                onClick={onSave}
							>
								Registrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default RegistrationModal;
