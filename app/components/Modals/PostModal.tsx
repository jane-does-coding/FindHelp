"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import usePostModal from "@/app/hooks/usePostModal";

const PostModal = () => {
	const registerModal = useRegisterModal();
	const PostModal = usePostModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			title: "",
			text: "",
			tags: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			const tagsArray = data.tags.split(",").map((tag: any) => tag.trim()); // Parse tags string into array

			const response = await axios.post("/api/posts", {
				title: data.title,
				text: data.text,
				tags: tagsArray, // Include tags in the data object
			});
			console.log("Post created:", response.data);
			toast.success("Post created successfully");
			setIsLoading(false);
			// Optionally, you can close the modal here if needed
		} catch (error) {
			console.error("Error creating post:", error);
			toast.error("Failed to create post");
			setIsLoading(false);
		}
	};

	const switchModal = () => {
		PostModal.onClose();
		registerModal.onOpen();
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			{/* 			<Heading title="Login" subtitle="Please sign in" />
			 */}{" "}
			<Input
				id="title"
				label="Title"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<Input
				id="text"
				label="Text"
				disabled={isLoading}
				errors={errors}
				isTextarea={true}
				required
				register={register}
			/>
			<Input
				id="tags"
				label="Tags (separated by commas)"
				disabled={isLoading}
				errors={errors}
				register={register}
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2">
				Don&apos;t have an account?
				<span
					onClick={switchModal}
					className="hover:cursor-pointer flex block transition hover:underline"
				>
					Sign up
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={PostModal.isOpen}
			title="New Post"
			actionLabel="Create Post"
			onClose={PostModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default PostModal;
