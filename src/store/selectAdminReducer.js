import Swal from "sweetalert2";
import { adminSignIn, registrateNews, getNewsList, destroyNews } from "./admin/services";

export const ADMIN_SIGN_IN = "ADMIN_SIGN_IN";
export const CREATE_NEW = "CREATE_NEW";
export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const ASSIGN_NEW_TO_DELETE = "ASSIGN_NEW_TO_DELETE";
export const REMOVE_NEW_DELETED = "REMOVE_NEW_DELETED";


export function accessAdmin(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await adminSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/AdminView");
      }
      dispatch({
        type: ADMIN_SIGN_IN,
        payload: data.admin,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function uploadNews(file) {
	return async function (dispatch) {
		try {
			const form_data = new FormData();
			if (file) {
				form_data.append("news", file, file.name);
			}
			const { data } = await registrateNews(form_data);
			dispatch({
				type: CREATE_NEW,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `La lista de noticias se ha actualizado satisfactoriamente!`,
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

export function getAllNews() {
	return async function (dispatch) {
		try {
			const { data } = await getNewsList();
			dispatch({
				type: GET_NEWS_LIST,
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
}

export function assignNewsToDelete(id) {
	return async function (dispatch) {
		dispatch({
			type: ASSIGN_NEW_TO_DELETE,
			payload: id,
		});
	};
}

export function deleteNews(newsToDelete) {
	return async function (dispatch) {
		try {
			const { data } = await destroyNews(newsToDelete);
			dispatch({
				type: REMOVE_NEW_DELETED,
				payload: data,
			});
			Swal.fire({
				title: "Confirmation",
				icon: "success",
				text: `La imagen ha sido eliminada satisfactoriamente!`,
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

const initialState = {
  admin: {},
	newsList: {},
	newsToDelete: "",
};

function reducer(state = initialState, action) {
	switch (action.type) {
    case ADMIN_SIGN_IN: {
      return {
        ...state,
        admin: action.payload,
      };
    }
		case CREATE_NEW: {
			return {
				...state,
				newsList: state.newsList.concat(action.payload),
			};
		}
		case GET_NEWS_LIST: {
			return {
				...state,
				newsList: action.payload,
			};
		}
		case REMOVE_NEW_DELETED: {
			return {
				...state,
				newsList: state.newsList.filter(
					(news) => news._id !== action.payload._id
				),
			};
		}
		case ASSIGN_NEW_TO_DELETE: {
			return {
				...state,
				newsToDelete: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;

