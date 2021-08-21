import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImage } from "../store/selectFoundationReducer";

function UpdateFoundationProfilePic() {
	const dispatch = useDispatch();
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);

	const selectImage = (e) => {
		setFile(e.target.files[0]);
		generatePreview(e.target.files[0]);
	};

	const generatePreview = (file) => {
		const result = URL.createObjectURL(file);
		setImage(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateImage(file));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div
					className="modal fade"
					role="dialog"
					Style="z-index: 1600"
					id="FoundationProfilePicUpdate"
					data-bs-backdrop="static"
					tabIndex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">
									Carga el logo de la fundación
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<div className="modal-dialog modal-dialog-scrollable"></div>
								<input
									type="file"
									id="file"
									onChange={selectImage}
									accept="image/*"
								/>
								<div className="imgContainer">
									{image && <img src={image} alt="preview" />}
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
									className="btn btn-primary btn-sm"
									img
									data-bs-target="#foundationRegistration"
									data-bs-toggle="modal"
									data-bs-dismiss="modal"
									onClick={(e) => setImage(null)}
								>
									Cargar
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default UpdateFoundationProfilePic;
