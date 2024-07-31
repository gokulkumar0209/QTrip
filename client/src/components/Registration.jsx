import React from "react";

function Registration() {
	return (
		<div>
			<form className="space-y-4">
				<div>
					<label for="name" className="block text-sm font-medium text-gray-700">
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
					/>
				</div>

				<div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Registration;
