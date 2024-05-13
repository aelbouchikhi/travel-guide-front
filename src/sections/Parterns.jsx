import React from 'react';
import vector from '../assets/images/parVector.png'
import trip from '../assets/images/trip.png'
import expedia from '../assets/images/expedia.png'
import airbnb from '../assets/images/airbnb.png'
import booking from '../assets/images/booking.png'
const Parterns = () => {
    return (
        <section className='w-[90%] mt-14 mx-auto relative my-20'>
            <img src={vector} className="lg:block absolute hidden top-[-5rem] left-[-2.5rem] " />
            <div className='flex flex-wrap justify-center gap-10  '>
                <img className='w-[6rem]'  src={trip}/>
                <img className='w-[6rem]'  src={expedia}/>
                <img className='w-[6rem]'  src={booking}/>
                <img className='w-[6rem]'  src={airbnb}/>
                <img className='w-[6rem]'  src={booking}/>
            </div>
        </section>
    );
}

export default Parterns;
