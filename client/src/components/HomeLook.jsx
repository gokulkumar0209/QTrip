import React from "react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { pictures } from "../assets/home_look";
function HomeLook() {
	const [pictureIndex, setPicutreIndex] = useState(0);
	const n = pictures.length;
	const rightPicture = () => {
		setPicutreIndex((pictureIndex + 1) % n);
	};
	const leftPicture = () => {
		setPicutreIndex((pictureIndex - 1 + n) % n);
	};

	return (
		<div className="flex relative justify-center items-center text-white w-full">
			<img className=" opacity-90 bg-cover" src={pictures[pictureIndex]}></img>
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
			<div className="absolute flex flex-col items-center  font-bold text-2xl">
				<h2>Adventure is worthwhile</h2>
				<h3>Discover New Places With Us, Adventure Awaits</h3>
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

export default HomeLook;
