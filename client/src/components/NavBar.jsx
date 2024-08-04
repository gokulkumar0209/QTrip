import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
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
		<div className=" text-white flex justify-between bg-black text-lg p-2 ">
			<Link to={"/"} className="">
				<button className=" ml-6 text-xl">Qtrip</button>
			</Link>
			<div className="flex justify-between space-x-4 mr-6">
				<Link to={"/"}>
					<div>Home</div>
				</Link>
				<div>Packages</div>
				<div>Services</div>
				<div>Gallery</div>
				<div>Review</div>
				<div>Contact</div>
			</div>
			{!logS ? (
				<div className=" space-x-2">
					<Link to={"/signup"}>
						<button>Signup</button>
					</Link>
					<Link to={"/login"}>
						<button>Login</button>
					</Link>
				</div>
			) : (
				<div className=" space-x-2">
					<button>Profile</button>
					<button onClick={handleLogout}>Logout</button>
				</div>
			)}
		</div>
	);
}

export default NavBar;
