import React from "react";
import { useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { useLoginMutation } from "../api/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../api/userApiSlice";

const AuthPage = () => {
	const [login, { isLoading: isLoging }] = useLoginMutation();

	const [registerUser, { isLoading: isRegistering }] =
		useRegisterUserMutation();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	// to store the form fields
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	// to store the login/register state
	const [isLogin, setIsLogin] = useState(true);

	// to store the show password state
	const [showPass, setShowPass] = useState(false);

	// to store the error messages
	const [error, setError] = useState(null);

	//! to reset the error on field value change
	useEffect(() => {
		setError(null);
	}, [username, password, email, confirmPass]);

	//! to handle the field value changes
	const usernameChange = (e) => {
		setUsername(e.target.value);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
	};
	const confirmPassChange = (e) => {
		setConfirmPass(e.target.value);
	};

	//! to toggle login-register form
	const toggleLogin = () => {
		setIsLogin((prev) => !prev);
	};

	//! to toggle the show password state
	const toggleShowPass = () => {
		setShowPass((prev) => !prev);
	};

	//! to reset the form fields
	const resetForm = () => {
		setUsername("");
		setEmail("");
		setPassword("");
		setConfirmPass("");
	};

	//! to handle the submit request
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isLogin) {
			try {
				const userData = await login({ username, password }).unwrap();
				dispatch(setCredentials({ ...userData }));
				resetForm();
				navigate("/dashboard");
			} catch (error) {
				console.log(error);
				if (!error?.status) {
					setError("No server response!");
				} else if (error.status === 400) {
					setError("Missing Username or Password!");
				} else if (error.status === 404) {
					setError("User does not exist!");
				} else if (error.status === 401) {
					setError("Wrong Password!");
				} else {
					setError("Login Failed! Please try again later.");
				}
			}
		} else {
			if (password === confirmPass) {
				try {
					await registerUser({ username, email, password }).unwrap();
					const userData = await login({ username, password }).unwrap();
					dispatch(setCredentials({ ...userData }));
					resetForm();
					navigate("/dashboard");
				} catch (error) {
					if (!error?.status) {
						setError("No server response!");
					} else {
						setError(error.data.message);
					}
				}
			} else {
				setError("Passwords do not match!");
			}
		}
	};

	return (
		<div className="auth w-full flex justify-center items-center bg-primary-lighter">
			<div className="auth--container section min-h-[calc(100vh-6rem)] flex justify-center items-center">
				<div className="auth--content w-full max-w-[500px] bg-white-one shadow-md py-16 px-12 rounded-2xl flex flex-col justify-center items-center gap-8">
					<div className="auth--header w-full text-center">
						<h1 className="auth--heading font-extrabold text-3xl">
							{isLogin ? "User Login" : "User SignUp"}
						</h1>
						<p className="auth--subheading mt-2 text-primary">
							{isLogin
								? "Welcome back! Sign in to your account"
								: "Create a new account. It's free!"}
						</p>
					</div>
					{error && (
						<p className="auth--error text-sm italic text-[#dc2626]">{error}</p>
					)}
					<form
						className="auth--form w-full flex flex-col justify-center items-center gap-2"
						onSubmit={handleSubmit}
					>
						{!isLogin && (
							<div className="auth--form--input w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four">
								<input
									type="email"
									className="w-full border-none outline-none text-sm"
									placeholder="Enter email"
									value={email}
									onChange={emailChange}
									required
								/>
							</div>
						)}
						<div className="auth--form--input w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four">
							<input
								type="text"
								className="w-full border-none outline-none text-sm"
								placeholder="Enter username"
								value={username}
								onChange={usernameChange}
								required
							/>
						</div>
						<div className="auth--form--input w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four">
							<input
								type={showPass ? "text" : "password"}
								className="w-full border-none outline-none text-sm"
								placeholder="Enter password"
								value={password}
								onChange={passwordChange}
								required
							/>
							<div
								className="auth--pass--icon text-xl text-grey-three cursor-pointer"
								onClick={toggleShowPass}
							>
								{showPass ? <BiHide /> : <BiShowAlt />}
							</div>
						</div>
						{!isLogin && (
							<div className="auth--form--input w-full flex justify-center items-center px-4 py-3 rounded-md border border-grey-four">
								<input
									type={showPass ? "text" : "password"}
									className="w-full border-none outline-none text-sm"
									placeholder="Confirm password"
									value={confirmPass}
									onChange={confirmPassChange}
									required
								/>
								<div
									className="auth--pass--icon text-xl text-grey-three cursor-pointer"
									onClick={toggleShowPass}
								>
									{showPass ? <BiHide /> : <BiShowAlt />}
								</div>
							</div>
						)}
						{isLogin ? (
							<button className="btn primary--btn mt-4 w-full" type="submit">
								{isLoging ? "Loading..." : "Log In"}
							</button>
						) : (
							<button className="btn primary--btn mt-4 w-full" type="submit">
								{isRegistering ? "Loading..." : "Create account"}
							</button>
						)}
					</form>
					{isLogin ? (
						<p className="text-center text-sm text-grey-three">
							Don't have an account?{" "}
							<span
								className="text-primary font-medium cursor-pointer"
								onClick={toggleLogin}
							>
								Create one here
							</span>
						</p>
					) : (
						<p className="text-center text-sm text-grey-three">
							Already have an account?{" "}
							<span
								className="text-primary font-medium cursor-pointer"
								onClick={toggleLogin}
							>
								Sign in here
							</span>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
