import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFoundationProfileInfo } from "../store/selectFoundationReducer";

function Upgrade() {
  const dispatch = useDispatch();

  const { foundation } = useSelector((state) => {
    return {
      foundation: state.selectAdminReducer.foundation,
    };
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
 

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateFoundationProfileInfo(name, email, phone, address)
    );
  };

  return (
    <form onSubmit={handleUpdate}>
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
              <h5
                className="modal-title"
                id="staticBackdropLabel"
              >
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
                // placeholder={foundation.name}
                id="name"
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="email" style={{ color: "black" }}>
                <strong> Correo: </strong>
              </label>
              <input
                // placeholder={foundation.email}
                id="email"
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="phone" style={{ color: "black" }}>
                <strong> Phone: </strong>
              </label>
              <input
                // placeholder={foundation.phone}
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
                // placeholder={foundation.address}
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
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  name === "" &&
                  email === "" &&
                  phone === "" &&
                  address === ""
                }
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
