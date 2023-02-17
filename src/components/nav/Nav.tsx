import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import "./nav.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/app/store";
import { removeToken } from "../../redux/features/authSlice";
import Button from "../../elements/Button";

function Nav() {
	const { user, loged } = useSelector((state: RootState) => state.auth);
	const path = useLocation().pathname;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		console.log("Register");
		navigate("/signForm/register");
	};
	const logOut = () => {
		navigate("/");
		dispatch(removeToken());
	};

	return (
		<nav className=" flex h-12 fixed w-full items-center justify-around z-10  px-4 ">
			{/* Logo nac */}
			<div className="logo w-[20%] flex justify-center items-center  ">
				<h1
					className="text-2xl cursor-pointer"
					onClick={(e) => {
						navigate("/");
					}}
				>
					Test Bryant
				</h1>
			</div>
			{/* Links y botones del nav */}
			<ul className="links flex w-[80%] justify-end items-center gap-16 ">
				{path !== "/signForm/login" && path !== "/signForm/register" && (
					<>
						<NavLink
							to={loged ? "/productlist" : "/signForm/login"}
							className="nav__link text-negro-500 hover:underline hover:text-moradoclaro transition duration-300 	"
						>
							Lista de productos
						</NavLink>
						{!loged && (
							<>
								{/* Botones */}
								<div className="buttons flex items-center w-[30%] justify-end gap-8  px-4">
									<NavLink
										to="/signForm/login"
										className="nav__link text-negro-500 hover:underline hover:text-moradoclaro transition duration-300"
									>
										inicar sesion
									</NavLink>

									<div>
										<Button
											label="registrarse"
											onClick={handleClick}
											primary={false}
										/>
									</div>
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
					</>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
