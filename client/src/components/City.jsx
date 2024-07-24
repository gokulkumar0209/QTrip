import React from "react";

function City({ city }) {
	return (
		<div className=" shadow-md p-2 ">
			<img className=" h-40 w-40 object-cover" src={city.image}></img>
			<div>{city.city}</div>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
			</div>
			<div>{city.description}</div>
			<div>
				<button>Explore Now</button>
			</div>
		</div>
	);
}

export default City;
