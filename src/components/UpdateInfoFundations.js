import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllFoundation,
  assignFoundationToDelete,
} from "../store/selectFoundationReducer";

function UpdateInfoFoundations() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoundation());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignFoundationToDelete(id));
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
                name="foundationToDelete"
                value={foundation._id}
                onChange={(e) => handleDelete(e.target.value)}
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
    <table className="table">
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
  );
}

export default UpdateInfoFoundations;
