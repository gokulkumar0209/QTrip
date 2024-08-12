import React, { createContext, useState } from 'react';

// Create the context
export const CityContext = createContext();

// Create the provider component
export const CityProvider = ({ children }) => {
    const [city, setCity] = useState(''); // Default value for city

    return (
        <CityContext.Provider value={{ city, setCity }}>
            {children}
        </CityContext.Provider>
    );
};
