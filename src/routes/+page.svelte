
<svelte:head>
  <title>Joseph Talon</title>
  <meta name="description" content="Joseph Talon is a full-stack developer based in Guelph, Ontario with a focus on accessibility"/>
</svelte:head>

<main>
  <div>
    <h1>Joseph Talon</h1>
    <h2>Full-Stack Developer</h2>
    <p>
      I am a full-stack developer focus on creating friendly and usable apps. Creating both responsive and accessible
      apps is very important to me so all users can enjoy a pleasant experience.
    </p>
    <button><a href="/contact">Contact Me</a></button>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
  :global(html, body) {
      margin: 0;
      padding: 0;
      background-color: #a96346;
      color: #fffff7;
      font-family: 'Roboto Slab', serif;
      line-height: 1.8;
  }

  main {
      display: flex;
      justify-content: center;
  }

  div {
      width: 80%;
      margin-top: 2em;
  }

  @media only screen and (min-width: 800px) {
      div {
          min-width: 500px;
          max-width: 530px;
          width: 40%;
      }
  }

  h1 {
      color: #fef5eb;
  }

  h2 {
      color: #fef5eb;
  }

  button {
      background-color: #db6d39;
      border: none;
      border-radius: 0.5em;
      padding: 0.5em;
      font-size: 1em;
      color: #fffff7;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
</style>