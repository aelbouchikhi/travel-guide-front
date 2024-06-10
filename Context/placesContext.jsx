import { useState, createContext, useEffect } from "react";
import axios from "axios";


export const placesContext = createContext();
const PlacesContextProvider = ({ children }) => {
    const [placeName, setPlaceName] = useState('');
    const [recentViewed, setRecentViewed] = useState([]);



  return (
    <placesContext.Provider
      value={[placeName, setPlaceName, recentViewed, setRecentViewed]}
    >
      {children}
    </placesContext.Provider>
  );
};
export default PlacesContextProvider;
