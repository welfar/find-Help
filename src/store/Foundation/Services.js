import axios from "axios";

export async function foundationRegister(
  name,
  email,
  address,
  phone
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/create",
    data: {
      name,
      email,
      address,
      phone
    },
  });
}

export async function updateFoundationProfilePic (token, data) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationsProfilePic",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function foundationUpdate(
  token,
  name,
  email,
  address,
  phone
) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Foundations/foundationUpdate",
    data: {
      name,
      email,
      address,
      phone
    },
    headers: {
      Authorization: `Bearer ${token}`,
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