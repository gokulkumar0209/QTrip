import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


function NavBar() {
	const navigate = useNavigate();
	const [logS, setLogS] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const loggedIn = localStorage.getItem("loggedIn") === "true";
		setLogS(loggedIn);
	}, [location]);
	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.setItem("loggedIn", false);
		setLogS(false);
		window.location.reload();
	};
	return (
		<div className=" text-white flex justify-between bg-black text-lg p-2">
			<Link to={"/"} className="m-1">
				<button className=" ml-6 text-xl">Qtrip</button>
			</Link>
			<div className="flex justify-between space-x-4 mr-6 m-1">
				<Link to={"/"}>
					<div>Home</div>
				</Link>
				<div>Packages</div>
				<div>Services</div>
				<div>Review</div>
				<div>Contact</div>
			</div>
			{!logS ? (
				<div className=" space-x-2 m-1 mr-6">
					<Link to={"/signup"}>
						<button className=" text-black bg-white p-1 px-2 mx-2 rounded-md">
							Signup
						</button>
					</Link>
					<Link to={"/login"}>
						<button className=" text-black bg-white p-1 px-2 mx-2 rounded-md">
							Login
						</button>
					</Link>
				</div>
			) : (
				<div className=" space-x-2 mr-6">
					<button
						className=" text-black bg-white p-1 px-2 mx-2 rounded-md"
						onClick={() => navigate("/profile")}
					>
						Profile
					</button>
					<button
						className=" text-black bg-white p-1 px-2 mx-2 rounded-md"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			)}
		</div>
	);
}

export default NavBar;
