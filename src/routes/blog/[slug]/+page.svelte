<script lang="ts">
	export let data;
</script>

<div>
	<h1>{data.title}</h1>
	<data value={data.date}>{data.date}</data>
</div>

<br />

<svelte:component this={data.content} />

<style>
	h1 {
		margin-top: 0;
	}
	div {
		background-color: lightgray;
		padding: 1em;
		border-radius: 1em;
	}
</style>
