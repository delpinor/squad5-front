const URLBase = "https://project-squad5.herokuapp.com/api/";

export async function getTasks(idProject, q) {
  const response = await fetch(`${URLBase}projects/${idProject}/tasks/?q=${q}`);
  const jsonData = await response.json();
  return jsonData;
}

export async function getTaskById(idProject, idTask) {
  const response = await fetch(
    `${URLBase}projects/${idProject}/tasks/${idTask}`
  );
  const jsonData = await response.json();
  return jsonData;
}
