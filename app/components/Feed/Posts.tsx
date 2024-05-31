import React from "react";
import Post from "./Post";

const Posts = ({ posts }: { posts: any }) => {
	return (
		<div className="flex flex-col gap-3 p-4 h-screen overflow-auto w-full">
			{posts.map((post: any, i: number) => (
				<div key={i}>
					<Post post={post} />
				</div>
			))}
		</div>
	);
};

export default Posts;
