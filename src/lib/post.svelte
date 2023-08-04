<script lang="ts">
	export let post: any;
</script>

<a href={post.path}>
	<div class="post">
		<img src={post.meta.hero} alt={post.title + ' hero'} />
		<div class="meta">
			<small>{new Date(post.meta.date).toLocaleDateString()}</small>
			<h3>{post.meta.title}</h3>
			<div>{post.meta.summary}</div>
		</div>
	</div>
</a>

<style>
	.post {
		border: 1px solid #ddd;
		margin-bottom: 3em;
	}

	h3 {
		font-weight: bold;
		margin-bottom: 0.75em;
	}

	img {
		width: 100%;
	}

	.meta {
		padding: 1em 2em 2em;
	}

	small {
		color: #555;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		color: var(--primary-color);
	}
</style>
