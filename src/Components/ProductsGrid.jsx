import React, { useEffect, useState } from "react";
import ProductCard from "../UI/ProductCard";
import axios from "axios";

const ProductsGrid = () => {
  const [search, setSearch] = useState([]);
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
      query: "hassan rabat",
      limit: "30",
      offset: "0",
      units: "km",
      location_id: "1",
      currency: "USD",
      sort: "relevance",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "6d70b4da6bmsh34a28bf1f797b42p1c90a8jsn70cbc21d7e29",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const fetching = async () => {
    const response = await axios.request(options);
    setSearch(response.data.data);
  };
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="box-border m-12 container border-2 rounded-3xl px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {search.map((destination, index) => (
          <ProductCard key={index} infos={destination} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
