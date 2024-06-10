import React, { useEffect, useState, useRef, useContext } from "react";
import { CgClose } from "react-icons/cg";
import "./search.css";
import { GoSearch } from "react-icons/go";
import {
  messages,
  placeholderMessages,
  searchFilter,
  searchLabels,
} from "../../constants";
import { near } from "../assets/icons";
import { getPlaces, getSuggestions } from "../../Apis/places/autoComplete";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { StepStatus } from "@chakra-ui/react";
import { placesContext } from "../../Context/placesContext";
import { CiLocationOn } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { getCity } from "../../Apis/SearchApi";

const Search = ({ show, onClose }) => {
  const [showSeggest, setShowSeggest] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for cities");
  const [headingMessage, setHeadingMessage] = useState("where to?");
  const [activeItem, setActiveItem] = useState("cities");
  const [input, setInput] = useState("");
  const [suggestions, setSeggestions] = useState([]);

  const [placeName, setPlaceName, recentViewed, setRecentViewed] =
    useContext(placesContext);

  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleSearchSeggest = () => {
    setShowSeggest(true);
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !inputRef.current.contains(event.target)
    ) {
      setShowSeggest(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSearch = (e) => {
    const current = e.target.getAttribute("data-label");
    setActiveItem(current);
    setHeadingMessage(messages[current]);
    setPlaceholder(placeholderMessages[current]);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // useEffect(() => {
  //   getSuggestions(input).then((response) => {
  //     setSeggestions(response.data.data);
  //   });
  // }, [input]);

  const handleSearch = () => {

    setPlaceName('rabat');
    getCity('rabat')
    .then((res)=>{
      if(!recentViewed.length > 0)
        setRecentViewed([...recentViewed,{location_id: res.data.data[0].location_id, city: res.data.data[0].city, region: res.data.data[0].region, image:res.data.data[0].imageUrl}])
      else{
        recentViewed.forEach(el=>{
          if(el.location_id !== res.data.data[0].location_id){
            setRecentViewed([...recentViewed,{location_id: res.data.data[0].location_id, city: res.data.data[0].city, region: res.data.data[0].region, image:res.data.data[0].imageUrl}])
          }
        })

      }

    })
    navigate("/places");
    onClose();
    setSeggestions([]);
  };

  const callTwo = () => {
    onClose();
    setSeggestions([]);
  };

  return (
    <>
      {show && (
        <section className="search-section ">
          <div className="search-modal-overlay  relative z-[2000] ">
            <CgClose
              onClick={callTwo}
              className="search-close-btn cursor-pointer text-white relative z-[2000]"
            />

            <div className=" h-[100vh] mt-[4rem] pb-[10px]  font-montserrat text-lg container mx-auto">
              <div className="">
                <h2 className="font-bold text-center text-[3rem]  tracking-[-1px] ">
                  {headingMessage}
                </h2>
                <ul className="list-none capitalize flex mt-[3rem]  justify-center">
                  {searchFilter.map((item, index) => (
                    <li
                      key={item.label}
                      className={`${
                        activeItem == searchLabels[index]
                          ? "border-b-2 border-black font-bold "
                          : "font-medium"
                      }  pb-2  mr-[3rem] text-[1.1rem] cursor-pointer`}
                      onClick={handleFilterSearch}
                      data-label={searchLabels[index]}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <form
                className="flex w-[70%]  mx-auto   gap-4 mt-[2rem]"
                onSubmit={handleSubmit}
              >
                <div className="relative flex w-full items-center">
                  <input
                    type="search"
                    className="w-full h-full pl-[3.4rem] pr-5  text-[15px] border-[0.1rem] border-[#e0e0e0] rounded-full"
                    placeholder={placeholder}
                    onFocus={handleSearchSeggest}
                    ref={inputRef}
                    onChange={handleChange}
                  />
                  <GoSearch className="absolute text-[1.4rem] left-5" />
                </div>
                <button
                 onClick={handleSearch}
                  type="submit"
                  className="bg-primary hover:opacity-90 py-[14px] px-[24px] text-white capitalize text-sm font-bold rounded-full px-[1.8rem]"
                >
                  search
                </button>
              </form>
              {showSeggest && (
                <div className="w-[70%]  mt-3 mx-auto">
                  <div
                    className="rounded-lg   shadow-3xl w-[83%]"
                    ref={modalRef}
                  >
                    <>
                      {suggestions.length > 0 ? (
                        <div className=" h-[300px] overflow-y-scroll">
                          {suggestions.map((el) => (
                            <div
                            key={el.description}
                            >
                              {/* <div
                              onClick={() => hanldeSearch(el.city)}
                              key={el.city}
                              className="text-left p-4  flex gap-4 items-center hover:text-primary  cursor-pointer"
                            >
                              <FaLocationDot className="text-primary" size={20} />
                              {el.city}
                            </div> */}
                              <div
                
                                onClick={() => handleSearch(el.city)}
                                className="border-b border-[#e0e0e0] font-medium   cursor-pointer"
                              >
                                  <div className="hover:bg-[#f2f2f2] py-3">
                                      <div className="flex pl-6 gap-2">
                                      <div className="flex justify-center items-center">
                                      {/* <FaLocationDot
                                        className="text-gray-400"
                                        size={16}
                                      /> */}
                                      {/* <CiLocationOn  size={28}/> */}
                                      <IoLocationOutline size={28}/>
                                    </div>
                                    <div className="leading-[1.2rem] flex flex-col">
                                      <p className="text-[15px] font-bold  ">
                                        {el.city}
                                      </p>
                                      <span className="text-[12px]  text-[#777] ">
                                        {el.description}
                                      </span>
                                    </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          ))}
                          {recentViewed.length > 0 && (
                            <div className="text-left mt-3 ">
                              <h3 className="text-lg font-bold mb-2 pl-8">
                                Recent Viewed
                              </h3>
                              {
                              recentViewed.map(el=>(
                                <div 
                                key={el.city}
                                className="flex items-center gap-4 py-2 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                                <div className="w-14 h-14 border border-[#e0e0e0]  rounded-md">
                                  <img
                                    src={el.image}
                                    className="w-full h-full rounded-md"
                                  />
                                </div>
                                <div className=" leading-[1rem]">
                                  <p className="text-[1rem] font-medium">
                                    {el.city}
                                  </p>
                                  <span className="text-[12px] text-[#777]">
                                    {el.region}
                                  </span>
                                </div>
                              </div>
                              ))                            
                              }
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-4 py-3 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                            <div className="bg-[#f2f2f2] pt-2 pl-1  w-14 h-14 border border-[#e0e0e0] rounded-md">
                              <img src={near} className="w-12 h-12" />
                            </div>
                            <h2>Nearby</h2>
                          </div>
                          {recentViewed.length > 0 && (
                            <div className="text-left mt-3 ">
                              <h3 className="text-sm font-bold mb-2 pl-8">
                                Recent Viewed
                              </h3>
                              {
                              recentViewed.map(el=>(
                                <div 
                                key={el.city}
                                className="flex items-center gap-4 py-2 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                                <div className="w-14 h-14 border border-[#e0e0e0]  rounded-md">
                                  <img
                                    src={el.image}
                                    className="w-full h-full rounded-md"
                                  />
                                </div>
                                <div className=" leading-[1rem]">
                                  <p className="text-[1rem] font-medium">
                                    {el.city}
                                  </p>
                                  <span className="text-[12px] text-[#777]">
                                    {el.region}
                                  </span>
                                </div>
                              </div>
                              ))                            
                              }
                            </div>
                          )}
                        </>
                      )}
                    </>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Search;
