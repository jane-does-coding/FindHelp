"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserMenu = ({ currentUser }: { currentUser?: User | null }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className="relative text-black">
			<div className="flex flex-row items-center gap-3">
				<div
					className="p-4 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-900/50 text-white"
					onClick={toggleOpen}
				>
					<AiOutlineMenu size={28} />
				</div>
			</div>

			{isOpen && (
				<div className="absolute shadow-lg rounded-xl border-[1.5px] border-neutral-900/50 border-t-neutral-900 w-[40vw] md:w-[20vw] bg-neutral-800 overflow-hidden right-0 top-14 text-sm">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem onClick={() => signOut()} label="Logout" />
							</>
						) : (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem onClick={loginModal.onOpen} label="Login" />
								<MenuItem onClick={registerModal.onOpen} label="Signup" />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
