import axios from "axios";

const instance = axios.create({
  baseURL: "https://aydym.com/api/v3/artist",
  headers: {
    "Content-Type": "application/json",
  },
});

export const aydymAPI = {
  getAll() {
    return instance.get("/").then((res) => res.data);
  },
  getOne(id) {
    return instance.get(`/${id}`).then((res) => res.data);
  },
};
