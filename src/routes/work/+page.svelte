<script>
  import { goto } from '$app/navigation';
  export let data;
</script>

<svelte:head>
  <title>Experience & Projects - Joseph Talon</title>
  <meta name="description" content="View the professional experience of Joseph Talon as well as key personal projects he has worked on." />
</svelte:head>

<main>
  <section id="experience">
    <h1>Experience</h1>
    {#each data.experience as xp}
      <div key={xp.name} class="experience">
        <img src={xp.icon} alt="Company logo" />
        <strong>{xp.name} - {xp.role}</strong>
        <em>{xp.dates}</em>
      </div>
        <ul class="responsibilities">
          {#each xp.responsibilities as resp, i}
            <li key={i}>{resp}</li>
          {/each}
        </ul>
    {/each}
  </section>
  <section id="projects">
    <h1>Projects</h1>
    {#each data.projects as proj}
      <div on:click={() => goto(`/work/${proj.frontmatter.name}`)} key={proj.frontmatter.name} class="project-preview">
        <h2>{proj.frontmatter.name}</h2>
        <p>{proj.frontmatter.description}</p>
        <ul>
          {#each proj.frontmatter.tech as t}
            <li key={t.name}>
              <img src={t.icon} alt="tech icon" />
              <div>{t.name}</div>
            </li>
          {/each}
        </ul>
        <img src="/icon-right-arrow.png" alt="View project" />
      </div>
    {/each}
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 800px) {
    main {
      display: grid;
      grid-template-areas: 
        "xp proj";
    }
  }
  h1 {
    text-align: center;
  }
  #experience {
    width: 80%;
    grid-area: xp;
    justify-self: center;
  }
  .experience {
    width: 100%;
    display: grid;
    grid-template-areas: 
      "icon name name"
      ". dates .";
    justify-content: start;
  }
  .experience > img {
    grid-area: icon;
    width: 2em;
    align-self: center;
    justify-self: end;
  }
  .experience > strong {
    grid-area: name;
    align-self: start;
    margin-left: 0.5em;
  }
  .experience > em {
    grid-area: dates;
    margin-left: 0.5em
  }
  .responsibilities {
    width: 80%;
    grid-area: responsibilities;
  }
  .responsibilities > li {
    margin-bottom: 1em;
  }

  #projects {
    width: 80%; 
    grid-area: proj;
    justify-self: center;
  }

  .project-preview {
    background-color: #764831;  
    padding: 1em;
    border-radius: 1em;
    cursor: pointer;
    display: grid;
    grid-template-areas: 
      "title ."
      "desc ."
      "tech arrow";
  }

  .project-preview:hover {
    -webkit-box-shadow:0px 0px 6px 0px rgba(18,23,22,0.9);
    -moz-box-shadow: 0px 0px 6px 0px rgba(18,23,22,0.9);
    box-shadow: 0px 0px 6px 0px rgba(18,23,22,0.9);
  }

  .project-preview > h2 {
    margin-top: 0;
    grid-area: title;
  }

  .project-preview > p {
    grid-area: desc;
    margin-top: 0;
  }

  .project-preview > ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding-left: 0;
    grid-area: tech;
  }

  .project-preview > ul > li {
    display: flex;
  }

  .project-preview > ul > li > img {
    width: 2em;
    margin-right: 0.3em;
  }
  
  .project-preview > img {
    width: 2em;
    grid-area: arrow;
    align-self: end;
  }
</style>
