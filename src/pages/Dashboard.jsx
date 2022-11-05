import React from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../api/userApiSlice";
import { HiPlus } from "react-icons/hi";
import { useGetUserResumeQuery } from "../api/resumeApiSlice";
import ResumeCard from "../components/ResumeCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
	// get current user id from store
	const currentUserId = useSelector((state) => state.auth.user._id);

	// request the current user details
	const { data: currentUser, isLoading: userLoading } =
		useGetUserQuery(currentUserId);

	// request the current user's resumes
	const { data: resumes, isLoading: resumesLoading } =
		useGetUserResumeQuery(currentUserId);

	return (
		<div className="dashboard w-full flex justify-center items-center">
			<div className="dashboard--container section min-h-screen flex justify-center items-center py-28">
				{userLoading ? (
					<h1 className="font-bold text-4xl">Loading ...</h1>
				) : (
					<div className="dashboard--content w-full self-start flex flex-col justify-start items-center gap-8">
						<h1 className="dashboard--greeting w-full font-bold text-4xl">
							Welcome,{" "}
							<span className="text-primary">{currentUser.username}</span>
						</h1>
						<div className="dashboard--resumes--container w-full flex flex-col justify-center items-center">
							<div className="dashboard--resumes--header w-full flex justify-between items-center">
								<h2 className="font-semibold text-2xl">My Resumes</h2>
								<Link to="/editor/new">
									<button className="btn primary--btn">
										<HiPlus size={20} /> Create new
									</button>
								</Link>
							</div>
							{/* <div className="divider w-full h-[1px] bg-grey-four my-2"></div> */}
							<div className="dashboard--resumes mt-4 w-full flex flex-col justify-center items-center gap-4">
								{resumesLoading ? (
									<h2 className="text-grey-three">Loading your resumes...</h2>
								) : resumes.length === 0 ? (
									<h2 className="text-grey-three">
										You have no resumes. Create one now!
									</h2>
								) : (
									resumes.map((resume) => {
										return <ResumeCard key={resume._id} resume={resume} />;
									})
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
