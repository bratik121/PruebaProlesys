import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/app/store";
import { setLog } from "../../redux/features/logInSlice";
import { removeToken } from "../../redux/features/authSlice";
import Button from "../../elements/Button";

function Nav() {
	const { loged } = useSelector((state: RootState) => state.logIn);
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {};
	const logOut = () => {
		navigate("/");
		dispatch(removeToken());
		dispatch(setLog(false));
	};

	return (
		<nav className=" flex h-12 fixed w-full items-center justify-around z-10  px-4">
			{/* Logo nac */}
			<div className="logo w-[20%] flex justify-center items-center  ">
				<h1 className="text-2xl">Test Bryant</h1>
			</div>
			{/* Input del nav */}
			<div className="w-[40%] box flex justify-end "></div>
			{/* Links y botones del nav */}
			<ul className="links flex w-[40%] justify-end items-center gap-16  ">
				<NavLink
					to={loged ? "/productlist" : "/login"}
					className="nav__link text-negro-500 hover:underline hover:text-moradoclaro transition duration-300"
				>
					Lista de productos
				</NavLink>
				{!loged && (
					<>
						{/* Botones */}
						<div className="buttons flex items-center w-[50%] justify-center gap-8">
							<NavLink
								to="/login"
								className="nav__link text-negro-500 hover:underline hover:text-moradoclaro transition duration-300"
							>
								inicar sesion
							</NavLink>
							<NavLink to="/register" className="">
								<Button
									label="registrarse"
									onClick={handleClick}
									primary={false}
								/>
							</NavLink>
						</div>
					</>
				)}
				{loged && (
					<div className=" flex justify-center w-[50%] items-center gap-6">
						<div className="flex items-center gap-1 text-xl">
							<MdOutlineAccountCircle className="" />
							<p>{user}</p>
						</div>
						<BiLogOut
							className="text-2xl hover:text-blanco transition duration-300 hover:cursor-pointer"
							onClick={logOut}
						/>
					</div>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
