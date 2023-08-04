<script lang="ts">
	import Post from '$lib/post.svelte';

	export let data;
</script>

<div class="margined">
	<h1>Latest Blog Posts</h1>

	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>

<style>
	.margined {
		width: min(80ch, 80%);
		margin: 0 auto;
		padding: 1em 0;
	}
</style>
