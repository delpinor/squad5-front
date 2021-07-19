const URLBase = "https://project-squad5.herokuapp.com/api/";

export async function getProjects(q) {
  const response = await fetch(`${URLBase}projects/?q=${q}`);
  const jsonData = await response.json();
  return jsonData.data;
}

export async function getProjectById(id) {
  const response = await fetch(`${URLBase}projects/${id}`);
  const jsonData = await response.json();
  return jsonData.data;
}
