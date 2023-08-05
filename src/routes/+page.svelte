<script lang="ts">
	import Post from '$lib/post.svelte';

	export let data;
</script>

<div class="margined">
	<h1>Selah Ministries</h1>
	<h2>Faith Journey</h2>
</div>

<img src="hero.jpg" alt="Hero of Jesus walking on water" />

<h2 class="margined">Selah Ministries Blog</h2>

<div class="posts">
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

	.margined,
	.posts {
		width: min(80ch, 80%);
		margin: 0 auto;
		padding: 1em 0;
	}

	@media (min-width: 121ch) {
		.posts {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2em;
		}
	}
</style>
