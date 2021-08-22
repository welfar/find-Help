import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ManagerInfoFoundations from "./ManagerInfoFundations";

import { getAllFoundation } from "../store/selectFoundationReducer";

function ListFoundations() {
	const [foundation, setFoundation] = useState({
		name: "",
		phone: "",
		address: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllFoundation());
	}, []);

	const handleAssign = (foundation) => {
		setFoundation(foundation);
	};

	const { foundationList } = useSelector((state) => {
		return {
			foundationList: state.selectFoundationReducer.foundationList,
		};
	});

	const renderTable = () => {
		return (
			!!foundationList &&
			foundationList.length > 0 &&
			foundationList.map((foundation) => {
				return (
					<tr>
						<th>
							<input
								type="radio"
								name="foundationToAssign"
								onChange={() => handleAssign(foundation)}
							/>
						</th>
						<td>{foundation.name}</td>
						<td>{foundation.email}</td>
						<td>{foundation.phone}</td>
						<td>{foundation.address}</td>
					</tr>
				);
			})
		);
	};

	return (
		<>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Seleccione</th>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Telefono</th>
						<th>Dirección</th>
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
			</table>
			<ManagerInfoFoundations foundation={foundation} />
		</>
	);
}

export default ListFoundations;
