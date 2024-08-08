import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar({
	homeRef,
	packageRef,
	serviceRef,
	reviewRef,
	contactRef,
	aboutRef,
}) {
	const homeButtonRef = useRef(null);
	const packageButtonRef = useRef(null);
	const serviceButtonRef = useRef(null);
	const reviewButtonRef = useRef(null);
	const contactButtonRef = useRef(null);
	const aboutButtonRef = useRef(null);
	const refs = [
		homeButtonRef,
		packageButtonRef,
		serviceButtonRef,
		reviewButtonRef,
		contactButtonRef,
		aboutButtonRef,
	];

	const navigate = useNavigate();
	const [logS, setLogS] = useState(false);
	const location = useLocation();
	const resetButton = () => {
		for (let ref of refs) {
			ref.current.style.backgroundColor = "black";
		}
	};
	const scrollToElement = (e, elementRef, buttonRef) => {
		if (elementRef.current) {
			resetButton();
			buttonRef.current.style.backgroundColor = "gray";
			elementRef.current.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate("/");
			resetButton();
			setTimeout(() => {
				if (buttonRef.current) {
					buttonRef.current.click();
				}
			}, 100);
		}
	};
	useEffect(() => {
		const loggedIn = localStorage.getItem("loggedIn") === "true";
		setLogS(loggedIn);
	}, [location]);

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.setItem("loggedIn", false);
		setLogS(false);
		window.location.reload();
	};
	return (
		<div className=" text-white flex justify-between bg-black text-lg p-2 fixed w-full">
			<div>
				<Link to={"/"} className="m-1">
					<button onClick={resetButton} className=" ml-6 text-xl p-2">
						Qtrip
					</button>
				</Link>
			</div>

			<div className="flex justify-around space-x-4 mr-6 m-1">
				<button
					ref={homeButtonRef}
					onClick={(e) => scrollToElement(e, homeRef, homeButtonRef)}
					className=" px-2 rounded-md"
				>
					Home
				</button>
				<button
					className=" px-2 rounded-md"
					ref={packageButtonRef}
					onClick={(e) => scrollToElement(e, packageRef, packageButtonRef)}
				>
					Packages
				</button>
				<button
					className=" px-2 rounded-md"
					ref={serviceButtonRef}
					onClick={(e) => scrollToElement(e, serviceRef, serviceButtonRef)}
				>
					Services
				</button>
				<button
					className=" px-2 rounded-md"
					ref={reviewButtonRef}
					onClick={(e) => scrollToElement(e, reviewRef, reviewButtonRef)}
				>
					Review
				</button>
				<button
					className=" px-2 rounded-md"
					ref={contactButtonRef}
					onClick={(e) => scrollToElement(e, contactRef, contactButtonRef)}
				>
					Contact
				</button>
				<button
					className=" px-2 rounded-md"
					ref={aboutButtonRef}
					onClick={(e) => scrollToElement(e, aboutRef, aboutButtonRef)}
				>
					About Us
				</button>
			</div>

			<div className=" text-white font-semibold">
				{!logS ? (
					<div className=" space-x-2 m-1 mr-6">
						<Link to={"/signup"}>
							<button className=" bg-gray-700 p-1 px-2 mx-2 rounded-md">
								Signup
							</button>
						</Link>
						<Link to={"/login"}>
							<button className=" bg-gray-700 p-1 px-2 mx-2 rounded-md">
								Login
							</button>
						</Link>
					</div>
				) : (
					<div className=" space-x-2 mr-6">
						<button
							className=" bg-gray-700 p-1 px-2 mx-2 rounded-md"
							onClick={() => navigate("/profile")}
						>
							Profile
						</button>
						<button
							className=" bg-gray-700 p-1 px-2 mx-2 rounded-md"
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
