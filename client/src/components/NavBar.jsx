import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
			<div className=" space-x-2">
				<Link to={"/signup"}>
					<button>Signup</button>
				</Link>
				<Link to={"/login"}>
					<button>Login</button>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
