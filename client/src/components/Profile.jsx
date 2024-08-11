import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
	const [data, setData] = useState([]);
	const userId = localStorage.getItem("userId");
	const authToken = localStorage.getItem("authToken");
	const reservUrl = import.meta.env.VITE_GET_RESERVATION + userId;
	const deleteUrl = import.meta.env.VITE_DELETE_RESERVATION;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(reservUrl, {
					headers: {
						Authorization: `Bearer ${authToken}`, // Include auth token from local storage
					},
				});
				setData(response.data);
			} catch (error) {
				console.error("Failed to fetch reservations:", error);
			}
		}
		fetchData();
	}, [authToken, reservUrl]);

	const handleDelete = async (e, id) => {
		e.preventDefault();
		try {
			const response = await axios.delete(`${deleteUrl}/${id}`, {
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
				},
			});
			if (response.status === 200) {
				setData((prevData) =>
					prevData.filter((reservation) => reservation.id !== id)
				);
				console.log("Reservation deleted successfully");
			}
		} catch (error) {
			console.error("Failed to delete reservation:", error);
		}
	};

	return (
		<div className="pt-16">
			<div className="bg-gray-300 p-4 rounded-t-lg text-lg font-semibold">
				Your Reservations ({data.length})
			</div>
			<div className="grid grid-cols-4 gap-4 bg-gray-300 p-4 rounded-b-lg">
				{data.length > 0 ? (
					data.map((reservation) => (
						<div
							key={reservation.id}
							className="bg-gray-500 card p-4 rounded-lg shadow-lg"
						>
							<div className="container space-y-4">
								<h2 className="text-xl font-semibold">
									Booked under:{" "}
									<span className="font-normal">{reservation.name}</span>
								</h2>
								<h3 className="text-lg font-medium">
									Adventure:{" "}
									<span className="font-normal">
										{reservation.adventureName}
									</span>
								</h3>
								<div className="text-sm text-gray-200 space-y-1">
									<div>
										<span className="font-medium">Date:</span>{" "}
										{reservation.date}
									</div>
									<div>
										<span className="font-medium">Number of Persons:</span>{" "}
										{reservation.person}
									</div>
									<div>
										<span className="font-medium">Price:</span> ₹
										{reservation.price}
									</div>
									<div>
										<span className="font-medium">Time:</span>{" "}
										{reservation.time.slice(4, -38)}
									</div>
								</div>
								{!reservation.isCancelled ? (
									<button
										onClick={(e) => handleDelete(e, reservation.id)}
										className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
										aria-label={`Delete reservation for ${reservation.name}`}
									>
										Delete
									</button>
								) : (
									<h2 className="mt-4 bg-gray-800 text-white py-2 px-4 rounded text-center">
										Cancelled
									</h2>
								)}
							</div>
						</div>
					))
				) : (
					<div className="col-span-4 text-center text-gray-700">
						No reservations found.
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
