import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getPostComments(postId: any) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return null;

		const comments = await prisma.comment.findMany({
			where: {
				postId: postId,
			},
		});

		if (!comments) {
			return null;
		}

		return comments;
	} catch (err: any) {
		return null;
	}
}
