import axios from "axios";
const dataURL = "https://phonebook-backend-uorw.onrender.com/api/persons";

const getData = () => {
  return axios.get(dataURL);
};

const postData = (arrayName) => {
  return axios.post(dataURL, arrayName);
};

const deletePerson = (id) => {
  return axios.delete(`${dataURL}/${id}`);
};

const update = (id, newObject) => {
  return axios.put(`${dataURL}/${id}`, newObject);
};

export default {
  getData: getData,
  postData: postData,
  deletePerson: deletePerson,
  update: update,
};
