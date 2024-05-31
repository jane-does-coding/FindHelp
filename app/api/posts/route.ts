import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { title, text, userId } = await req.json();
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		console.log("No user");
		NextResponse.json("Failed to create post");
		return;
	}

	try {
		const post = await prisma.post.create({
			data: {
				title,
				text,
				userId: currentUser.id,
			},
			include: {
				user: true, // Include the user information in the response
			},
		});

		return NextResponse.json(post);
	} catch (error) {
		console.error("Error creating post:", error);
		return NextResponse.json("Failed to create post");
	}
}
