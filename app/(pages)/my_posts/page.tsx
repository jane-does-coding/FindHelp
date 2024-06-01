import getUserPosts from "@/app/actions/getUserPosts";
import Posts from "@/app/components/Feed/Posts";
import { Post } from "@prisma/client";
import React from "react";

const page = async () => {
	const posts: Post[] | null = await getUserPosts();

	if (!posts) return <h1>nothing</h1>;

	return (
		<div className="ml-[20vw] text-white bg-black/25 w-[80vw] h-screen">
			<Posts posts={posts} />
		</div>
	);
};

export default page;
