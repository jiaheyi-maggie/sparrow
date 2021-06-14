import React from 'react';

// allows data to flow from parent to children 
const CategoriesContext = React.createContext();
export const CategoriesProvider = CategoriesContext.Provider;
export default CategoriesContext;