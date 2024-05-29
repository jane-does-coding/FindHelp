import SideMenu from "./components/SideMenu/SideMenu";

export default function Home() {
	return (
		<div className="flex w-[100vw] h-screen overflow-hidden">
			<SideMenu />
			<div className="w-[80vw] h-screen absolute left-[20vw] top-0 bg-black/25 overflow-auto"></div>
		</div>
	);
}
