import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutFailed,
  logoutSuccess,
} from "./authSlice";
import { getPostsStart, getPostsFailed, getPostsSuccess } from "./postSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    //api login failed nhung van respond code 201 nen phai check
    if (!res.data.hasOwnProperty("code")) {
      dispatch(loginSuccess(res.data));
      navigate("/");
    } else {
      dispatch(loginFailed());
      alert("Error!");
    }
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const getAllPosts = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.get("/posts", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const getFilterTitlePosts = async (
  accessToken,
  value,
  dispatch,
  axiosJWT
) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.get(`/posts?title=${value}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const delPosts = async (accessToken, value, dispatch, axiosJWT) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.delete(`/posts/${value}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const createPosts = async (accessToken, value, dispatch, axiosJWT) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.post("/posts", value, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const editPosts = async (accessToken, value, dispatch, axiosJWT) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.patch(`/posts/${value}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const getPostsByPage = async (
  accessToken,
  value,
  dispatch,
  axiosJWT
) => {
  dispatch(getPostsStart());
  try {
    const res = await axiosJWT.get(`/posts?page=${value}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailed());
  }
};

export const logoutUser = async (accessToken, dispatch, axiosJWT) => {
  dispatch(logoutStart());
  try {
    await axiosJWT.delete("/auth/logout", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    await dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailed());
  }
};
