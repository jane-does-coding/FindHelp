import getUserPosts from "@/app/actions/getUserPosts";
import Posts from "@/app/components/Feed/Posts";
import { Post } from "@prisma/client";
import React from "react";

const page = async () => {
	const posts: Post[] | null = await getUserPosts();

	if (!posts || posts.length == 0) {
		return (
			<div className="md:ml-[20vw] text-white bg-black/25 w-[100vw] md:w-[80vw] h-screen">
				<h1 className="text-5xl py-10 text-center jura text-white">
					You have no posts
				</h1>
			</div>
		);
	}

	return (
		<div className="md:ml-[20vw] text-white bg-black/25 w-[100vw] md:w-[80vw] h-screen">
			<Posts posts={posts} />
		</div>
	);
};

export default page;
