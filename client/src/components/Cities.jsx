import React, { useEffect, useState } from "react";
import City from "./City";
import axios from "axios";

function Cities() {
	const getCitiesUrl = import.meta.env.VITE_GET_CITIES;
	const [cities, setCities] = useState([]);

	async function fetchData() {
		try {
			const res = await axios.get(getCitiesUrl);
			setCities(res.data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<div className="flex justify-center mt-2">
				<h1 className=" text-white flex justify-between gap-2 text-2xl font-bold">
					<span className=" bg-black px-2 rounded-md">P</span>
					<span className=" bg-black px-2 rounded-md">A</span>
					<span className=" bg-black px-2 rounded-md">C</span>
					<span className=" bg-black px-2 rounded-md">K</span>
					<span className=" bg-black px-2 rounded-md">A</span>
					<span className=" bg-black px-2 rounded-md">G</span>
					<span className=" bg-black px-2 rounded-md">E</span>
					<span className=" bg-black px-2 rounded-md">S</span>
				</h1>
			</div>
			<div className="grid grid-cols-4">
				{cities.map((city, index) => (
					<div key={index} className="">
						<City city={city} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cities;
