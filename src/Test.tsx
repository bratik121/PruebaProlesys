import React from "react";
import "./test.css";
import {
	AiFillFacebook,
	AiFillGooglePlusSquare,
	AiFillLinkedin,
} from "react-icons/ai";
function Test() {
	return (
		<div className="test">
			<div className="sign-up">
				<form action="#">
					<h1>create Account</h1>
					<div className="social-container">
						<a href="">
							<AiFillFacebook />
						</a>
						<a href="">
							<AiFillGooglePlusSquare />
						</a>
						<a href="">
							<AiFillLinkedin />
						</a>
					</div>
					<p>or use your email for registration</p>
					<input type="text" name="txt" placeholder="name" required />
					<input type="email" name="email" placeholder="email" required />
					<input type="password" name="pswd" placeholder="password" required />
					<button>Sign Up</button>
				</form>
			</div>
			<div className="sign-in">
				<form action="#">
					<h1>Sign In</h1>
					<div className="social-container">
						<a href="">
							<AiFillFacebook />
						</a>
						<a href="">
							<AiFillGooglePlusSquare />
						</a>
						<a href="">
							<AiFillLinkedin />
						</a>
					</div>
					<p>or use your account</p>
					<input type="email" name="email" placeholder="email" required />
					<input type="password" name="pswd" placeholder="password" required />
					<a href="#">Forget your password</a>
					<button>Sign In</button>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-left">
						<h1>Wellcome Back!</h1>
						<p>
							To keep cinnected with us please login with your personal info
						</p>
						<button id="signIn" className="">
							Sign in
						</button>
					</div>
					<div className="overlay-right">
						<h1>Hello Friend!</h1>
						<p>Enter your personal details and start your journey with us</p>
						<button id="signUp" className="">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
