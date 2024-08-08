import React, { useEffect, useRef, useState } from "react";
import Cities from "./Cities";
import HomeLook from "./HomeLook";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";
import About from "./About";

function Home({
	setHomeRef,
	setPackageRef,
	setServiceRef,
	setReviewRef,
	setContactRef,
	setAboutRef,
}) {
	const newServiceRef = useRef(null);
	const newHomeRef = useRef(null);
	const newPackageRef = useRef(null);
	const newReviewRef = useRef(null);
	const newContactRef = useRef(null);
	const newAboutRef = useRef(null);
	useEffect(() => {
		setHomeRef(newHomeRef);
		setPackageRef(newPackageRef);
		setServiceRef(newServiceRef);
		setReviewRef(newReviewRef);
		setContactRef(newContactRef);
		setAboutRef(newAboutRef);
	}, [
		newHomeRef,
		newPackageRef,
		newServiceRef,
		newReviewRef,
		newContactRef,
		newAboutRef,
	]);
	return (
		<div>
			<div ref={newHomeRef}>
				<HomeLook />
			</div>
			<div ref={newPackageRef}>
				<Cities />
			</div>
			<div ref={newServiceRef}>
				<Services />
			</div>
			<div ref={newReviewRef}>
				<Reviews />
			</div>
			<div ref={newContactRef}>
				<Contact />
			</div>
			<div ref={newAboutRef}>
				<About />
			</div>
		</div>
	);
}

export default Home;
