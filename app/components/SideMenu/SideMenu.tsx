import React from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
	return (
		<div className="w-[20vw] bg-neutral-900 h-screen fixed left-0 top-0 p-3 flex flex-col gap-2">
			<h2 className="text-white text-3xl my-4 mx-2">FindHelp</h2>
			<SideMenuItem title="Explore " />
			<SideMenuItem title="My Posts" />
			<SideMenuItem title="Help Numbers" link="/help-numbers" />
			{/* https://victimconnect.org/resources/national-hotlines/ */}
			<SideMenuItem title="Profile" />
			<div className="mt-auto">
				<SideMenuItem title="Logout" />
			</div>
		</div>
	);
};

export default SideMenu;
