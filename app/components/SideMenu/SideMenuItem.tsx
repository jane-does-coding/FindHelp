import Link from "next/link";
import React from "react";

const SideMenuItem = ({ title, link }: { title: string; link?: string }) => {
	return (
		<Link
			href={link ? link : "/"}
			className="bg-neutral-800/75 hover:bg-neutral-700 cursor-pointer transition w-full p-3 xl:p-4 rounded-xl flex items-center justify-start text-md xl:text-xl text-neutral-100"
		>
			{title}
		</Link>
	);
};

export default SideMenuItem;
