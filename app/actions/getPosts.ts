import prisma from "@/app/libs/prismadb";

export default async function getPosts() {
	try {
		const posts = await prisma.post.findMany({
			orderBy: {
				createdAt: "desc", // Sort by createdAt field in descending order
			},
		});

		if (!posts) {
			return null;
		}

		return posts;
	} catch (err) {
		console.error("Error fetching posts:", err);
		return null;
	}
}
