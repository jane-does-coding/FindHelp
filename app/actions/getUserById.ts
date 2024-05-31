import prisma from "@/app/libs/prismadb";

export default async function getUserbyId({ userId }: { userId: any }) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			console.error(`User with ID ${userId} not found.`);
			return null;
		}

		return user;
	} catch (err: any) {
		console.error(`Error fetching user with ID ${userId}:`, err);
		return null;
	}
}
