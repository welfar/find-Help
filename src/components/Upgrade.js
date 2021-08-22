import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFoundationProfileInfo } from "../store/selectFoundationReducer";

function Upgrade({ foundation }) {
	const dispatch = useDispatch();

	const [name, setName] = useState(foundation.name);
	const [phone, setPhone] = useState(foundation.phone);
	const [address, setAddress] = useState(foundation.address);

	useEffect(() => {
		setName(foundation.name);
		setPhone(foundation.phone);
		setAddress(foundation.address);
	}, [foundation]);

	const handleUpdate = () => {
		dispatch(updateFoundationProfileInfo(foundation, name, phone, address));
	};

	const onSave = () => {
		const modalEl = document.getElementById("upgrade");
		const modal = window.bootstrap.Modal.getInstance(modalEl);
		modal.hide();
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleUpdate();
			}}
		>
			<div
				className="modal fade"
				id="upgrade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">
								Actualiza los datos de la fundación
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<label htmlFor="name" style={{ color: "black" }}>
								<strong> Nombre: </strong>
							</label>
							<input
								id="name"
								type="text"
								name="name"
								className="form-control"
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
							<label htmlFor="phone" style={{ color: "black" }}>
								<strong> Phone: </strong>
							</label>
							<input
								id="phone"
								type="text"
								name="phone"
								pattern="[0-9]+"
								className="form-control"
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
							/>
							<label htmlFor="address" style={{ color: "black" }}>
								<strong> Dirección: </strong>
							</label>
							<input
								id="address"
								type="text"
								name="address"
								className="form-control"
								onChange={(e) => setAddress(e.target.value)}
								value={address}
							/>
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
								disabled={name === "" && phone === "" && address === ""}
								onClick={onSave}
								className="btn btn-primary btn-sm"
							>
								Cargar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Upgrade;
