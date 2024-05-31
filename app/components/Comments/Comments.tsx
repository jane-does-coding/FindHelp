import React from "react";
import Comment from "./Comment";
import getUserbyId from "@/app/actions/getUserById";

const Comments = async ({ comments }: any) => {
	return (
		<div className="flex flex-col pt-4 border-l-[2px] border-l-neutral-700 mt-10 gap-6">
			{comments.map((comment: any, i: number) => (
				<div key={i}>
					<Comment isLast={i == comments.length - 1} comment={comment} />
				</div>
			))}
		</div>
	);
};

export default Comments;
