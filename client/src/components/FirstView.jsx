import React from "react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { pictures } from "../assets/home_look";
function FirstView() {
	const [pictureIndex, setPictureIndex] = useState(0);
	const n = pictures.length;
	const rightPicture = () => {
		setPictureIndex((pictureIndex + 1) % n);
	};
	const leftPicture = () => {
		setPictureIndex((pictureIndex - 1 + n) % n);
	};

	return (
		<div className="flex relative justify-center items-center text-white w-full pt-12 ">
			<img
				className=" opacity-90 bg-cover object-cover h-[36rem] w-full"
				src={pictures[pictureIndex]}
			></img>

			<div className="absolute flex items-center justify-between w-full h-full text-5xl p-2">
				<SlArrowLeft
					className=" bg-black bg-opacity-50 p-2 rounded-md transition-transform duration-300 ease-in-out  hover:text-6xl cursor-pointer"
					onClick={leftPicture}
				></SlArrowLeft>
				<SlArrowRight
					className=" bg-black bg-opacity-50 p-2 rounded-md transition-transform duration-300 ease-in-out  hover:text-6xl cursor-pointer"
					onClick={rightPicture}
				></SlArrowRight>
			</div>
			<div className="absolute flex flex-col items-center  font-bold text-2xl ">
				<div className=" bg-black p-4 bg-opacity-50 rounded-md">
					<div>
						<h2 className=" flex justify-center capitalize">
							Adventure is worthwhile
						</h2>
					</div>
					<div>
						<h3>Discover New Places With Us, Adventure Awaits</h3>
					</div>
				</div>

				<button
					className=" bg-black p-2 px-3 rounded-md mt-3  bg-opacity-50 hover:text-3xl hover:mt-2 cursor-pointer"
					onClick={() => window.scrollBy(0, 750)}
				>
					Discover More
				</button>
			</div>
		</div>
	);
}

export default FirstView;
