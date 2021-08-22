import { useDispatch } from "react-redux";
import { deleteFoundation } from "../store/selectFoundationReducer";
import Upgrade from "./Upgrade";

function ManagerInfoFoundations({foundation}) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteFoundation(foundation._id));
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
			<Upgrade foundation={foundation}/>
		</div>
	);
}

export default ManagerInfoFoundations;
