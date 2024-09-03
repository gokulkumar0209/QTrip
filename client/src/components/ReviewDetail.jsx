import React from "react";
import { reviews } from "../assets/reviews";
function Review_Detail() {
	const addStar = (rating) => {
		const arr = [];
		for (let i = 0; i < rating; i++) {
			arr.push("⭐");
		}
		return arr;
	};
	return (
		<div className=" px-4">
			{reviews.map((review, index) => {
				const arr = addStar(review.rating);
				return (
					<div
						className=" shadow-md rounded-lg p-4 mt-2 bg-slate-100 hover:shadow-2xl hover:bg-slate-200"
						key={index}
					>
						<div className=" flex space-x-4">
							<img className=" h-8 w-8" src={review.img}></img>
							<h1 className=" uppercase my-2 font-semibold text-xl">
								{review.name}
							</h1>
						</div>
						<h2 className=" flex justify-start">
							{arr.map((star, index) => (
								<p key={index}>{star}</p>
							))}
						</h2>
						<h2 className="  ">{review.rev}</h2>
					</div>
				);
			})}
		</div>
	);
}

export default Review_Detail;
