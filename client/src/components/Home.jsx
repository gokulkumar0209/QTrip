import React, { useState } from "react";
import Cities from "./Cities";

function Home() {
	const picture2 =
		"https://hips.hearstapps.com/hmg-prod/images/beautiful-landscape-view-of-fuji-mountain-in-royalty-free-image-1623253648.jpg";
	const picture1 =
		"https://hips.hearstapps.com/hmg-prod/images/lofoten-summer-landscape-royalty-free-image-1623252210.jpg";
	const picture3 =
		"https://hips.hearstapps.com/hmg-prod/images/tasman-glacier-lake-royalty-free-image-1623252368.jpg";
	const picture4 =
		"https://hips.hearstapps.com/hmg-prod/images/mount-rainier-national-park-royalty-free-image-1623253026.jpg";
	const picture5 =
		"https://hips.hearstapps.com/hmg-prod/images/mt-assiniboine-provincial-park-at-sunrise-royalty-free-image-1623253564.jpg";
	const [picture, setPicutre] = useState(picture1);
	return (
		<div>
			<div className="flex relative justify-center items-center text-white w-full">
				<img className=" opacity-90 bg-cover" src={picture}></img>
				{/* <video src="https://qtrip-lfif.onrender.com/static/home/images/vid-1.mp4" loop autoPlay muted></video> */}
				<div className="absolute flex flex-col items-center  font-bold text-2xl">
					<h2>Adventure is worthwhile</h2>
					<h3>Discover New Places With Us, Adventure Awaits</h3>
					<button className=" bg-black p-2 px-3 rounded-md ">
						Discover More
					</button>
					<div className="bg-black mt-44 space-x-4">
						<button onClick={() => setPicutre(picture1)}>1</button>
						<button onClick={() => setPicutre(picture2)}>2</button>
						<button onClick={() => setPicutre(picture3)}>3</button>
						<button onClick={() => setPicutre(picture4)}>4</button>
						<button onClick={() => setPicutre(picture5)}>5</button>
					</div>
				</div>
			</div>
			<Cities />
		</div>
	);
}

export default Home;
