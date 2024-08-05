import { useState } from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";
import Adventure_Detail from "./components/Adventure_Detail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	const key = "city";
	const value = "bengaluru";
	localStorage.setItem(key, value);
	localStorage.setItem("adventure_id", "2447910730");
	localStorage.setItem("loggedIn", false);
	return (
		<>
			<BrowserRouter>
				<div className=" bg-gray-200">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/adventures" element={<Adventures />}></Route>
						<Route
							path="/adventure/detail"
							element={<Adventure_Detail />}
						></Route>
						<Route path="/signup" element={<Signup />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
