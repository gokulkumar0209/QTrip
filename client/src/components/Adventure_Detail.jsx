import React, { useEffect, useState } from "react";
import Registration from "./Registration";
// import "./Adventures_Detail.css";
function Adventure_Detail() {
	const adventure_id = localStorage.getItem("adventure_id");
	const [images, setImages] = useState([""]);
	const getAdventureDetailUrl =
		import.meta.env.VITE_GET_ADVENTURE_DETAIL + adventure_id;
	const [advent, setAdventData] = useState({});
	async function fetchData() {
		// console.log(getAdventureUrl);
		const res = await fetch(getAdventureDetailUrl);
		const data_1 = await res.json();
		setAdventData(data_1);
		setImages(data_1.images);
		// console.log(data_1);
		return data_1;
	}

	useEffect(() => {
		fetchData();

		// console.log(advent);
	}, [getAdventureDetailUrl]);
	return (
		<div>
			<div>{advent.name}</div>
			<div>{advent.subtitle}</div>
			<div className=" flex justify-center mx-4">
				{images.map((image, index) => (
					<div key={index} className=" mx-16">
						<img className=" h-[320px] w-full" src={image} alt="Image"></img>
					</div>
				))}
			</div>
			<div className=" grid grid-cols-2 ">
				<div className=" mx-4 grid-cols-1">{advent.content}</div>
				<Registration />
			</div>
		</div>
	);
}

export default Adventure_Detail;
