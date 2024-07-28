import React from "react";
import { useState } from "react";
import {
	picture1,
	picture2,
	picture3,
	picture4,
	picture5,
} from "../assets/pictures";
function HomeLook() {
	const [picture, setPicutre] = useState(picture1);

	return (
		<div className="flex relative justify-center items-center text-white w-full">
			<img className=" opacity-90 bg-cover" src={picture}></img>
			<div className="absolute flex flex-col items-center  font-bold text-2xl">
				<h2>Adventure is worthwhile</h2>
				<h3>Discover New Places With Us, Adventure Awaits</h3>
				<button className=" bg-black p-2 px-3 rounded-md  bg-opacity-50">
					Discover More
				</button>
				<div className="bg-black mt-44 space-x-4 px-2 rounded-lg bg-opacity-50">
					<button onClick={() => setPicutre(picture1)}>
						<h1 className=" text-5xl mb-2">●</h1>
					</button>
					<button onClick={() => setPicutre(picture2)}>
						<h1 className=" text-5xl mb-2">●</h1>
					</button>
					<button onClick={() => setPicutre(picture3)}>
						<h1 className=" text-5xl mb-2">●</h1>
					</button>
					<button onClick={() => setPicutre(picture4)}>
						<h1 className=" text-5xl mb-2">●</h1>
					</button>
					<button onClick={() => setPicutre(picture5)}>
						<h1 className=" text-5xl mb-2">●</h1>
					</button>
				</div>
			</div>
		</div>
	);
}

export default HomeLook;
