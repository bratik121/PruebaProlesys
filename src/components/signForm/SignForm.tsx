import "./singForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import { motion as m, AnimatePresence } from "framer-motion";
import Login from "../login/Login";
import Register from "../register/Register";

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { duration: 0.5, delay: 0.4 },
	},
};

function SignForm() {
	const path = useLocation().pathname;
	const [active, setActive] = useState(
		path === "/signForm/login" ? false : true
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (active) {
			navigate("/signForm/register");
		} else {
			navigate("/signForm/login");
		}
	}, [active]);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div className="h-screen w-screen  flex justify-center items-center">
			<div className="signForm w-[80%] h-[80%] rounded-lg flex overflow-hidden relative">
				{/* overlay */}
				<Overlay active={active} handleClick={handleClick} />
				{active && (
					<m.div
						className="w-1/2 h-full absolute flex justify-center items-center"
						variants={containerVariants}
						initial="hidden"
						animate="show"
					>
						<Register />
					</m.div>
				)}
				{!active && (
					<m.div
						className="w-1/2 h-full absolute right-0 top-0 flex justify-center items-center"
						variants={containerVariants}
						initial="hidden"
						animate="show"
					>
						<Login />
					</m.div>
				)}
			</div>
		</div>
	);
}

export default SignForm;
