"use client";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import usePostModal from "@/app/hooks/usePostModal";
import { useEffect, useState } from "react";

const SideMenu = ({ currentUser }: any) => {
	// Import useEffect and useState
	const loginModal = useLoginModal();
	const postModal = usePostModal();
	const router = useRouter();
	const pathname = usePathname(); // Get current route

	if (pathname == "/landing") return "";

	useEffect(() => {
		// Function to get current user
		const getCurrentUser = async () => {
			// Assume this function fetches the current user
			// If no current user, redirect to auth page
			if (!currentUser) {
			}
		};

		getCurrentUser();
	}, [currentUser, loginModal]);

	return (
		<div className="hidden md:flex w-[20vw] bg-neutral-900 border-r-2 border-black/25 h-screen fixed left-0 top-0 p-2 xl:p-3 flex-col gap-2">
			<h2 className="text-white text-2xl xl:text-3xl my-4 mx-2 jura">
				SilentSupport
			</h2>
			<button
				onClick={() => router.push("/")}
				className={` cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold  ${
					pathname === "/"
						? "bg-indigo-400 hover:bg-indigo-300 text-black"
						: "bg-neutral-800/0 hover:bg-neutral-700/25 text-neutral-100"
				}`} // Apply active class
			>
				Explore
			</button>
			<button
				onClick={() =>
					currentUser ? router.push("/my-posts") : loginModal.onOpen()
				}
				className={`  cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold ${
					pathname === "/my-posts"
						? "bg-indigo-400 hover:bg-indigo-300 text-black"
						: "bg-neutral-800/0 hover:bg-neutral-700/25 text-neutral-100 "
				}`} // Apply active class
			>
				My Posts
			</button>
			<button
				onClick={() => (currentUser ? postModal.onOpen() : loginModal.onOpen())}
				className={` hover:bg-neutral-700/25 cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold ${
					pathname === "/new-post"
						? "bg-indigo-400 text-black"
						: "bg-neutral-800/0 text-neutral-100 "
				}`} // Apply active class
			>
				New Post
			</button>
			<button
				onClick={() => router.push("/help-numbers")}
				className={` cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold ${
					pathname === "/help-numbers"
						? "bg-indigo-400 hover:bg-indigo-300 text-black"
						: "bg-neutral-800/0 hover:bg-neutral-700/25 text-neutral-100"
				}`} // Apply active class
			>
				Help Numbers
			</button>
			<button
				onClick={() =>
					currentUser ? router.push("/profile") : loginModal.onOpen()
				}
				className={`cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold ${
					pathname === "/profile"
						? "bg-indigo-400 hover:bg-indigo-300 text-black"
						: "bg-neutral-800/0 hover:bg-neutral-700/25 text-neutral-100 "
				}`} // Apply active class
			>
				Profile
			</button>
			{currentUser ? (
				<div className="mt-auto">
					<button
						onClick={async () => {
							await signOut();
							router.push("/landing");
						}}
						className="bg-neutral-800/75 hover:bg-neutral-700/25 cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold text-neutral-100"
					>
						Logout
					</button>
				</div>
			) : (
				<div className="mt-auto">
					<button
						onClick={() => loginModal.onOpen()}
						className="bg-neutral-800/75 hover:bg-neutral-700/25 cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl jura font-semibold text-neutral-100"
					>
						Login
					</button>
				</div>
			)}
		</div>
	);
};

export default SideMenu;
