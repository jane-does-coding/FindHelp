import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
	postId: string;
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			console.error("No current user found");
			return NextResponse.error();
		}

		const { postId } = params;
		if (!postId || typeof postId !== "string") {
			console.error("Invalid postId:", postId);
			throw new Error("Invalid Id");
		}

		// Delete related comments first
		await prisma.comment.deleteMany({
			where: {
				postId: postId,
			},
		});

		// Then delete the post
		const post = await prisma.post.deleteMany({
			where: {
				id: postId,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(post);
	} catch (error) {
		console.error("Error deleting post:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
