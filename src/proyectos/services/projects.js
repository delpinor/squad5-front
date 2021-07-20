import axios from "axios";
const URLBase = "https://project-squad5.herokuapp.com/api/";

export async function getProjects(q) {
  let response = await axios.get(`${URLBase}projects/?q=${q}`);
  let data = response.data.data;
  return data;
}

export async function getProjectById(id) {
  let response = await axios.get(`${URLBase}projects/${id}`);
  let data = response.data.data;
  return data;
}

export async function deleteProjecyById(idProject) {
  let response = await axios
    .delete(`${URLBase}projects/${idProject}/`)
    .catch((error) => {
      window.alert("Error 404: El elemento que intenta eliminar no existe.");
    });
}
