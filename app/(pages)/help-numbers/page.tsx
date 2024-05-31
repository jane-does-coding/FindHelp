import SideMenu from "@/app/components/SideMenu/SideMenu";
import React from "react";

const page = () => {
	return (
		<div>
			<div className="w-[100vw] md:w-[80vw] h-screen absolute left-0 md:left-[20vw] top-0 bg-black/25 overflow-auto pl-6 xl:pl-14 pr-6 xl:pr-16 pt-8 xl:pt-14 flex flex-col">
				<h1 className="text-neutral-200 text-4xl xl:text-5xl">Help Numbers</h1>
				{/* Row 1 */}
				<div className="flex flex-col md:flex-row gap-10 xl:gap-20 mt-8 xl:mt-16 mb-16">
					<div className="w-full">
						<h3 className="text-xl xl:text-2xl w-full pb-4 mb-6 xl:mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Domestic Violence
						</h3>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								The National Domestic Violence Hotline
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 799 &#8212; 7233
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								Information, support, and advocacy to young people
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (866) 331 &#8212; 9474
							</p>
						</div>
						<div className="">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								Helpline is a safe, anonymous, and confidential service
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (844) 762 &#8212; 8483
							</p>
						</div>
					</div>
					<div className="w-full">
						<h3 className="text-xl xl:text-2xl w-full pb-4 mb-6 xl:mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Children, Youth, and Teenagers
						</h3>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								Support services for homeless and runaway youth
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 786 &#8212; 2929
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								ChildHelp National Child Abuse Hotline
							</p>
							<p className="text-neutral-100 text-2xl">
								1 (800) 422 &#8212; 4453
							</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
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
						<h3 className="text-xl xl:text-2xl w-full pb-4 mb-6 xl:mb-8 text-neutral-400 border-b-[1px] border-neutral-500">
							Mental Health and Substance Abuse
						</h3>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								National Suicide Prevention Lifeline
							</p>
							<p className="text-neutral-100 text-2xl">1-800-273-8255</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								National Alliance on Mental Illness (NAMI) Helpline
							</p>
							<p className="text-neutral-100 text-2xl">1 (800) 950 - 6264</p>
						</div>
						<div className="mb-8">
							<p className="text-neutral-600 text-md xl:text-xl mb-2">
								Substance Abuse and Mental Health Services
							</p>
							<p className="text-neutral-100 text-2xl">1 (800) 662 - 4357</p>
						</div>
					</div>
					<div className="hidden md:flex w-full"></div>
				</div>
				<br />
				<div className="w-full left-0 bottom-0 mt-4 p-4 pt-6 pb-8 border-t-2 border-neutral-800">
					<h2 className="text-lg xl:text-2xl text-neutral-500">
						You can find more information here:{" "}
						<a
							className="text-neutral-400 underline ml-4"
							href="https://victimconnect.org/resources/national-hotlines/"
						>
							National Hotlines
						</a>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default page;
