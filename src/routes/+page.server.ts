export async function load() {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = (await resolver()) as {
				metadata: {
					title: string;
					date: string;
				};
			};
			const postPath = path.slice(11, -3);

			return {
				meta: post.metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return +new Date(b.meta.date) - +new Date(a.meta.date);
	});

	return {
		posts: sortedPosts
	};
}
