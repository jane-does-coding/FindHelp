import prisma from "@/app/libs/prismadb";

export default async function getPostById(postId: any) {
	try {
		const post = await prisma.post.findUnique({
			where: {
				id: postId,
			},
		});

		if (!post) {
			console.error(`Post with ID ${postId} not found.`);
			return null;
		}

		return post;
	} catch (err: any) {
		console.error(`Error fetching post with ID ${postId}:`, err);
		return null;
	}
}
