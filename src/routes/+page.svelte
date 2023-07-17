<script lang="ts">
	export let data;
</script>

<h1>Sig's Blog</h1>

<main>
	{#each data.posts as post}
		<a href={post.path}>
			<div class="post">
				<div>{post.meta.title}</div>
				<div>{post.meta.date}</div>
			</div>
		</a>
		<div />
	{/each}
</main>

<style>
	.post {
		background-color: aliceblue;
		padding: 1em;
		border-radius: 1em;
		margin-bottom: 1em;
	}

	a {
		text-decoration: none !important;
		color: black;
	}
</style>
