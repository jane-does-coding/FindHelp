import getPostById from "@/app/actions/getPostById";
import getPostComments from "@/app/actions/getPostComments";
import getUserbyId from "@/app/actions/getUserById";
import PostPage from "@/app/components/PostPage";
import { Comment } from "@prisma/client";
import React from "react";

const page = async ({ params }: { params: { postId: string } }) => {
	const postId = params.postId;
	const post = await getPostById(postId);
	const comments: Comment[] | null = await getPostComments(postId);

	if (!post) return "idk";

	const userId = post.userId;
	const user = await getUserbyId({ userId });

	return (
		<div>
			<PostPage post={post} user={user} comments={comments} />
		</div>
	);
};

export default page;
