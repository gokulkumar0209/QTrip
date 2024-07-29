import React from "react";
import { reviews } from "../assets/pictures";
import Review from "./Review";
function Reviews() {
	return (
		<div>
			<div className="flex justify-center my-4">
				<h1 className=" text-white flex justify-between gap-2 text-2xl font-bold">
					<span className=" bg-black px-2 rounded-md">R</span>
					<span className=" bg-black px-2 rounded-md">E</span>
					<span className=" bg-black px-2 rounded-md">V</span>
					<span className=" bg-black px-2 rounded-md">I</span>
					<span className=" bg-black px-2 rounded-md">E</span>
					<span className=" bg-black px-2 rounded-md">W</span>
					<span className=" bg-black px-2 rounded-md">S</span>
				</h1>
			</div>
			<div className=" grid grid-cols-3 ml-4 mr-4 gap-4">
				{reviews.map((review, index) => {
					return <Review key={index} review={review} />;
				})}
			</div>
		</div>
	);
}

export default Reviews;
