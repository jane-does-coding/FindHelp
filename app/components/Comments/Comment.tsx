const Comment = ({ comment, isLast }: any) => {
	const userId = comment.id;
	console.log(comment);

	return (
		<div
			className={`${
				isLast ? "" : "border-b-[2px] border-neutral-700"
			} flex flex-col gap-2 px-6 pb-4`}
		>
			<div className="flex items-center justify-start gap-4 text-white mb-3">
				<img src="/avatar.png" className="w-10 h-10  rounded-full" alt="" />
				<h2>Anonymous</h2>
			</div>
			<p className="text-neutral-300">{comment.text}</p>
		</div>
	);
};

export default Comment;
