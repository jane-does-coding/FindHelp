import React from "react";

const PostPage = ({ post, user }: any) => {
	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, text } = post;

	return (
		<div className="ml-[20vw] w-[80vw] flex flex-col min-h-screen bg-black/25 p-4">
			<div className="bg-neutral-800/50 p-6 rounded-lg shadow-lg w-full w-full">
				<div className="flex items-center mb-4">
					<img
						src={"/avatar.png"}
						alt={`${user?.name}'s avatar`}
						className="w-14 h-14 rounded-full object-cover border-2 border-neutral-600"
					/>
					<div className="ml-4">
						<h2 className="text-lg font-semibold text-white">
							{user?.username || "Anonymous"}
						</h2>
						<p className="text-sm text-neutral-400">
							{/* 							{new Date(date).toLocaleDateString()}
							 */}{" "}
						</p>
					</div>
				</div>
				<div>
					<h1 className="text-3xl font-extrabold text-white">{title}</h1>
					<p className="text-md text-neutral-300 mt-3 leading-relaxed">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PostPage;
