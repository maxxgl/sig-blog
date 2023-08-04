<script lang="ts">
	export let data;
</script>

<div class="content">
	<img src={data.hero} alt="hero" />
	<div>
		<h1>{data.title}</h1>
		<small>{new Date(data.date).toLocaleDateString()}</small>
	</div>

	<svelte:component this={data.content} />
</div>

<style>
	.content {
		padding: 0 2em;
	}

	img {
		width: 100%;
	}

	small {
		display: block;
		margin-top: -1em;
		color: #555;
	}
</style>
