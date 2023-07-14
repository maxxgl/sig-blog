export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`).catch((e: Error) => {
		if (!e.message.startsWith('Unknown variable dynamic import')) {
			throw e;
		}
	});
	const content = post.default;

	return {
		content,
		title: post.metadata.title,
		date: post.metadata.date
	};
}