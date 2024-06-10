import React, {useState, useEffect} from 'react';
import { getAttractions } from '../../Apis/SearchApi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideSlick from './SlideSlick';


const SlideSection = ({title, description}) => {

    return (
        <section className='w-[90%] mx-auto flex flex-col md:flex-row  mb-8'>
            <div className='w-[28%]'>
                <h2 className='text-[24px] font-bold font-montserrat'>{title}</h2>
                <p className=' font-montserrat mt-4 text-lg'>{description}</p>
                <button className='mt-4 text-montserrat font-medium text-lg text-[#545454] underline'>See all</button>
            </div>


            <div className='w-[72%]'>
                <SlideSlick />

            </div>
        </section>
    );
}

export default SlideSection;

