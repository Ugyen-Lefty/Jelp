import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import AddReview from "./pages/AddReview";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Favorites" element={<Favorite />} />
			<Route path="/Add-Review" element={<AddReview />} />
		</Routes>
	);
}

export default AppRoutes;
