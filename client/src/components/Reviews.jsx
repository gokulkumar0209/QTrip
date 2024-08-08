import React from "react";
import { reviews } from "../assets/reviews";
import Review from "./Review";
import { useNavigate } from "react-router-dom";
function Reviews() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex justify-center my-4  bg-black p-2">
				<h1 className=" text-white flex justify-between gap-2 text-2xl font-bold">
					<span>R</span>
					<span>E</span>
					<span>V</span>
					<span>I</span>
					<span>E</span>
					<span>W</span>
					<span>S</span>
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
					className=" m-4 h-64 w-64 inline-block absolute pr-4 hover:scale-105"
				>
					<div className=" h-full  w-full flex rounded-lg items-center justify-center bg-black   hover:cursor-pointer  ">
						<h1 className=" text-white">Click here for more reviews</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
