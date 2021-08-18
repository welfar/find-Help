import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { accessAdmin } from "../store/selectAdminReducer";

function AccessModal() {
	const dispatch = useDispatch();
  const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = (e) => {
    e.preventDefault();
		dispatch(accessAdmin(email, password, history));
	};

	return (
		<form
			onSubmit={handleSignIn}
		>
			<div
				className="modal fade"
				id="accessAdmin"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="staticBackdropLabel"
							>
								Ingreso Administrativo
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									autoFocus
									id="email"
									type="text"
									name="email"
									placeholder="example@email.com"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									className="form-control"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									id="password"
									type="password"
									disabled={email === ""}
									className="form-control"
									name="password"
                  onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="submit" className="btn btn-primary">
								Ingresar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default AccessModal;
