import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
	const [data, setData] = useState([]);
	const userId = localStorage.getItem("userId");
	const authToken = localStorage.getItem("authToken");
	const reservUrl = import.meta.env.VITE_GET_RESERVATION + userId;
	const deleteUrl = import.meta.env.VITE_DELETE_RESERVATION;
	const payLoad = { userId: userId };
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(reservUrl, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include auth token from local storage
					},
				});
				console.log(response.data);
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);
	const handleDelete = async (e, id) => {
		e.preventDefault();
		try {
			const response = await axios.delete(`${deleteUrl}/${id}`, {
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
				},
				data: payLoad,
			});
			if (response.status === 200) {
				// Ensure the delete was successful
				setData((prevData) =>
					prevData.filter((reservation) => reservation.id !== id)
				); // Update state
				console.log("Successful");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			{data.map((reservation) => (
				<div key={reservation.id}>
					<div>{reservation.name}</div>
					<div>{reservation.date}</div>
					<div>{reservation.person}</div>
					<button onClick={(e) => handleDelete(e, reservation.id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
}

export default Profile;
