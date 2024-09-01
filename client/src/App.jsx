import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CityProvider } from "./store/CityContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Adventures from "./components/Adventures";
import Adventure_Detail from "./components/AdventureDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Review_Detail from "./components/ReviewDetail";
import { AdventureIdProvider } from "./store/AdventureIdContext";
import { IsLoggedInProvider } from "./store/IsLoggedInContext";

function App() {
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
			<BrowserRouter>
				<IsLoggedInProvider>
					<AdventureIdProvider>
						<CityProvider>
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
									<Route path="/adventures/:selectedCity" element={<Adventures />}></Route>
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
						</CityProvider>
					</AdventureIdProvider>
				</IsLoggedInProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
