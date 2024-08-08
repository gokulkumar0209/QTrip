import React, { useEffect, useRef, useState } from "react";
import HomeLook from "./HomeLook";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";
import About from "./About";
import Packages from "./Packages";

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
			<div ref={newHomeRef} className=" scroll-mt-14">
				<HomeLook />
			</div>
			<div ref={newPackageRef} className=" scroll-mt-14">
				<Packages />
			</div>
			<div ref={newServiceRef} className=" scroll-mt-14">
				<Services />
			</div>
			<div ref={newReviewRef} className=" scroll-mt-14">
				<Reviews />
			</div>
			<div ref={newContactRef} className=" scroll-mt-14">
				<Contact />
			</div>
			<div ref={newAboutRef} className=" scroll-mt-14">
				<About />
			</div>
		</div>
	);
}

export default Home;
