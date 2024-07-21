import React from "react";

function NavBar() {
	return (
		<div className=" text-white flex justify-between ml-6">
			<div>Suttri</div>
			<div className="flex justify-between space-x-4 mr-6">
				<div>Home</div>
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
