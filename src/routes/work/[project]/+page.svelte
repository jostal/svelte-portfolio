<script>
  import { RenderHTML } from "svelte-render-md"
  export let data;
</script>

<main>
  <div> 
    <RenderHTML mdString={data.content.content} />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }

  div {
    width: 80%;
  }
</style>
