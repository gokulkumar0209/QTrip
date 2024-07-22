import React from "react";

function Home() {
	const image =
		"https://plus.unsplash.com/premium_photo-1667530621211-7924dc31a4a8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	return (
		<div>
			<div
				className="container bg-cover bg-center"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div>
				<h2>Adventure is worthwhile</h2>
				<h3>Discover New Places With Us, Adventure Awaits</h3>
				<button>Discover More</button>
			</div>
		</div>
	);
}

export default Home;
