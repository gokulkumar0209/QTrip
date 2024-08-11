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
		<div className=" pt-16">
			<div className="mx-4 ">
				<div className=" bg-black flex justify-center rounded-t-lg">
					<h1 className=" text-xl p-2 text-white">{advent.name}</h1>
				</div>
				<div className=" bg-gray-300 flex justify-center rounded-b-lg">
					<h1 className=" text-gray-600 text-lg">{advent.subtitle}</h1>
				</div>
			</div>

			<div className=" flex justify-center mx-2">
				{images.map((image, index) => (
					<div key={index} className=" container h-[320px] overflow-hidden m-2">
						<img
							className=" h-full w-full object-cover rounded-lg"
							src={image}
							alt="Image"
						></img>
					</div>
				))}
			</div>
			<div className=" grid grid-cols-3 ">
				<div className=" mx-4 col-span-2 border-8 border-cyan-900 rounded-xl bg-cyan-900">
					<div className=" flex justify-center p-2 bg-cyan-900 ">
						<h1 className=" uppercase text-xl text-white">{advent.name}</h1>
					</div>
					<div className=" bg-gray-400 rounded-xl ">
						<p className="p-4 text-cyan-900">{advent.content}</p>
					</div>
				</div>
				<Registration advent={advent} />
			</div>
		</div>
	);
}

export default Adventure_Detail;