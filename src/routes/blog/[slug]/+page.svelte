<script lang="ts">
	export let data;
</script>

<div class="blog-post-content">
	<img src={data.hero} alt="hero" />
	<div>
		<h1>{data.title}</h1>
		<small>{new Date(data.date).toLocaleDateString()}</small>
	</div>

	<svelte:component this={data.content} />
</div>

<style>
	.blog-post-content {
		padding: 0 2em;
	}

	small {
		display: block;
		margin-top: -1em;
		color: #555;
	}

	:global(.blog-post-content img) {
		width: 100%;
	}

	:global(.blog-post-content .icon-link) {
		position: relative;
	}

	:global(.blog-post-content .icon-link::before) {
		content: '#';
		position: absolute;
		font-size: 1.1em;
		left: -1.4ch;
		line-height: 1;
		opacity: 0;
		text-decoration: underline;
	}

	:global(.blog-post-content h2:hover .icon-link::before),
	:global(.blog-post-content h3:hover .icon-link::before),
	:global(.blog-post-content h4:hover .icon-link::before),
	:global(.blog-post-content h5:hover .icon-link::before) {
		opacity: 1;
	}
</style>
