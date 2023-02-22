<script>
  import Navbar from "../components/navbar/Navbar.svelte";
</script>

<Navbar />
<slot />

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
</style>
