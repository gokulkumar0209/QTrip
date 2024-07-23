import React from "react";

function Home() {
	const image =
		"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msG0Y.img";
	return (
		<div>
			<div className="flex relative justify-center items-center">
				<img className=" opacity-90" src={image}></img>
				<div className="absolute flex flex-col items-center text-white  font-bold text-2xl">
					<h2>Adventure is worthwhile</h2>
					<h3>Discover New Places With Us, Adventure Awaits</h3>
					<button>Discover More</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
