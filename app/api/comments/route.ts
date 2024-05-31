import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: any) {
	const { text, postId } = await req.json();
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		console.log("No user");
		return NextResponse.json("Failed to create comment");
	}

	try {
		const comment = await prisma.comment.create({
			data: {
				text,
				userId: currentUser.id,
				postId,
			},
			include: {
				user: true,
				post: true,
			},
		});

		return NextResponse.json(comment);
	} catch (error) {
		console.error("Error creating comment:", error);
		return NextResponse.json("Failed to create comment");
	}
}
