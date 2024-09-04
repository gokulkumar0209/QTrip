import React, { useEffect, useState } from "react";
import Adventure from "./Adventure";
import { useParams } from "react-router-dom";
function Adventures() {
	const { selectedCity } = useParams();
	const getAdventureUrl = import.meta.env.VITE_GET_ADVENTURES + selectedCity;
	const [adventureData, setAdventureData] = useState([]);
	
	async function fetchData() {
		const res = await fetch(getAdventureUrl);
		const data_1 = await res.json();
		setAdventureData(data_1);
		return data_1;
	}

	useEffect(() => {
		fetchData();
	}, [selectedCity]);

	return (
		<>
			<div className=" ">
				<div className=" sticky top-14  z-50 mt-2 mx-4 bg-black text-white uppercase flex justify-center rounded-md">
					<h1 className=" text-xl p-2">Adventures in {selectedCity}</h1>
				</div>

				<div className="grid grid-cols-4 ml-4 mr-4 ">
					{adventureData.map((adt) => {
						return (
							<div className="" key={adt.id}>
								<Adventure adt={adt} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Adventures;
