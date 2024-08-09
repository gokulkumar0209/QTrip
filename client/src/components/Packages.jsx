import React, { useEffect, useState } from "react";

import Package from "./Package";
import axios from "axios";

function Packages() {
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
			<div className="flex justify-center  p-2 bg-black">
				<h1 className="text-white text-2xl font-bold tracking-widest">
					PACKAGES
				</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
				{cities.map((city, index) => (
					<div key={index} className=" flex justify-center">
						<Package city={city} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Packages;
