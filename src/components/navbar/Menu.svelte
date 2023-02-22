<script>
  import { fly, scale } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

  let links = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/work', name: 'Experience & Projects' },
    { href: 'https://medium.com/@josephtalon', name: 'Blog' },
    { href: '/contact', name: 'Contact' },
  ];

  export let open;
</script>

{#if open}
  <div>
    {#each links as link, i}
      <p transition:fly = {{ y: -15, delay: 50 * i }}>
        <a on:click={() => open = false} href={link.href}>{link.name}</a>
      </p>
    {/each}
  </div>

  <hr transition:scale = {{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
    div {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 0 1em 1em;
        color: #eef;
    }

    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    hr {
        color: #fffff7;
        width: 95%;
    }
</style>
