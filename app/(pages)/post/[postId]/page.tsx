import getPostById from "@/app/actions/getPostById";
import getUserbyId from "@/app/actions/getUserById";
import PostPage from "@/app/components/PostPage";
import React from "react";

const page = async ({ params }: { params: { postId: string } }) => {
	const postId = params.postId;
	const post = await getPostById(postId);

	if (!post) return "idk";

	const userId = post.userId;
	const user = await getUserbyId({ userId });

	return (
		<div>
			<PostPage post={post} user={user} />
		</div>
	);
};

export default page;
