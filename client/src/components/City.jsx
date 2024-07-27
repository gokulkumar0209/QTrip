import React from "react";
import { Link } from "react-router-dom";

function City({ city }) {
	function setCity(e) {
		localStorage.setItem("city", city.id);
	}
	return (
		<div className="shadow-lg p-4 rounded-lg bg-white">
			<div className="flex justify-center mb-4">
				<img
					className="h-40 w-40 object-cover rounded-full"
					src={city.image}
					alt={`Image of ${city.city}`}
				/>
			</div>
			<div className="text-center mb-4">
				<h1 className="text-2xl font-bold uppercase">{city.city}</h1>
			</div>
			<div className="text-center mb-4">
				<p className="text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<div className="text-center mb-4">
				<p className="text-gray-600">{city.description}</p>
			</div>
			<div className="flex justify-center">
				<Link to="/adventures">
					<button
						className="bg-black text-white px-4 py-2 rounded"
						onClick={(e) => {
							setCity(e);
						}}
					>
						Explore Now
					</button>
				</Link>
			</div>
		</div>

		// <div className=" shadow-lg p-2 rounded-lg ">
		// 	<div className=" flex justify-center">
		// 		<img
		// 			className=" h-40 w-40 object-cover flex justify-center"
		// 			src={city.image}
		// 		></img>
		// 	</div>
		// 	<div className=" uppercase ">
		// 		<h1 className=" uppercase flex justify-center">{city.city}</h1>
		// 	</div>
		// 	<div className=" flex justify-center items-center">
		// 		<p className=" flex justify-center">
		// 			Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
		// 		</p>
		// 	</div>
		// 	<div className=" flex justify-center">{city.description}</div>
		// 	<div className=" flex justify-center">
		// 		<Link to="/adventures">
		// 			<button
		// 				className=" bg-black text-white flex justify-center"
		// 				onClick={(e) => {
		// 					setCity(e);
		// 				}}
		// 			>
		// 				Explore Now
		// 			</button>
		// 		</Link>
		// 	</div>
		// </div>
	);
}

export default City;
