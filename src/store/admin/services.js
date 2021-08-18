import axios from "axios";

export async function adminSignIn(email, password) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/Admin/signin",
    data: {
      email,
      password,
    },
  });
}

export async function registrateNews(data) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/News/create",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getNewsList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/News/newsList",
  });
}

export async function destroyNews(newsId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/News/delete",
    data: { newsId },
  });
}
