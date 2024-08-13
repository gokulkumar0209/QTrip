import React, { createContext, useState } from "react";

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState("");
	const [authToken, setAuthToken] = useState("");
	return (
		<IsLoggedInContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, authToken, setAuthToken }}
		>
			{children}
		</IsLoggedInContext.Provider>
	);
};
