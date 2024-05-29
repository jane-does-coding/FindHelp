import SideMenu from "@/app/components/SideMenu/SideMenu";
import React from "react";

const page = () => {
	return (
		<div>
			<SideMenu />
			<div className="w-[80vw] h-screen absolute left-[20vw] top-0 bg-black/25 overflow-auto pl-14 pr-16 pt-14 flex flex-col">
				<h1 className="text-neutral-200 text-5xl">Help Numbers</h1>
				{/* Row 1 */}
				<div className="flex gap-20 mt-16 mb-16">
					<div className="w-full">
						<h3 className="text-2xl w-full pb-4 mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Domestic Violence
						</h3>
						<div className="mb-8">
							<p className="text-neutral-600 text-xl mb-2">
								The National Domestic Violence Hotline
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 799 &#8212; 7233
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-xl mb-2">
								Information, support, and advocacy to young people
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (866) 331 &#8212; 9474
							</p>
						</div>
						<div className="">
							<p className="text-neutral-600 text-xl mb-2">
								Helpline is a safe, anonymous, and confidential service
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (844) 762 &#8212; 8483
							</p>
						</div>
					</div>
					<div className="w-full">
						<h3 className="text-2xl w-full pb-4 mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Children, Youth, and Teenagers
						</h3>
						<div className="mb-8">
							<p className="text-neutral-600 text-xl mb-2">
								Support services for homeless and runaway youth
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 786 &#8212; 2929
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-xl mb-2">
								ChildHelp National Child Abuse Hotline
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 422 &#8212; 4453
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-xl mb-2">
								Support for children, parents, and families who are struggling
								with self-harm
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 448 &#8212; 3000
							</p>
						</div>
					</div>
				</div>
				{/* Row 2 */}
				<div className="flex gap-20">
					<div className="w-full">
						<h3 className="text-2xl w-full pb-4 mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Domestic Violence
						</h3>
					</div>
					<div className="w-full"></div>
				</div>
			</div>
		</div>
	);
};

export default page;
