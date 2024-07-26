import React from "react";
import { Link } from "react-router-dom";

function City({ city }) {
	function setCity(e) {
		localStorage.setItem("city", city.id);
	}
	return (
		<div className=" shadow-lg p-2 rounded-lg">
			<img className=" h-40 w-40 object-cover" src={city.image}></img>
			<div>{city.id}</div>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
			</div>
			<div>{city.description}</div>
			<div>
				<Link to="/adventures">
					<button
						className=" bg-black text-white"
						onClick={(e) => {
							setCity(e);
						}}
					>
						Explore Now
					</button>
				</Link>
			</div>
		</div>
	);
}

export default City;
