"use client";
import { useState } from "react";
import Input from "./Inputs/Input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CommentForm = ({ postId }: any) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data: any) => {
		setLoading(true);
		setError("");

		try {
			const res = await fetch("/api/comments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: data.text, postId }),
			});

			if (!res.ok) {
				throw new Error("Failed to create comment");
			}

			const responseData = await res.json();
			router.refresh();
			console.log("Comment created:", responseData);
			reset();
		} catch (error) {
			setError("ERROR");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 mt-4 text-white"
		>
			<motion.h2
				initial={{ opacity: 0, y: 25 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.25 }}
				className="text-neutral-200 italic bg-neutral-700/75 py-2 px-6 border-l-[4px] border-neutral-500 pl-4"
			>
				Your information will not be displayed
			</motion.h2>
			<motion.div
				className=""
				initial={{ opacity: 0, y: 25 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.25, delay: 0.1 }}
			>
				<Input
					id="text"
					label="Write an advice, remember to be nice"
					isTextarea={true}
					register={register}
					errors={errors}
					required={true}
				/>
			</motion.div>
			{error && <p className="text-red-500">{error}</p>}
			<motion.button
				initial={{ opacity: 0, y: 25 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.25, delay: 0.2 }}
				type="submit"
				className="py-2 px-4 bg-indigo-400 text-black text-xl rounded-full"
				disabled={loading}
			>
				{loading ? "Submitting..." : "Submit"}
			</motion.button>
		</form>
	);
};

export default CommentForm;
