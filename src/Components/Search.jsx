import React, { useEffect, useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import "./search.css";
import { GoSearch } from "react-icons/go";
import { messages, placeholderMessages, searchFilter, searchLabels } from "../../constants";
import { near } from "../assets/icons";
import { getCity, getResturants } from "../../Apis/SearchApi";



const Search = ({ show, onClose }) => {
  const [showSeggest, setShowSeggest] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for cities");
  const [headingMessage, setHeadingMessage] = useState("where to?");
  const [activeItem, setActiveItem] = useState('cities');
  const [input, setInput] = useState('')


  const modalRef = useRef(null);
  const inputRef = useRef(null);

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
      const current = e.target.getAttribute('data-label')
       setActiveItem(current)
       setHeadingMessage(messages[current])
       setPlaceholder(placeholderMessages[current]);
  };
  const handleChange = (e) => {
    setInput(e.target.value)
  } 
  const handleSubmit = (e) => {
    console.log(input);
    e.preventDefault();
  }

  
  // getCity('rabat').then((response)=>console.log(response.data));
  getResturants('rabat').then((response)=>console.log(response.data))

  return (
    <>
      {show && (
        <section className="search-section">
          <div className="search-modal-overlay relative z-[2000] ">
            <CgClose
              onClick={onClose}
              className="search-close-btn cursor-pointer text-white relative z-[2000]"
            />

            <div className="text-center  pt-[6rem] font-montserrat text-lg container mx-auto">
              <div className="">
                <h2 className="font-bold text-[3rem]  tracking-[-1px] ">
                    {headingMessage}
                </h2>
                <ul className="list-none capitalize flex mt-[3rem]  justify-center">
                  {searchFilter.map((item,index) => (
                    <li
                      key={item.label}
                      className={`${activeItem == searchLabels[index]? 'border-b-2 border-black font-bold ': 'font-medium'}  pb-2  mr-[3rem] text-[1.1rem] cursor-pointer`}
                      onClick={handleFilterSearch}
                      data-label={searchLabels[index]}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <form
                className="flex w-[70%]  mx-auto  gap-4 mt-[2rem]"
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
                  type="submit"
                  className="bg-primary hover:opacity-90 py-[14px] px-[24px] text-white capitalize text-sm font-bold rounded-full px-[1.8rem]"
                >
                  search
                </button>
              </form>
              {showSeggest && (
                <div className="w-[70%] mt-3 mx-auto ">
                  <div
                    className="rounded-lg  py-2 px-[0.5rem]  shadow-3xl w-[83%]"
                    ref={modalRef}
                  >
                    <div className="flex items-center gap-4 py-3 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                      <div className="bg-[#f2f2f2] pt-2 pl-1  w-14 h-14 border border-[#e0e0e0] rounded-md">
                        <img src={near} className="w-12 h-12" />
                      </div>
                      <h2>Nearby</h2>
                    </div>
                    <div className="text-left mt-3 ">
                      <h3 className="text-sm font-bold mb-2 pl-8">
                        Recent Viewed
                      </h3>
                      <div className="flex items-center gap-4 py-2 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                        <div className="w-14 h-14 border border-[#e0e0e0]  rounded-md">
                          <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fb/25/a5/caption.jpg?w=400&h=200&s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fb/25/a5/caption.jpg?w=800&h=300&s=1"
                            className="w-full h-full rounded-md"
                          />
                        </div>
                        <div className=" leading-[1rem]">
                          <p className="text-[1rem] font-medium">Morocco</p>
                          <span className="text-[12px] text-[#777]">
                            Affrica
                          </span>
                        </div>
                        
                      </div>
                      <div className="flex items-center gap-4 py-2 pl-8 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
                        <div className="w-14 h-14 border border-[#e0e0e0]  rounded-md">
                          <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3a/6f/e7/kasbah-des-oudaias.jpg?w=400&h=200&s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3a/6f/e7/kasbah-des-oudaias.jpg?w=800&h=300&s=1"
                            className="w-full h-full rounded-md"
                          />
                        </div>
                        <div className=" leading-[1rem]">
                          <p className="text-[1rem] font-medium">Rabat</p>
                          <span className="text-[12px] text-[#777]">
                            Rabat-Salé-Kenitra
                          </span>
                        </div>
                        
                      </div>
                    </div>
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
