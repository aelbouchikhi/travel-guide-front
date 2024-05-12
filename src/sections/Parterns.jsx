import React from 'react';
import vector from '../assets/images/parVector.png'
import trip from '../assets/images/trip.png'
import expedia from '../assets/images/expedia.png'
import airbnb from '../assets/images/airbnb.png'
import booking from '../assets/images/booking.png'
const Parterns = () => {
    return (
        <section className='w-[90%]  mx-auto relative h-40'>
            <img src={vector} className="absolute top-[-4rem] left-[-3.5rem] " />
            <div className='flex justify-around  '>
                <img className='w-[6rem]'  src={trip}/>
                <img className='w-[6rem]'  src={expedia}/>
                <img className='w-[6rem]'  src={booking}/>
                <img className='w-[6rem]'  src={airbnb}/>
                <img className='w-[6rem]'  src={booking}/>
                <img className='w-[6rem]'  src={airbnb}/>
            </div>
        </section>
    );
}

export default Parterns;
