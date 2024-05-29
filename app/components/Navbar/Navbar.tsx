"use client";
import React from "react";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
	currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
	return (
		<nav className="fixed top-8 right-8 w-fit bg-neutral-800 rounded-full z-10">
			<div className="flex">
				<UserMenu currentUser={currentUser} />
			</div>
		</nav>
	);
};

export default Navbar;
