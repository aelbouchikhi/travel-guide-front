import React, { useState, useEffect } from "react";
import DescriptionModal from "./DescriptionModal";
import Slider from "./Slider";
import SlideSection from "./SlideSection";

const Place = ({ data }) => {

  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const arr = data.description
    .split(" ")
    .filter((el, index) => index < 30)
    .join(" ");

  const imageStyle = {
    backgroundImage: `url(${data.imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleShowDescriptionModal = () => {
    setShowDescriptionModal(!showDescriptionModal);
  };
  const handleCloseDescriptionModal = () => {
    setShowDescriptionModal(false);
  };

  return (
    <>
      <p className="w-[90%] mx-auto text-[13px]  text-[#333] mb-4 ">
        <>
          {data.country}, {data.region}
        </>
      </p>
      <div
        className="h-[80vh] w-[95%] mx-auto relative image-place shadow-sm rounded-xl overflow-hidden"
        style={imageStyle}
      ></div>
      <div className="w-[90%] text-center md:text-left mx-auto">
        <h2 className="text-5xl my-6 font-bold font-montserrat ">
          {data.city}
        </h2>
        <p className="md:w-[50%] w-[100%] font-montserrat font-medium text-[#4d4d4d]">
          {arr}
          <div className="inline"> ...</div>
          <button
            className="underline hover:text-[#000]"
            onClick={handleShowDescriptionModal}
          >
            Read more
          </button>
        </p>
      </div>

      <div className="w-[90%] mx-auto my-20">
        <h2 className=" font-montserrat font-bold text-[28px] mb-1">
          Essential {data.city}
        </h2>
        <p className="w-[300px] text-[16px] font-montserrat text-[#545454]">
          Discover everything you need to know about {data.city}.
        </p>
      </div>

      <div>
        <SlideSection
          title="What to do"
          description="Places to see, ways to wander, and signature experiences."
        />
      </div>
      
      <div>
        <SlideSection
          title="Where to stay"
          description="Top spots to rest up—charming to classic to modern"
        />
      </div>
      
      <div>
        <SlideSection
          title="Where to eat"
          description="The tried-and-trues, plus local faves and hidden gems"
        />
      </div>

      <DescriptionModal
        data={data}
        show={showDescriptionModal}
        close={handleCloseDescriptionModal}
      />
    </>
  );
};

export default Place;
