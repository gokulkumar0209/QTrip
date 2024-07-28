import React, { useState } from "react";
import Cities from "./Cities";
import HomeLook from "./HomeLook";
import Services from "./Services";

function Home() {
	return (
		<div>
			<HomeLook />
			<Cities />
			<Services />
		</div>
	);
}

export default Home;
