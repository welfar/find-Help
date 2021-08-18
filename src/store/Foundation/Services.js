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

export async function foundationUpdate(
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