import React from "react";
import { useNavigate } from "react-router-dom";

function Package({ city }) {
	// const { selectedCity, setSelectedCity } = useContext(CityContext);
	const navigate = useNavigate();
	// const handleSelect = () => {
	// 	// localStorage.setItem("city", city.id);
	// 	// setSelectedCity(city.id);
	// 	navigate(`/adventures/${city.id}`);
	// };

	return (
		<div
			className=" rounded-lg h-80 w-72 transition-transform ease-in-out cursor-pointer relative m-2 bg-gray-100 hover:shadow-2xl group"
			onClick={() => navigate(`/adventures/${city.id}`)}
		>
			<div className=" flex justify-center ">
				<div className="container h-64 w-72 overflow-hidden rounded-t-md ">
					<img
						className=" w-full h-full object-cover group-hover:scale-105"
						src={city.image}
						alt={`Image`}
					/>
				</div>
			</div>
			<div className=" top-2 left-2  absolute bg-gray-500 bg-opacity-60 rounded-lg ">
				<h1 className="text-2xl font-bold text-white uppercase px-2 py-1">
					{city.city}
				</h1>
			</div>
			<div className="text-start bg-gray-700 rounded-b-md">
				<p className="text-white p-2 ">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit .
				</p>
			</div>
			<div className="text-center absolute top-1/3 left-1/3 bg-gray-700 bg-opacity-60 rounded-md">
				<p className=" text-white px-2">{city.description}</p>
			</div>
		</div>
	);
}

export default Package;
