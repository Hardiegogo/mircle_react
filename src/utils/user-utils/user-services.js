import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await axios.get("/api/users");
    if (res.status === 200) {
      return res.data.users;
    }
  } catch (error) {}
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const res = await axios.get(`/api/users/${id}`);
    if (res.status === 200) {
      return res.data.user;
    }
  } catch (error) {
    console.log("error occured", error);
  }
});
