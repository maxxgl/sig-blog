<header>
	<a href="/" class="home-link">Selah Ministries</a>
	<a href="/blog">Blog</a>
	<a href="/about">About</a>
	<a href="/">Contact</a>
</header>

<main>
	<slot />
</main>

<footer>©️ {new Date().getFullYear()} Selah Ministries</footer>

<style>
	header,
	footer {
		display: flex;
		padding: 1em;
		background-color: var(--primary-color);
		color: white;
	}

	header {
		position: sticky;
		top: 0;
	}

	.home-link {
		font-family: 'Playfair Display', serif;
	}

	main {
		width: min(100ch, 100%);
		margin: 0 auto;
		padding: 1em 0;
	}

	footer {
		justify-content: center;
		margin-top: 2em;
	}

	header > a {
		color: white;
		text-decoration: none;
		margin-right: 1em;
	}

	header > a:first-of-type {
		margin-right: auto;
	}

	:global(html) {
		scroll-padding-top: 4.5em;
	}
	:global(body) {
		margin: 0;
		min-height: 100vh;
		display: grid;
		grid-template-rows: min-content 1fr min-content;
	}
	:global(.svelte-parent) {
		background-color: royalblue;
	}
	:global(body),
	:global(textarea),
	:global(select),
	:global(input) {
		font-size: 16px;
		font-family: sans-serif;
		font-weight: 300;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(h1),
	:global(h2),
	:global(h3) {
		font-family: 'Playfair Display', serif;
		font-weight: 400;
	}
</style>
