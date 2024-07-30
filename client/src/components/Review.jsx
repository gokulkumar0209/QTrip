import React, { useEffect, useState } from "react";

function Review({ review }) {
	const [positive, setPositive] = useState([]);
	useEffect(() => {
		const arr = [];
		for (let i = 0; i < review.rating; i++) {
			arr.push("⭐");
		}
		setPositive(arr);
	}, []);
	return (
		<div className=" bg-white shadow-lg rounded-lg p-4 flex flex-col text-center hover:scale-105">
			<img src={review.img}></img>
			<h1 className=" uppercase my-2 font-semibold text-xl">{review.name}</h1>
			<h2 className=" flex justify-center">
				{positive.map((star, index) => (
					<h3 key={index}>{star}</h3>
				))}
			</h2>
			<h2>{review.rev}</h2>
			
		</div>
	);
}

export default Review;
