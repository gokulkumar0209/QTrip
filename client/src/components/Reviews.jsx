import React from "react";
import { reviews } from "../assets/reviews";
import Review from "./Review";
import { useNavigate } from "react-router-dom";
function Reviews() {
	const navigate = useNavigate();
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

			<div className=" overflow-auto whitespace-nowrap relative">
				<Review review={reviews[0]} />
				<Review review={reviews[1]} />
				<Review review={reviews[2]} />
				<Review review={reviews[3]} />
				<Review review={reviews[4]} />
				<Review review={reviews[5]} />

				<div
					onClick={() => navigate("/reviews")}
					className="shadow-lg rounded-lg m-4 h-64 w-64 inline-block absolute bg-blue-100"
				>
					<div className=" h-full  w-full flex items-center justify-center ">
						<h1 className="text-blue-500">Click here for more reviews</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
