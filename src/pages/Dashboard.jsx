import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";

const Dashboard = () => {
	// get current user from store
	const user = useSelector(selectCurrentUser);

	return (
		<div className="min-h-screen w-full">
			<h1>Welcome {user.username}</h1>
		</div>
	);
};

export default Dashboard;
