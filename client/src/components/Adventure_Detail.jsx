import React, { useEffect, useState } from "react";

function Adventure_Detail() {
	const adventure_id = localStorage.getItem("adventure_id");
	const getAdventureDetailUrl =
		import.meta.env.VITE_GET_ADVENTURE_DETAIL + adventure_id;
	const [advent, setAdventData] = useState({});
	async function fetchData() {
        
		// console.log(getAdventureUrl);
		const res = await fetch(getAdventureDetailUrl);
		const data_1 = await res.json();
		setAdventData(data_1);
		console.log(data_1);
		return data_1;
	}

	useEffect(() => {
		fetchData();
        console.log(advent)
	}, []);
	return <div>{advent.name}</div>;
}

export default Adventure_Detail;
