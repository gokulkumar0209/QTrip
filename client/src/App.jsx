import { createContext, useState } from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import { CityContext } from "./store/CityContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";
import Adventure_Detail from "./components/AdventureDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Review_Detail from "./components/ReviewDetail";

function App() {
	const key = "city";
	const value = "bengaluru";
	const [city, setCity] = useState("bengaluru");

	localStorage.setItem(key, value);
	const [adventureId, setAdventureId] = useState("2447910730");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	localStorage.setItem("adventure_id", "2447910730");
	localStorage.setItem("loggedIn", false);

	const [homeRef, setHomeRef] = useState(null);
	const [serviceRef, setServiceRef] = useState(null);
	const [packageRef, setPackageRef] = useState(null);
	const [reviewRef, setReviewRef] = useState(null);
	const [contactRef, setContactRef] = useState(null);
	const [aboutRef, setAboutRef] = useState(null);

	return (
		<>
			<CityContext.Provider value={{ city, setCity }}>
				<BrowserRouter>
					<div className=" bg-gray-100 ">
						<div className=" fixed w-full z-50 ">
							<NavBar
								serviceRef={serviceRef}
								homeRef={homeRef}
								packageRef={packageRef}
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
							<Route path="/adventures" element={<Adventures />}></Route>
							<Route
								path="/adventure/detail"
								element={<Adventure_Detail />}
							></Route>
							<Route path="/signup" element={<Signup />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/profile" element={<Profile />}></Route>
							<Route path="/reviews" element={<Review_Detail />}></Route>
						</Routes>
					</div>
				</BrowserRouter>
			</CityContext.Provider>
		</>
	);
}

export default App;
