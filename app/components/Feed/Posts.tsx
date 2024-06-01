import { Post as PostTypeMaybe } from "@prisma/client";
import Post from "./Post";

const Posts = ({ posts }: { posts: PostTypeMaybe[] }) => {
	return (
		<div className="flex flex-col gap-3 p-4 h-screen overflow-auto w-full">
			{posts.map((post: any) => (
				<div key={post.id}>
					<Post post={post} />
				</div>
			))}
		</div>
	);
};

export default Posts;
