<script lang="ts">
	export let data;
</script>

<h1>Selah Ministries</h1>
<h2>Faith Journey</h2>

<img src="hero.jpg" alt="Hero of Jesus walking on water" />

{#each data.posts as post}
	<a href={post.path}>
		<div class="post">
			<div>{post.meta.title}</div>
			<div>{post.meta.date}</div>
		</div>
	</a>
	<div />
{/each}

<br />

<style>
	h1 {
		margin-bottom: 0;
		font-size: 1.75em;
	}
	h2 {
		margin-top: 0;
	}
	img {
		width: 100%;
	}

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
