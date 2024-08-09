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
					CONTACT
				</h1>
			</div>
			<div className=" flex justify-around text-lg">
				<img className=" w-96 h-96 ml-20 my-2 rounded-md" src={picture}></img>

				<form className="mr-20">
					<div className=" grid  gap-y-2">
						<label for="name">Name</label>
						<input
							className="w-96 rounded-sm p-2"
							type="text"
							id="name"
							name="name"
							placeholder="name"
							required
						/>

						<label for="email">Email</label>
						<input
							className="rounded-sm p-2"
							type="email"
							id="email"
							name="email"
							placeholder="email"
							required
						/>

						<label for="message">Message</label>
						<textarea
							className="rounded-sm p-2"
							id="message"
							name="message"
							rows="4"
							required
							placeholder="message"
						></textarea>

						<button
							className=" flex justify-center p-2 bg-black text-white rounded-sm"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
