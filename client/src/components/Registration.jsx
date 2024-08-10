import React, { useEffect, useState } from "react";
import axios from "axios";

function Registration({ advent }) {
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [total, setTotal] = useState(0);
	const [name, setName] = useState("");
	const formatDate = (date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	};

	// Initialize the state with today's date in yyyy-MM-dd format
	let tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	const [date, setDate] = useState(formatDate(tomorrow));
	const price = advent.costPerHead;
	const userId = localStorage.getItem("userId");
	const authToken = localStorage.getItem("authToken");
	const [message, setMessage] = useState("");

	const reservationUrl = import.meta.env.VITE_POST_RESERVATION;
	const loggedIn = localStorage.getItem("loggedIn");

	useEffect(() => {
		setTotal((parseInt(adult) + parseInt(child)) * price);
	}, [adult, child, price]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payLoad = {
			userId: userId,
			name: name,
			date: formatDate(new Date(date)), // Convert the date string to a Date object
			person: parseInt(adult) + parseInt(child),
			adventure: advent.id,
		};
		if (loggedIn == false) {
			try {
				const res = await axios.post(reservationUrl, payLoad, {
					headers: {
						Authorization: `Bearer ${authToken}`,
						"Content-Type": "application/json",
					},
				});
				if (res.status === 200) {
					setMessage("Registration success");
				}
			} catch (error) {
				setMessage(error.response.data.message);
			}
		} else {
			setMessage("Please Login");
		}
	};

	return (
		<div className=" border-8 mr-4 border-gray-600 rounded-xl bg-gray-400 ">
			<div className=" p-2 pt-6">
				<div className="flex justify-center text-xl font-bold">
					<h2 className="mt-2">Make a reservation for {advent.name}</h2>
				</div>
				<div className="capitalize mt-6">
					<div className="grid grid-cols-4">
						<h3 className="col-span-3 flex justify-end">Price per person</h3>
						<h3 className="col-span-1 flex justify-end font-bold">₹{price}</h3>
					</div>
					<div className="grid grid-cols-4 mt-2">
						<h3 className="col-span-3 flex justify-end">Total</h3>
						<h3 className="col-span-1 flex justify-end font-bold">₹{total}</h3>
					</div>
				</div>
				<form className="space-y-4 mt-6" onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter your name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div>
						<label
							htmlFor="date"
							className="block text-sm font-medium text-gray-700"
						>
							Date
						</label>
						<input
							type="date"
							id="date"
							name="date"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>

					<div>
						<label
							htmlFor="adult"
							className="block text-sm font-medium text-gray-700"
						>
							Adults
						</label>
						<input
							type="number"
							id="adult"
							name="adult"
							min="0"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Number of adults"
							required
							value={adult}
							onChange={(e) => setAdult(e.target.value)}
						/>
					</div>

					<div>
						<label
							htmlFor="child"
							className="block text-sm font-medium text-gray-700"
						>
							Children
						</label>
						<input
							type="number"
							id="child"
							name="child"
							min="0"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Number of children"
							required
							value={child}
							onChange={(e) => setChild(e.target.value)}
						/>
					</div>

					<div>
						<button
							type="submit"
							className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
							// disabled={!loggedIn}
						>
							Register
						</button>
					</div>
				</form>
				<div className=" flex justify-center p-2">{message && <p>{message}</p>}</div>
			</div>
		</div>
	);
}

export default Registration;
