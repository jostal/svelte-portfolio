<script>
  let techs = [
    { icon: "https://cdn.josephtalon.ca/images%2Fportfolio%2Ficons%2Freact.png", name: "React" },
    { icon: "https://cdn.josephtalon.ca/images%2Fportfolio%2Ficons%2Fsvelte.png", name: "Svelte(Kit)" },
    { icon: "https://cdn.josephtalon.ca/images%2Fportfolio%2Ficons%2Fnode.png", name: "Node" },
    { icon: "https://cdn.josephtalon.ca/images%2Fportfolio%2Ficons%2Frust.png", name: "Rust" },
    { icon: "https://cdn.josephtalon.ca/images%2Fportfolio%2Ficons%2Fsql.png", name: "SQL" },
  ];
</script>

<svelte:head>
  <title>About - Joseph Talon</title>
  <meta name="description" content="Joseph Talon is a Full-Stack Developer based in Guelph, Ontario who specializes in responsive design and accessibility." /> 
</svelte:head>

<main>
  <div id="wrapper">
    <div id="profile-container">
      <h1>Joseph Talon</h1>
      <div id="profile">
        <img src="https://cdn.josephtalon.ca/images%2FMyself%2FOptimized-profile.jpg" width="100%" alt="Joseph Talon" /> 
      </div>
      <div id="bio">
        <p>I am a full-stack developer based in Guelph, Ontario. I love working on making user-friendly and accessible applications so all users can enjoy a pleasant experience. Focusing on these aspects of development also has the benefit of providing excellent search engine optimization so websites and applications I work on can rank well on search engines.</p>

        <p>
          I have worked on many projects, both personal and professional which has left me very skilled in turning ideas into reality. It has also given me valuable experience with many technologies, abling me to select the best tools for the job. 
        </p>

        <p>
          I particularly enjoy working with web technologies. The existing web technologies make creating accessible applications a breeze leaving more energy to focus on other aspects of the application.
        </p>
      </div>
    </div>

    <div id="tech">
      <h2>Technologies</h2>
      {#each techs as tech}
        <div id="tech-item">
          <img src={tech.icon} alt="Tech icon" />
          <div>{tech.name}</div>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }

  #wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
  } 

  @media only screen and (min-width: 800px) {
    #wrapper {
      position: relative;
      display: grid;
      grid-template-areas: 
        "profile tech";
      grid-template-columns: 50% 50%;
    }

    #profile-container {
      grid-area: profile;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #tech {
      grid-area: tech;
      position: absolute;
      top: 0.5em;
      left: 50%;
    }
  }

  h1 {
    text-align: center;
  }

  #profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #profile {
    max-width: 300px;
    max-height: 300px;
    width: 55vw;
    height: 55vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0.1em solid #764831;
  }

  img {
    margin-bottom: 20%;
  }

  #tech-item {
    display: grid;
    grid-template-areas: 
      "icon name";
    grid-template-columns: 1.2em calc(100% - 1.2em);
    grid-gap: 1em;
    margin-bottom: 0.5em;
  }

  #tech-item > img {
    grid-area: icon;
    width: 1.2em;
    align-self: center;
  }

  #tech-item > div {
    grid-area: name;
    align-self: start;
    
  }
</style>
