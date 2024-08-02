import React from "react";

function Login() {
	return (
		<div>
			<div className="grid grid-cols-1">
				<label for="username">Email</label>
				<input type="email" id="username" name="username"></input>
				<label for="password">Password</label>
				<input type="password" id="password" name="password"></input>
				<button type="submit">Login</button>
			</div>
		</div>
	);
}

export default Login;
