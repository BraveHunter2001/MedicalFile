import axios from "axios";
import { BACK_URL } from "./constants";

const invokeAsync = async (onSendRequest) => {
  let response = null;
  let error = null;

  try {
    response = await onSendRequest();
  } catch (err) {
    error = err;
  }

  return {
    isOk: error === null,
    data: response?.data,
    error: error,
  };
};

export const getAsync = async (url) =>
  invokeAsync(async () => await axios.get(BACK_URL + url));

export const postAsync = async (url, body) =>
  invokeAsync(async () => await axios.post(BACK_URL + url, body));

export const patchAsync = async (url, body) =>
  invokeAsync(async () => await axios.patch(BACK_URL + url, body));
