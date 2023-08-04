<script lang="ts">
	import Post from '$lib/post.svelte';

	export let data;
</script>

<div class="margined">
	<h1>Selah Ministries</h1>
	<h2>Faith Journey</h2>
</div>

<img src="hero.jpg" alt="Hero of Jesus walking on water" />

<div class="margined">
	<h2>Selah Ministries Blog</h2>

	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 0;
		font-size: 1.75em;
		font-weight: bold;
	}
	h1 + h2 {
		margin-top: 0;
	}
	img {
		width: 100%;
		margin-bottom: 3em;
	}

	.margined {
		width: min(80ch, 80%);
		margin: 0 auto;
		padding: 1em 0;
	}
</style>
