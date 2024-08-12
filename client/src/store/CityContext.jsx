import React, { createContext, useState } from "react";

// Create the context
export const CityContext = createContext();

// Create the provider component
export const CityProvider = ({ children }) => {
	const [selectedCity, setSelectedCity] = useState(""); // Default value for city

	return (
		<CityContext.Provider value={{ selectedCity, setSelectedCity }}>
			{children}
		</CityContext.Provider>
	);
};
