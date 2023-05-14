import { parseContent } from "svelte-render-md";

export async function load({ fetch }) {
  let xp = fetch('/work/experience.json')
    .then((response) => response.json());
  
  let projectFiles = await fetch('/work/projects/projects_list.json')
    .then((response) => response.json());

  let projects = [];

  for (const filename of projectFiles) {
    let path = '/work/projects/' + filename.file;
    let content = await fetch(path)
      .then((response) => response.text());
    projects.push(parseContent(content));
  }

  return {
    experience: xp,
    projects: projects 
  }
}
