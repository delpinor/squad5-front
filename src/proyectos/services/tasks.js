import axios from "axios";

const URLBase = "https://project-squad5.herokuapp.com/api/";

export async function getTasks(idProject, q) {
  let response = await axios.get(
    `${URLBase}projects/${idProject}/tasks/?q=${q}`
  );
  let data = response.data;
  return data;
}

export async function getTaskById(idProject, idTask) {
  let response = await axios.get(
    `${URLBase}projects/${idProject}/tasks/${idTask}`
  );
  let data = response.data;
  return data;
}

export async function deleteTaskById(idProject, idTask) {
  let response = await axios
    .delete(`${URLBase}projects/${idProject}/tasks/${idTask}`)
    .catch((error) => {
      window.alert("Error 404: El elemento que intenta eliminar no existe.");
    });
}
