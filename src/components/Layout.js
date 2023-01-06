import Menu from "./Menu";
import "./Layout.css";

function Layout(props) {
	return (
		<div>
			<Menu />
			<main className="main">{props.children}</main>
		</div>
	);
}

export default Layout;
