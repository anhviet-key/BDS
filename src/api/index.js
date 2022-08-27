/** @format */

import axios from "axios";

export const productConfig = () =>
  axios.get("https://data-api-json.herokuapp.com/api/products");
export const productId = (productId) =>
  axios.get(`https://data-api-json.herokuapp.com/api/products/${productId}`);
export const projectConfig = () => axios.get("http://localhost:3000/project");
export const projectId = (projectId) =>
  axios.get(`https://data-api-json.herokuapp.com/api/${projectId}`);
