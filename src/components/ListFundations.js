import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ManagerInfoFoundations from "./ManagerInfoFundations";
import { getAllFoundation, assignToUpdateFoundationProfilePic } from "../store/selectFoundationReducer";

function ListFoundations() {
  const [checkedValue, setIsChecked] = useState(null)
	const [foundation, setFoundation] = useState({
		name: "",
		phone: "",
		address: "",
    logo: ""
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllFoundation());
	}, []);

  const handleSelect = (id) => {
    setIsChecked(id);
    dispatch(assignToUpdateFoundationProfilePic(id))
  }

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
                id={foundation._id}
                value={foundation._id}
								name="foundationToAssign"
								onChange={(e) => {
                  handleSelect(e.target.value);
                  handleAssign(foundation);
                }}
							/>
						</th>
            <td>
              <div className="port">
                <img
                  src={foundation.logo}
                  alt="logo"
                  className="improf rounded-circle"
                  width="100"
                />
              </div>
            </td>
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
            <th>Logo</th>
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
