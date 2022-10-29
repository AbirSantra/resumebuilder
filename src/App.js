import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ExamplesPage from "./pages/ExamplesPage";
import ReviewsPage from "./pages/ReviewsPage";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<LandingPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/examples" element={<ExamplesPage />} />
				<Route path="/reviews" element={<ReviewsPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
