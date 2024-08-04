import React, { useEffect, useState } from "react";

function Registration({ price }) {
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [total, setTotal] = useState(0);
	// const loggedIn = true;
	const loggedIn = localStorage.getItem("loggedIn");
	useEffect(() => {
		setTotal((parseInt(adult) + parseInt(child)) * price);
	}, [adult, child, price]);
	return (
		<div>
			<div>{price}</div>
			<div>{total}</div>
			<form className={`space-y-4 `} disabled={true}>
				<div>
					<label
						for="name"
						className="block text-sm font-medium text-gray-700 "
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
					/>
				</div>

				<div>
					<label for="date" className="block text-sm font-medium text-gray-700">
						Date
					</label>
					<input
						type="date"
						id="date"
						name="date"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						required
					/>
				</div>

				<div>
					<label
						for="adult"
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
						for="child"
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
						disabled={!loggedIn}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}

export default Registration;
