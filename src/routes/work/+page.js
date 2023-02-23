export function load({ fetch }) {
  let xp = fetch('/work/experience.json')
    .then((response) => response.json());

  return {
    experience: xp,
  }
}
