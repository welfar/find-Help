import { useSelector, useDispatch } from "react-redux";
import Upgrade from "./Upgrade";
import { deleteFoundation } from "../store/selectFoundationReducer";

function ManagerInfoFoundations() {
	const dispatch = useDispatch();

	const { foundationToDelete } = useSelector((state) => {
		return {
			foundationToDelete: state.selectFoundationReducer.foundationToDelete,
		};
	});

	const handleDelete = () => {
		dispatch(deleteFoundation(foundationToDelete));
	};

	return (
		<div>
			<div className="dualButton">
				<div className="buttonManager">
					<button
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#upgrade"
						className="btn btn-primary btn-sm"
					>
						Actualizar
					</button>
				</div>
				<div className="buttonManager">
					<button
						type="button"
						className="btn btn-primary btn-sm"
						onClick={handleDelete}
					>
						Eliminar
					</button>
				</div>
			</div>
			<Upgrade />
		</div>
	);
}

export default ManagerInfoFoundations;
