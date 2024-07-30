import { useState } from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";
import Adventure_Detail from "./components/Adventure_Detail";

function App() {
	const key = "city";
	const value = "bengaluru";
	localStorage.setItem(key, value);
	localStorage.setItem("adventure_id", "2447910730");
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
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
