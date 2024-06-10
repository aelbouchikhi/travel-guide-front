import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { getAttractions } from "../../Apis/SearchApi";
import { placesContext } from "../../Context/placesContext";

const SlideSlick = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLefttArrow, setShowLefttArrow] = useState(false);
  const [attractions, setAttractions] = useState([])
  

  const [placeName, setPlaceName, recentViewed, setRecentViewed] =
  useContext(placesContext);
  
  useEffect(() => {
    getAttractions(placeName)
    .then(res=>setAttractions(res.data.data))
  }, []);

  
  const handleImage = (element) => {
    const defaultImageUrl = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/1e/34/fe/tombe-dei-merenidi.jpg?w=1400&h=700&s=1";

    const imageUrl = element.photo && element.photo.images && element.photo.images.original
      ? element.photo.images.original.url
      : defaultImageUrl;

    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };


  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowLefttArrow(false);
      setShowRightArrow(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length / 3 - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowLefttArrow(true);
      setShowRightArrow(false);
    }
  };
 
   if(!attractions.length > 0){
    return(
      <div className='animate-pulse'>
          <div className='grid grid-cols-3 gap-4'>
              <div>
                  <div className="h-[40vh] bg-gray-300 rounded mb-4"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
              </div>
              <div>
                  <div className="h-[40vh] bg-gray-300 rounded mb-4"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
              </div>
              <div>
                  <div className="h-[40vh] bg-gray-300 rounded mb-4"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
                  <div className=" mb-2 h-4 bg-gray-300 rounded"></div>
              </div>
          </div>
      </div>      
    )
   }
  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {attractions.map((element) => (
            <div key={element.name} className="w-1/3 px-2 flex-shrink-0">
              <div>
                <div
                  className="h-[13rem]  rounded-md overflow-hidden w-full"
                  style={handleImage(element)}
                ></div>
                <div>
                  <h2>{element.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <button
          onClick={handlePrev}
          className={`${
            !showLefttArrow ? "hidden" : ""
          } bg-white text-[18px] border border-[#ccc] transition-all duration-300 flex items-center justify-center w-[38px] h-[38px]  rounded-full shadow-md absolute hover:border-[#77747E]  left-[-12px] top-[50%] transform translate-y-[-50%]`}
        >
          <IoIosArrowBack id="leftArrow" />
        </button>
        <button
          onClick={handleNext}
          className={`${
            !showRightArrow ? "hidden" : ""
          } bg-white text-[18px] border border-[#ccc] transition-all duration-300 flex items-center justify-center w-[38px] h-[38px]  rounded-full shadow-md absolute hover:border-[#77747E] top-[50%] right-[-12px] transform translate-y-[-50%]`}
        >
          <IoIosArrowForward id="rightArrow" />
        </button>
      </div>
    </div>
  );
};

export default SlideSlick;
