import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserPosts() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return "no user";

		const posts = await prisma.post.findMany({
			where: {
				userId: currentUser.id,
			},
		});

		if (!posts) {
			return null;
		}

		return posts;
	} catch (err: any) {
		return null;
	}
}
