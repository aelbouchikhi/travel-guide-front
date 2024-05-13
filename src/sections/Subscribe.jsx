import React from 'react';
// import './subscribe.css'
import subs from '../assets/images/subs.png'

const Subscribe = () => {
    return (
        <section className='w-[90%] mx-auto bg-subsColor text-center relative p-[40px] mb-[100px]  rounded-[15px]'>
            <img src={subs} className='absolute right-[-8px] top-[-10px] w-[40px]' />
            <div className=''>
                <p className='text-[20px]  uppercase text-primary font-montserrat leading-[120%] tracking-[180%]'>subscribe to our newsletter</p>
                <h2 className='text-[38px] font-bold '>Prepare yourself & let’s explore the <br/> beauty of the world</h2>
            </div>
            <form className='w-[80%] mx-auto mt-[50px] flex gap-[8%]'>
                <input type='email' placeholder='your email' className='w-[60%] py-[10px] px-[30px] rounded-[8px] placeholder'/>
                <button type='submit' className='bg-primary text-white text-[20px] capitalize font-bold py-[10px] px-[20px] rounded-[8px]'>subscribe</button>
            </form>
            
        </section>
    );
}

export default Subscribe;
