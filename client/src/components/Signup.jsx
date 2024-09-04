import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";

function Signup() {
	const navigate = useNavigate();
	const registerUrl = import.meta.env.VITE_POST_REGISTER;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setconfirmpassword] = useState("");
	const [message, setMessage] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(registerUrl, {
				email,
				password,
				confirmpassword: confirmpassword,
			});
			if (response.status == 201) {
				setMessage("Success");
				navigate("/login");
			}
		} catch (error) {
			const mes = error.response.data.message;
			setMessage(mes);
		}
	};
	return (
		<div className=" h-screen w-full flex justify-center items-center bg-gray-500 ">
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 bg-gray-300 p-16 w-[28rem]">
					<div className="flex justify-center text-6xl w-full">
						<RiAccountCircleFill />
					</div>

					<div className=" m-2 ">
						<input
							type="email"
							id="username"
							name="username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							className=" p-2 w-full border-gray-500 border-2 rounded-md"
							required
						></input>
					</div>

					<div className=" m-2 ">
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className=" p-2 w-full border-gray-500 border-2 rounded-md"
							required
						></input>
					</div>
					<div className=" m-2 ">
						<input
							type="password"
							id="confirmpassword"
							name="confirmpassword"
							value={confirmpassword}
							onChange={(e) => setconfirmpassword(e.target.value)}
							placeholder="Confirm Password"
							className=" p-2 w-full border-gray-500 border-2 rounded-md"
							required
						></input>
					</div>
					<div className=" flex justify-center m-2 ">
						<button
							className=" p-2 bg-gray-500 w-full rounded-md hover:bg-gray-600 text-white font-bold"
							type="submit"
						>
							Signup
						</button>
					</div>
					<div className=" flex justify-center">
						{message && <p>{message}</p>}
					</div>
				</div>
			</form>
		</div>
	);
}

export default Signup;
