<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";

  let screenWidth;
  let isMobile;
  $: isMobile = screenWidth < 800;

  let links = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/work', name: 'Experience & Projects' },
    { href: 'https://medium.com/@josephtalon', name: 'Blog' },
    { href: '/contact', name: 'Contact' },
  ];

  let open;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section id="navbar">
  {#if isMobile}
    <Hamburger
      bind:open
      --color="white"
    />
    <Menu bind:open />
  {:else}
    <nav>
      {#each links as link}
        <a href={link.href}>{link.name}</a>
      {/each}
    </nav>
  {/if}

  <a id="github" href="https://github.com/jostal/"><img src="github-logo.svg" /></a>
</section>

<style>
  nav {
      display: flex;
      justify-content: center;
      gap: 1.5em;
      padding: 1em;
  }

  a {
      text-decoration: none;
      color: inherit;
      font-size: 1.2em;
  }

  a:hover {
      text-decoration: underline;
      text-underline-color: #db6d39;
  }

  #github {
      position: absolute;
      right: 0.5em;
      top: 0.5em;
  }

  @media only screen and (min-width: 800px) {
      #github {
          right: 1em;
          top: 1em;
      }
  }
</style>