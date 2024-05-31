import { useState } from "react";
import SideMenu from "./components/SideMenu/SideMenu";
import axios from "axios";
import getPosts from "./actions/getPosts";
import Posts from "./components/Feed/Posts";

export default async function Home() {
	const posts = await getPosts();

	return (
		<div className="ml-[20vw] text-white bg-black/25 w-[80vw] h-screen">
			<Posts posts={posts} />
		</div>
	);
}
