import React, { useRef } from "react";
import { reviews } from "../assets/reviews";
import Review from "../cards/ReviewCard";
import { useNavigate } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ReviewCard from "../cards/ReviewCard";
function Reviews() {
	const reviewRef = useRef(null);
	const navigate = useNavigate();
	const scrollReview = (position) => {
		if (reviewRef.current) {
			reviewRef.current.scrollBy({
				left: `${position}`, 
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="">
			<div className="flex justify-center my-4  bg-black p-2">
				<h1 className="text-white text-2xl font-bold tracking-widest">
					REVIEWS
				</h1>
			</div>
			<div className=" relative">
				<div
					onClick={() => navigate("/reviews")}
					className=" my-4 pr-4 absolute right-0 -top-7 cursor-pointer  "
				>
					<div className="  rounded-md px-2 bg-black hover:bg-slate-500">
						<h1 className=" text-white font-semibold"> More reviews</h1>
					</div>
				</div>
				<div
					onClick={() => scrollReview(-300)}
					className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 hover:scale-110 transition duration-300 ease-in-out shadow-lg"
				>
					<SlArrowLeft />
				</div>
				<div
					onClick={() => scrollReview(300)}
className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 hover:scale-110 transition duration-300 ease-in-out shadow-lg"				>
					<SlArrowRight />
				</div>

				<div
					ref={reviewRef}
					className=" overflow-x-scroll  whitespace-nowrap no-scrollbar "
				>
					<ReviewCard review={reviews[0]} />
					<ReviewCard review={reviews[1]} />
					<ReviewCard review={reviews[2]} />
					<ReviewCard review={reviews[3]} />
					<ReviewCard review={reviews[4]} />
					<ReviewCard review={reviews[5]} />
				</div>
			</div>
		</div>
	);
}

export default Reviews;
