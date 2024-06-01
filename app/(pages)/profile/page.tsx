import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";

const page = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return;

	return (
		<div className="flex justify-center items-center min-h-screen bg-black/25 p-8">
			<div className="w-full md:w-[70vw] md:ml-[20vw] bg-neutral-800/50 rounded-lg shadow-lg text-center p-8 xl:p-16">
				<h1 className="text-neutral-200 text-4xl mb-6">Profile</h1>
				<img
					src="/avatar.png"
					alt=""
					className="w-28 xl:w-36 h-28 xl:h-36 rounded-full object-cover border-2 border-neutral-600 mb-6 xl:mb-14 mx-auto"
				/>
				<div className="space-y-6">
					<div>
						<h2 className="text-xl text-neutral-400">Name:</h2>
						<h3 className="text-white text-2xl xl:text-3xl border-b border-neutral-700 pb-2">
							{currentUser.name}
						</h3>
					</div>
					<div>
						<h2 className="text-xl text-neutral-400">Username:</h2>
						<h3 className="text-white text-2xl xl:text-3xl border-b border-neutral-700 pb-2">
							{currentUser.username}
						</h3>
					</div>
					<div>
						<h2 className="text-xl text-neutral-400">Email:</h2>
						<h3 className="text-white text-2xl xl:text-3xl border-b border-neutral-700 pb-2">
							{currentUser.email}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
