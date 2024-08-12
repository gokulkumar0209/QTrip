import React, { useState } from "react";
import { picture } from "../assets/contacts";
function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	return (
		<div>
			<div className="flex justify-center my-4 bg-black p-2">
				<h1 className="text-white text-2xl font-bold tracking-widest">
					CONTACT US
				</h1>
			</div>
			<div className=" flex justify-around text-lg">
				<div className=" container w-96 h-96 ml-20 my-2 rounded-md">
					<img className=" rounded-md " src={picture}></img>
				</div>
				<div className="mr-20  bg-gray-400 my-2  w-96 h-96 rounded-md">
					<form className=" p-4 my-2 ">
						<div className=" grid  grid-rows-6  gap-y-2 ">
							<input
								className="w-full rounded-md p-2 "
								type="text"
								id="name"
								name="name"
								placeholder="name"
								required
							/>

							<input
								className="rounded-md p-2"
								type="email"
								id="email"
								name="email"
								placeholder="email"
								required
							/>

							<textarea
								className="rounded-md p-2  row-span-3"
								id="message"
								name="message"
								rows="4"
								required
								placeholder="message"
							></textarea>

							<button
								className=" flex justify-center p-2 mt-2 bg-black text-white rounded-md"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
