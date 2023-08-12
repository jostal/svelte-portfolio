<script>
	import { RenderHTML } from 'svelte-render-md';
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

	:global(.rendered-html > table > tbody > tr > td) {
		max-width: 50%;
		padding: 0.5em;
		border: 1px solid #30363d;
	}

	:global(.rendered-html > table > tbody > tr > td > img) {
		max-width: 100%;
	}

	:global(.rendered-html > table) {
		border-collapse: collapse;
		border: 1px solid #30363d;
	}

	:global(.rendered-html a) {
		text-decoration: none;
		color: #c2d9ff;
	}

	div {
		width: 80%;
	}
</style>
