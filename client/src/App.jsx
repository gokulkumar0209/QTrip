import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";
import Adventure_Detail from "./components/AdventureDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Review_Detail from "./components/ReviewDetail";

function App() {
	const [homeRef, setHomeRef] = useState(null);
	const [serviceRef, setServiceRef] = useState(null);
	const [packageRef, setPackageRef] = useState(null);
	const [reviewRef, setReviewRef] = useState(null);
	const [contactRef, setContactRef] = useState(null);
	const [aboutRef, setAboutRef] = useState(null);

	return (
		<>
			<BrowserRouter>
				<div className=" bg-gray-100 ">
					<div className=" sticky top-0 w-full z-50 ">
						<NavBar
							homeRef={homeRef}
							packageRef={packageRef}
							serviceRef={serviceRef}
							reviewRef={reviewRef}
							contactRef={contactRef}
							aboutRef={aboutRef}
						/>
					</div>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									setHomeRef={setHomeRef}
									setPackageRef={setPackageRef}
									setServiceRef={setServiceRef}
									setReviewRef={setReviewRef}
									setContactRef={setContactRef}
									setAboutRef={setAboutRef}
								/>
							}
						></Route>
						<Route
							path="/adventures/:selectedCity"
							element={<Adventures />}
						></Route>
						<Route
							path="/adventure/:adtname/:adtId"
							element={<Adventure_Detail />}
						></Route>
						<Route path="/signup" element={<Signup />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/reviews" element={<Review_Detail />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
