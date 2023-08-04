export async function load() {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = (await resolver()) as {
				metadata: {
					title: string;
					date: string;
					summary: string;
					hero: string;
					draft?: boolean;
				};
			};
			const slug = path.split('/').pop()?.split('.')[0];

			return {
				meta: post.metadata,
				path: `/blog/${slug}`
			};
		})
	);

	const filteredPosts = allPosts; //.filter((post) => !post.meta.draft);

	const sortedPosts = filteredPosts.sort((a, b) => {
		return +new Date(b.meta.date) - +new Date(a.meta.date);
	});

	return {
		posts: sortedPosts
	};
}
