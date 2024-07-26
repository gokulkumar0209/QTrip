import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className=" text-white flex justify-between bg-black text-lg">
			<Link to={"/"}>
				<button className=" ml-6 text-xl">Qtrip</button>
			</Link>
			<div className="flex justify-between space-x-4 mr-6">
			<Link to={"/"}><div>Home</div></Link>
				<div>Packages</div>
				<div>Services</div>
				<div>Gallery</div>
				<div>Review</div>
				<div>Contact</div>
			</div>
		</div>
	);
}

export default NavBar;
