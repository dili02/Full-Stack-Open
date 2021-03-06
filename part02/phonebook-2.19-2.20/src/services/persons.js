/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const create = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const update = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person);
  return request.then((response) => response.data);
};

export default {
  create,
  getAll,
  deletePerson,
  update,
};
