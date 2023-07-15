<header>
	<a href="/">Sig's Blog</a>
</header>

<main>
	<slot />
</main>

<footer>©️ {new Date().getFullYear()}</footer>

<style>
	header,
	footer {
		padding: 1em;
	}

	header {
		background-color: rosybrown;
	}

	main {
		width: min(80ch, 80%);
		margin: 0 auto;
		padding: 1em 0;
	}

	footer {
		background-color: seashell;
		text-align: center;
		margin-top: 2em;
	}

	:global(body) {
		margin: 0;
		height: 100vh;
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
		font-weight: 100;
	}
</style>
