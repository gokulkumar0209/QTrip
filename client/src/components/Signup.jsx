import React from "react";

function Signup() {
	return (
		<div>
			<form>
				<div className="grid grid-cols-1">
					<label for="username">Email</label>
					<input type="email" id="username" name="username"></input>
					<label for="password">Password</label>
					<input type="password" id="password" name="password"></input>
					<button type="submit">Signup</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
