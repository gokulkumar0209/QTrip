import { useState } from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";

function App() {
	const key = "city";
	const value = "bengaluru";
	localStorage.setItem(key, value);

	return (
		<>
			<BrowserRouter>
				<div className=" bg-gray-200">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/adventures" element={<Adventures />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
