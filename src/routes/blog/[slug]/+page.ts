import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`).catch((e: Error) => {
		if (!e.message.startsWith('Unknown variable dynamic import')) {
			throw e;
		}
	});
	if (!post) {
		throw error(404);
	}

	const content = post.default;

	return {
		content,
		...post.metadata
	};
}
