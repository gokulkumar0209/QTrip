import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import City from "./City";

function Cities() {
	const getCitiesUrl = import.meta.env.VITE_GET_CITIES;
	const [cities, setCities] = useState([]);
	// console.log(getCitiesUrl);

	function fetchData() {
		return fetch(getCitiesUrl)
			.then((res) => res.json())
			.then((data) => {
				setCities(data); // Assign the fetched data to arr // Log the fetched data inside the fetch callback
				return data; // Return data to handle it further if needed
			});
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="grid grid-cols-4 gap-4 mt-4 ml-4 mr-4">
			{cities.map(
				(
					city,
					index // Added index parameter for unique key
				) => (
					<div key={index} className="">
						<City city={city} />
					</div>
				)
			)}
		</div>
	);
}

export default Cities;
