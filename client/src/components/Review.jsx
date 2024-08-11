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
		<div className=" shadow-lg rounded-lg  m-4 w-96 h-36  inline-block">
			<div className="grid grid-cols-6 space-x-8">
				<div className="container overflow-hidden h-12 w-12 clear-start bg-green-200 col-span-1">
					<img className=" rounded-lg " src={review.img}></img>
				</div>
				<div className="  col-span-5 h-12 ">
					<h1 className=" flex justify-start uppercase  font-semibold text-base ">
						{review.name}
					</h1>

					<h2 className=" flex justify-start">
						{positive.map((star, index) => (
							<p key={index}>{star}</p>
						))}
					</h2>
				</div>
			</div>

			<div className="container overflow-hidden p-4">
				<h2 className=" max-h-16 whitespace-normal text-base overflow-y-scroll">{review.rev}</h2>
			</div>
		</div>
	);
}

export default Review;
