import { PUBLIC_API_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

// await new Promise((res) => setTimeout(() => res(), 3000));

export default class DB {
  constructor(_token) {
    this.token = _token;
    this.req = {};
  }

  collection = (collection) => {
    this.req.collection = collection;
    return this;
  };

  read = async (id) => {
    this.req = { ...this.req, method: "read", id };
    return this.fetchData();
  };

  readAll = async (option) => {
    this.req = { ...this.req, method: "readAll", ...option };
    return this.fetchData();
  };

  create = async (body) => {
    this.req = { ...this.req, method: "create", body };
    return this.fetchData();
  };

  update = async (id, body) => {
    this.req = { ...this.req, method: "update", id, body };
    return this.fetchData();
  };

  delete = async (id) => {
    this.req = { ...this.req, method: "delete", id };
    return this.fetchData();
  };

  login = async (username) => {
    this.req = { auth: "login", username };
    return this.fetchData();
  };

  resetPassword = async (id, body) => {
    this.req = {
      colletion: "user",
      method: "update",
      id,
      body: { ...body, password_reset: true },
    };
    return this.fetchData();
  };

  changePassword = async (id, body) => {
    this.req = {
      colletion: "user",
      method: "update",
      id,
      body: { ...body, password_reset: false, password_change: true },
    };
    return this.fetchData();
  };

  register = async (body) => {
    this.req = { colletion: "user", method: "create", body };
    return this.fetchData();
  };

  updateToken = async (id, username) => {
    this.req = { auth: "updateToken", id, username };
    return this.fetchData();
  };

  fetchData = async (params) => {
    try {
      let time = new Date().getTime().toString();

      if (params) this.req = params;
      this.req["token"] = this.token;
      console.log("req fetch-", this.req);
      const res = await fetch(
        `${PUBLIC_API_URL}?q=${JSON.stringify(this.req)}&t=${time}`
      );

      const respon = await res.json();
      if (respon.error) console.log("error fetch-", respon);
      return respon;
    } catch (err) {
      return error(400, err.message);
    }
  };
}
