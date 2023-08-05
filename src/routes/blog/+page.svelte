<script lang="ts">
	import Post from '$lib/post.svelte';

	export let data;
</script>

<h1 class="margined">Latest Blog Posts</h1>

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
		/* 
		@media (min-width: 160ch) {
			.posts {
				grid-template-columns: repeat(3, 1fr);
			}
		} */
	}
</style>
