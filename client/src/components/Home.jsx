import React, { useState } from "react";
import Cities from "./Cities";
import HomeLook from "./HomeLook";
import Services from "./Services";
import Reviews from "./Reviews";

function Home() {
	return (
		<div>
			<HomeLook />
			<Cities />
			<Services />
			<Reviews />
		</div>
	);
}

export default Home;
