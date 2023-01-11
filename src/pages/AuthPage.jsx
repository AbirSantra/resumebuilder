import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { useLoginMutation } from "../api/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../api/userApiSlice";
import InputControl from "../components/InputControl";

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
		<div className="auth w-full flex justify-center items-center bg-white-two">
			<div className="auth--container section min-h-[calc(100vh-6rem)] flex justify-center items-center">
				<div className="auth--content w-full max-w-[500px] bg-white-one shadow-sm py-16 px-12 rounded-2xl flex flex-col justify-center items-center gap-8">
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
						<p className="auth--error text-sm italic text-red-600">{error}</p>
					)}
					<form
						className="auth--form mt-4 w-full flex flex-col justify-center items-center gap-6"
						onSubmit={handleSubmit}
					>
						{!isLogin && (
							<InputControl
								type="text"
								label="Email Address"
								hint="We won't send any spam mails. Promise. We hate them more than you do"
								placeholder="youremail@youradress.com"
								value={email}
								onChange={emailChange}
							/>
						)}
						<InputControl
							type="text"
							label="Username"
							placeholder="youruniqueusername"
							value={username}
							onChange={usernameChange}
						/>
						<InputControl
							type="password"
							label="Password"
							placeholder="yoursecretpass"
							value={password}
							onChange={passwordChange}
						/>
						{!isLogin && (
							<InputControl
								type="password"
								label="Confirm Password"
								placeholder="same as yoursecretpass"
								value={confirmPass}
								onChange={confirmPassChange}
							/>
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
