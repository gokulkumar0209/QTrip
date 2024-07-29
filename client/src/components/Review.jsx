import React from "react";

function Review({ review }) {
	return (
		<div className=" bg-white shadow-lg rounded-lg p-4 flex flex-col text-center hover:scale-105">
			<img src={review.img}></img>
			<h1 className=" uppercase my-2 font-semibold text-xl">{review.name}</h1>
			<h2>{review.rev}</h2>
		</div>
	);
}

export default Review;
