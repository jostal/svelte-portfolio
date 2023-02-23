<script>
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

  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
  }

  #experience {
    width: 80%;
  }
  .experience {
    width: 100%;
    display: grid;
    grid-template-areas: 
      "icon name name"
      ". dates .";
  }

  .experience > img {
    grid-area: icon;
    width: 2em;
    align-self: center;
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
    grid-area: responsibilities;
  }
</style>
