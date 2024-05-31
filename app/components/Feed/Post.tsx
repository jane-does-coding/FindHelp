import getUserbyId from "@/app/actions/getUserById";
import Link from "next/link";
import React from "react";

const Post = async ({ post }: any) => {
	const user = await getUserbyId({ userId: post.userId });

	if (!user) return "user not found";

	return (
		<Link
			href={`/post/${post.id}`}
			className="bg-neutral-800/50 p-6 rounded-lg shadow-lg flex flex-col items-start gap-4"
		>
			<div className="flex items-center gap-4">
				<img
					src={"/avatar.png"}
					alt={`${user.name}'s avatar`}
					className="w-12 xl:w-16 h-12 xl:h-16 rounded-full object-cover"
				/>
				<div>
					<h2 className="text-xl xl:text-2xl text-white font-semibold">
						{user.username}
					</h2>
				</div>
			</div>
			<div className="mt-2">
				<h1 className="text-2xl text-white font-bold">{post.title}</h1>
				<p className="text-lg text-neutral-300 mt-2">{post.text}</p>
			</div>
		</Link>
	);
};

export default Post;
