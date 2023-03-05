
<svelte:head>
  <title>Contact - Joseph Talon</title>
  <meta name="description" content="Contact Joseph Talon with any questions or about any potential work" /> 
</svelte:head>

<main>
  <h1>Contact Me</h1>
  <label for="email">Email</label>
  <a name="email" href="mailto:josephtalon01@gmail.com">josephtalon01@gmail.com</a>
  <label for="linkedin">LinkedIn</label>
  <a name="linkedin" href="https://linkedin.ca/in/jostal">linkedin.ca/in/jostal</a>
  <label for="git">GitHub</label>
  <a name="git" href="https://github.com/jostal">github.com/jostal</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    font-size: 1.3em;
    font-weight: bold;
  }
  a {
    margin-bottom: 1em;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    transform: scale(1.1);
  }
</style>
