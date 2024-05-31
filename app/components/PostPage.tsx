"use client";
import CommentForm from "./CommentForm";
import Comments from "./Comments/Comments";
import { motion } from "framer-motion";

const PostPage = ({ post, user, comments }: any) => {
	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, text } = post;

	return (
		<div className="ml-[20vw] w-[80vw] flex flex-col min-h-screen bg-black/25 p-4">
			<div className="bg-neutral-800/50 p-6 rounded-lg shadow-lg w-full w-full">
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, delay: 0 }}
					className="flex items-center mb-4"
				>
					<img
						src={"/avatar.png"}
						alt={`${user?.name}'s avatar`}
						className="w-14 h-14 rounded-full object-cover border-2 border-neutral-600"
					/>
					<div className="ml-4">
						<h2 className="text-lg font-semibold text-white">
							{user?.username || "Anonymous"}
						</h2>
						<p className="text-sm text-neutral-400"></p>
					</div>
				</motion.div>
				<div>
					<motion.h1
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.25, delay: 0.1 }}
						className="text-3xl font-extrabold text-white jura mt-6 mb-4"
					>
						{title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.25, delay: 0.2 }}
						className="text-md text-neutral-400 mt-3 leading-relaxed my-6"
					>
						{text}
					</motion.p>
				</div>
				<div className="flex gap-2 mt-2 mb-10">
					{post.tags &&
						post.tags.map((tag: any, i: number) => (
							<motion.p
								initial={{ opacity: 0, y: 25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.25, delay: i / 7 }}
								className="py-1 px-3 rounded-full bg-indigo-400 text-black"
								key={i}
							>
								{tag}
							</motion.p>
						))}
				</div>
				{/* Comment Form */}
				<CommentForm postId={post.id} />

				{comments.length > 0 ? (
					<Comments comments={comments} />
				) : (
					<h1 className="mt-8 mx-auto text-center text-white text-3xl jura">
						No advices yet
					</h1>
				)}
			</div>
		</div>
	);
};

export default PostPage;
