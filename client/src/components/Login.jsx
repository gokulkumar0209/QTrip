import React, { useState } from "react";
import axios from "axios";
function Login() {
	const loginUrl = import.meta.env.VITE_POST_LOGIN;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(loginUrl, {
				email: email,
				password: password,
			});
			if (res.status == 201) {
				setMessage("Login Success");
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
					<button type="submit">Login</button>
				</div>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}

export default Login;
