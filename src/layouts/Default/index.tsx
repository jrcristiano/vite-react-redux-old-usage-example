import { Outlet } from "react-router-dom";

function Default() {
	return (
		<>
			<h4>Default layout</h4>
			<Outlet />
		</>
	);
}

export default Default;
