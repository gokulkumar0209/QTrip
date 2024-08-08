import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Package({ city }) {
	const navigate = useNavigate();
	const handleSelect = () => {
		localStorage.setItem("city", city.id);
		navigate("/adventures");
	};

	return (
		<div
			className="shadow-lg p-4 m-4 rounded-lg bg-white transition-transform  ease-in-out hover:scale-105 hover:bg-slate-200 cursor-pointer"
			onClick={handleSelect}
		>
			<div className="flex justify-center m-2">
				<img
					className="h-40 w-40 object-cover rounded-full"
					src={city.image}
					alt={`Image of ${city.city}`}
				/>
			</div>
			<div className="text-center m-2">
				<h1 className="text-2xl font-bold uppercase">{city.city}</h1>
			</div>
			<div className="text-center m-2">
				<p className="text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<div className="text-center m-2">
				<p className="text-gray-600">{city.description}</p>
			</div>
		</div>
	);
}

export default Package;
