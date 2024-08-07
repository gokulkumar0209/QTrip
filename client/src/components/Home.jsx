import React, { useState } from "react";
import Cities from "./Cities";
import HomeLook from "./HomeLook";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";
import About from "./About";

function Home() {
	return (
		<div>
			<HomeLook />
			<Cities />
			<Services />
			<Reviews />
			<Contact />
			<About/>
		</div>
	);
}

export default Home;
