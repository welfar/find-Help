import axios from "axios";

export async function foundationRegister(
  name,
  email,
  phone,
  address
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/create",
    data: {
      name,
      email,
      phone,
      address
    },
  });
}

export async function updateFoundationProfilePic (data) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationsProfilePic",
    data,
    headers: {
			"Content-Type": "multipart/form-data",
		},
  });
}

export async function foundationUpdate(
  foundationId,
  name,
  phone,
  address
) {
  console.log("services")
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationUpdate",
    data: {
      foundationId,
      name,
      phone,
      address
    },
  });
}

export async function getFoundationList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationsList",
  });
}

export async function getFoundationInfo() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationInfo",
  });
}

export async function destroyFoundation(foundationId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationDelete",
    data: { foundationId },
  });
}