import Swal from "sweetalert2";
import {
	foundationRegister,
	updateFoundationProfilePic,
	foundationUpdate,
	getFoundationInfo,
	getFoundationList,
	destroyFoundation,
} from "./Foundation/Services";

export const CREATE_NEW_FOUNDATION = "CREATE_NEW_FOUNDATION";
export const ASSIGN_TO_UPDATE_FOUNDATION_PROFILE_PIC = "ASSIGN_TO_UPDATE_FOUNDATION_PROFILE_PIC";
export const SAVE_FOUNDATION_PROFILE_PIC = "SAVE_FOUNDATION_PROFILE_PIC";
export const UPDATE_FOUNDATION_PROFILE_INFO = "UPDATE_FOUNDATION_PROFILE_INFO";
export const GET_FOUNDATION_LIST = "GET_FOUNDATION_LIST";
export const GET_FOUNDATION = "GET_FOUNDATION";
export const REMOVE_FOUNDATION_DELETED = "REMOVE_FOUNDATION_DELETED";
export const ASSIGN_FOUNDATION_TO_UPDATE = "ASSIGN_FOUNDATION_TO_UPDATE";
export const ASSIGN_FOUNDATION_TO_DELETE = "ASSIGN_FOUNDATION_TO_DELETE";

export function createNewFoundation(name, email, phone, address, history) {
	return async function (dispatch) {
		try {
			const { data } = await foundationRegister(name, email, phone, address);
			if (data) {
				history.push("/FoundationsView");
			}
			dispatch({
				type: CREATE_NEW_FOUNDATION,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `Fundación ${name} has sido registrado satisfactoriamente!`,
				button: "OK",
			});
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				icon: "error",
				text: "Algo salio mal",
				button: "OK",
			});
			console.log(error.message);
		}
	};
}

export function assignToUpdateFoundationProfilePic(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_TO_UPDATE_FOUNDATION_PROFILE_PIC,
      payload: id,
    });
  };
}

export function updateImage(foundationToAssign, file) {
	return async function (dispatch) {
		try {
			const form_data = new FormData();
			if (file) {
				form_data.append("logo", file, file.name);
			}
      if (foundationToAssign) {
				form_data.append("foundationToAssign", foundationToAssign);
			}
			const { data } = await updateFoundationProfilePic(
				form_data
			);
			dispatch({
				type: SAVE_FOUNDATION_PROFILE_PIC,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `Tu Logo ha sido cargado satisfactoriamente!`,
				button: "OK",
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: "Alert",
				icon: "error",
				text: `Algo salió mal!`,
				button: "OK",
			});
		}
	};
}

export function updateFoundationProfileInfo(foundation, name, address, phone) {
	return async function (dispatch) {
		try {
			const { data } = await foundationUpdate(foundation, name, address, phone);
			dispatch({
				type: UPDATE_FOUNDATION_PROFILE_INFO,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `Tu información ha sido actualizada satisfactoriamente!`,
				button: "OK",
			});
		} catch (err) {
			console.log(err.message);
			Swal.fire({
				title: "Alert",
				icon: "error",
				text: `Algo salió mal!`,
				button: "OK",
			});
		}
	};
}

export function getAllFoundation() {
	return async function (dispatch) {
		try {
			const { data } = await getFoundationList();
			dispatch({
				type: GET_FOUNDATION_LIST,
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
}

export function getFoundation() {
	return async function (dispatch) {
		try {
			const { data } = await getFoundationInfo();
			dispatch({
				type: GET_FOUNDATION,
				payload: data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};
}

export function deleteFoundation(foundationToDelete) {
	return async function (dispatch) {
		try {
			const { data } = await destroyFoundation(foundationToDelete);
			dispatch({
				type: REMOVE_FOUNDATION_DELETED,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `La fundación fue eliminada satisfactoriamente!`,
				button: "OK",
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: "Alert",
				icon: "error",
				text: `Algo salió mal`,
				button: "OK",
			});
		}
	};
}

export function assignFoundationToUpdate(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_FOUNDATION_TO_UPDATE,
      payload: id,
    })
  }
}

export function assignFoundationToDelete(id) {
	return async function (dispatch) {
		dispatch({
			type: ASSIGN_FOUNDATION_TO_DELETE,
			payload: id,
		});
	};
}

const initialState = {
	foundation: {},
	foundationList: {},
  foundationToUpdate: "",
	foundationToDelete: "",
  foundationToAssign: ""
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_NEW_FOUNDATION: {
			return {
				...state,
				foundationList: state.foundationList.concat(action.payload),
			};
		}
    case ASSIGN_TO_UPDATE_FOUNDATION_PROFILE_PIC: {
      return {
        ...state,
        foundationToAssign: action.payload
      };
    }
		case SAVE_FOUNDATION_PROFILE_PIC: {
			return {
				...state,
        foundation: action.payload,
				foundationList: state.foundationList.map(
           (foundation) => foundation._id === action.payload._id ? action.payload : foundation
        ),
			};
		}
		case UPDATE_FOUNDATION_PROFILE_INFO: {
			return {
				...state,
				foundation: action.payload,
        foundationList: state.foundationList.map(
          (foundation) => foundation._id === action.payload._id ? action.payload : foundation
        )
			};
		}
		case GET_FOUNDATION_LIST: {
			return {
				...state,
				foundationList: action.payload,
			};
		}
		case GET_FOUNDATION: {
			return {
				...state,
				foundation: action.payload,
			};
		}
		case REMOVE_FOUNDATION_DELETED: {
			return {
				...state,
				foundationList: state.foundationList.filter(
					(foundation) => foundation._id !== action.payload._id
				),
			};
		}
    case ASSIGN_FOUNDATION_TO_UPDATE:{
      return {
        ...state,
        foundationToUpdate: action.payload,
      };
    }
		case ASSIGN_FOUNDATION_TO_DELETE: {
			return {
				...state,
				foundationToDelete: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
