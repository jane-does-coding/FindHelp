"use client";
import Title from "@/app/components/Title";
import { motion } from "framer-motion";

const page = () => {
	return (
		<div className="min-h-screen  text-white">
			<img
				src="/gradient.svg"
				className="w-[85vw] h-[90vh] rounded-xl object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
				alt=""
			/>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="py-10 z-20">
					<Title />
				</header>

				<main className="z-20">
					<section className="py-20 z-20">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 1 }}
							className="z-20"
						>
							<div className="bg-neutral-800 p-6 rounded-lg shadow-lg z-20 w-[70vw] mx-auto">
								<h2 className="text-3xl font-bold mb-4 jura text-center">
									How It Works
								</h2>
								<p className="text-lg mb-6">
									Share your story without revealing your identity. Receive
									advice and support from others.
								</p>
							</div>
						</motion.div>
					</section>
				</main>

				<footer className="py-10 text-center">
					<p className="text-lg">
						&copy; 2024 Anonymous Support. All rights reserved.
					</p>
				</footer>
			</div>
		</div>
	);
};

export default page;
