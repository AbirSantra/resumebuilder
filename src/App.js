import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ExamplesPage from "./pages/ExamplesPage";
import ReviewsPage from "./pages/ReviewsPage";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import { useSelector } from "react-redux";

function App() {
	// get access token from store
	const token = useSelector((state) => state.auth.token);

	return (
		<div className="App">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<LandingPage />} />
				<Route
					path="/auth"
					element={token ? <Navigate to="/dashboard" /> : <AuthPage />}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/examples" element={<ExamplesPage />} />
				<Route path="/reviews" element={<ReviewsPage />} />
				<Route
					path="/dashboard"
					element={token ? <Dashboard /> : <Navigate to="/auth" replace />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
