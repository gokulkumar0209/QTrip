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
		<div className=" shadow-lg rounded-lg  m-4  h-64 w-64 inline-block">
			<img className=" rounded-lg" src={review.img}></img>

			<h1 className=" flex justify-start uppercase  font-semibold text-xl my-2">
				{review.name}
			</h1>

			<h2 className=" flex justify-start">
				{positive.map((star, index) => (
					<p key={index}>{star}</p>
				))}
			</h2>
			<h2 className=" hidden ">{review.rev}</h2>
		</div>
	);
}

export default Review;
