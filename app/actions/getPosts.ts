import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export default async function getPosts() {
	try {
		const posts = await prisma.post.findMany();

		if (!posts) {
			return null;
		}

		return posts;
	} catch (err: any) {
		return null;
	}
}
