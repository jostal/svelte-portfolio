import { parseContent } from "svelte-render-md";

export async function load({ params, fetch }) {
  let projects = await fetch(`/work/projects/projects_list.json`)
    .then((response) => response.json());

  let proj_file;
  Array.from(projects).forEach(async project => {
    if (project.name === params.project) {
      proj_file = project.file;
    }
  })

  let proj = await fetch(`/work/projects/${proj_file}`)
    .then((response) => response.text());

  return {
    name: params.project,
    content: parseContent(proj)
  }
}
