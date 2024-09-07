import React from "react";

function About() {
	return (
		<div className=" bg-black">
			<div className=" grid grid-cols-3 text-white ml-8">
				<div className=" space-y-2 mt-10">
					<h1 className=" text-xl font-bold">About Us</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus consectetur eveniet quam aliquid voluptas vel et
						possimus dolore ea fugit accusamus
					</p>
				</div>
				<div className="ml-20 space-y-2 mt-10">
					<h1 className="text-xl font-bold">Contact Us</h1>
					<div className="">Email : quitrip@gmail.com </div>
					<div>Phone: 1234567890</div>
				</div>
				<div className="ml-20 space-y-2 mt-10">
					<h1 className="text-xl font-bold">Follow Us</h1>
					<div>FaceBook</div>
					<div>Instagram</div>
					<div>LinkedIn</div>
					<div>Twitter</div>
				</div>
			</div>
			<hr className=" bg-white m-10 mx-20" />

			<div className=" text-white capitalize flex justify-center text-xl">
				<h1 className=" mb-10">
					Created by XYZ | © QTrip 2024 | all rights reserved!
				</h1>
			</div>
		</div>
	);
}

export default About;
