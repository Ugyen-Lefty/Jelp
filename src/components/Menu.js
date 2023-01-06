import * as React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Favorite from "@mui/icons-material/Favorite";
import { Add, Home } from "@mui/icons-material";

const Menu = () => {
	const [value, setValue] = React.useState(0);
	return (
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}>
			<BottomNavigationAction
				label="Home"
				icon={<Home />}
				component={Link}
				to="/"
			/>
			<BottomNavigationAction
				label="Add a Review"
				icon={<Add />}
				component={Link}
				to="/Add-Review"
			/>
			<BottomNavigationAction
				label="Favorites"
				icon={<Favorite />}
				component={Link}
				to="/Favorites"
			/>
		</BottomNavigation>
	);
};
export default Menu;
