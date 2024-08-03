import React, { useState } from "react";
import axios from "axios";
function Signup() {
	const registerUrl = import.meta.env.VITE_POST_REGISTER;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setconfirmpassword] = useState("");
	const [message, setMessage] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(registerUrl, {
				email,
				password,
				confirmpassword: confirmpassword,
			});
			if (res.status == 201) {
				setMessage("Success");
			}
		} catch (error) {
			setMessage(error.res);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1">
					<label for="username">Email</label>
					<input
						type="email"
						id="username"
						name="username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<label for="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<label for="confirmpassword">confirmpassword</label>
					<input
						type="confirmpassword"
						id="confirmpassword"
						name="confirmpassword"
						value={confirmpassword}
						onChange={(e) => setconfirmpassword(e.target.value)}
					></input>
					<button type="submit">Signup</button>
				</div>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}

export default Signup;
