import React, { useContext, useState, useEffect } from "react";
import { getPlaces } from "../../Apis/places/autoComplete";
import { placesContext } from "../../Context/placesContext";
import BounceLoader from "react-spinners/BounceLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import Place from "../Components/Place";
import Attractions from "../Components/Attractions";
import Hotels from "../Components/Hotels";
import Resturants from "../Components/Resturants";
import SkeltonLoader from "../Components/SkeltonLoader";
import { getAttractions } from "../../Apis/SearchApi";


const Places = () => {
  const [placeName, setPlaceName, recentViewed, setRecentViewed] =
    useContext(placesContext);

  const [cityData, setCityData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(null);
  const [active, setActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);


  
  useEffect(() => {
    setCityData([]);
    if (!placeName == "") {
        const fetchData = () => {
          getPlaces(placeName).then((res) => {
            setCityData(res.data.data);
            setActive(res.data.data[0].city);
            setCurrentPage("places");
          });

      };
      fetchData();
    }
  }, [placeName]);



  if (!cityData.length > 0){
    return (
      <div>
        {/* <BounceLoader color="#ededed" /> */}
        {/* <BeatLoader color="#ededed" /> */}
        <SkeltonLoader/>
      </div>
    );
    }
  const filtersItems = [
    { label: cityData[0].city, link: "places", current: false },
    { label: "things to do", link: "attractions", current: false },
    { label: "hotels", link: "hotels", current: false },
    { label: "resturants", link: "restuarants", current: false },
  ];

  const handleSwitch = (e) => {

    if(!e.target.hasAttribute('data-att')){
       const label = e.target.textContent;
        setActive(label);
        let link = "";
        filtersItems.forEach((el) => {
          if (el.label === label) {
            link = el.link;
          }
        });
    
        setCurrentPage(link);
     }

  };
  return (
    <>
      <nav
        className={`font-montserrat font-medium capitalize mb-4 flex gap-4 text-md w-[90%] mx-auto border-b border-[#e0e0e0] transition-all duration-500  `}
      >
        {filtersItems.map((item) => (
          <Link
            key={item.label}
            className={`${
              active == item.label
                ? " border-b-[2px] text-[#000] border-[#000]"
                : ""
            }  font-medium text-[#545454] first:font-bold first:mr-4 py-3 text-[15px] first:flex gap-2 first:text-[18px]  hover:text-[#000]`}
            onClick={handleSwitch}
          >
            {
              item.link == "places" && (
                <svg
                  data-att='svg'
                  className="inline-block"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path
                   data-att='svg'
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.73 7.541a5.274 5.274 0 00-.053.745c0 1.265.506 2.476 1.163 3.536l-3.592.955v-4.67L6.73 7.54zm.53-1.66l-3.928.896-.584.133V21.01l.968-.294 5.45-1.657 5.45 1.657.19.058.195-.044 5.667-1.292.584-.133V5.707l-.917.209-3.268.745a5.338 5.338 0 00-5.066-3.67 5.34 5.34 0 00-4.741 2.89zm10.062 2.26c.002.048.002.097.002.145 0 1.573-.782 3.063-1.663 4.284l-.077.105v.353l4.168-.95v-4.49l-2.43.553zm-3.288 6.368c-.363.386-.706.73-.996 1.019l-.057.057-.002.002-.987.98-.974-.998L11 15.55l-.012-.012c-.308-.306-.679-.675-1.072-1.093v3.273l4.168 1.266v-4.46l-.05-.016zm.41-2.817c-.778 1.077-1.72 2.027-2.437 2.745-.72-.716-1.676-1.675-2.462-2.765-.814-1.128-1.368-2.294-1.368-3.386 0-2.082 1.717-3.795 3.824-3.795 2.107 0 3.823 1.713 3.823 3.795 0 1.098-.56 2.27-1.38 3.406zm-2.803-4.595a.941.941 0 11.72 1.738.941.941 0 01-.72-1.738zm2.616-.065A2.441 2.441 0 109.745 8.9a2.441 2.441 0 004.51-1.868zm5.495 6.584l-4.168.95v4.491l4.168-.95v-4.49zm-15.504.713l4.168-1.108v4.498l-4.168 1.266V14.33z"
                  ></path>
                </svg>
              )
              // <span className="place-animate  relative mr-6"><//span>
            }
            {item.label}
          </Link>
        ))}
      </nav>
      {currentPage === "places" && <Place data={cityData[0]}/>}
      {currentPage === "attractions" && <Attractions />}
      {currentPage === "hotels" && <Hotels />}
      {currentPage === "restuarants" && <Resturants />}
    </>
  );
};

export default Places;
