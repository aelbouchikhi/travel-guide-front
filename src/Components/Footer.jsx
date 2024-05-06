import React from 'react';
import headerLogo from '../assets/images/header-logo.png';
import { CiLocationOn } from "react-icons/ci";
import { GrPhone } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#F4EAE5] pt-8'>
            <div className='container  font-montserrat capitalize mx-auto flex  justify-between'>
                <div className='pb-6'>
                    <img src={headerLogo} width={150}/>
                    <ul className='list-none text-[#777]'>
                        <li className='flex items-center gap-4 mt-4'>
                            <CiLocationOn size={25}/>
                            ifiag, rabat, morocco
                        </li>
                        <li className='flex items-center gap-4 mt-4'>
                            <GrPhone  size={25}/>
                            +212 590483118
                        </li>
                        <li className='flex items-center gap-4 mt-4'>
                            <MdOutlineMailOutline size={25}/>
                            contact@travelguide.com
                        </li>
                    </ul>
                    <div className='flex mt-4'>
                        <FaFacebook  size={25} className='mr-4 text-primary  mt-4'/>
                        <FaInstagram size={25} className='mr-4 text-primary  mt-4' />
                        <FaTwitter  size={25} className='mr-4  text-primary mt-4'/>
                        <FaYoutube  size={25} className='mr-4  text-primary mt-4'/>
                    </div>
                </div>
                <div>
                    <h4 className='text-lg font-bold'>navigation</h4>
                    <ul className='list-none text-[#777]'>
                        <li className='mt-3'><a href='/'>hotels</a></li>
                        <li className='mt-3'><a href='/'>resturants</a></li>
                        <li className='mt-3'><a href='/'>attractions</a></li>
                        <li className='mt-3'><a href='/'>destications</a></li>
                        <li className='mt-3'><a href='/'>forums</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold'>terms of use</h4>
                    <ul className='list-none text-[#777]'>
                        <li className='mt-3'><a href='/'>privacy policy</a></li>
                        <li className='mt-3'><a href='/'>terms & Services</a></li>
                        <li className='mt-3'><a href='/'>contact</a></li>
                    </ul>
                </div>

            </div>
            <div className=' border-t border-[#ccc]  flex justify-center pt-4 pb-4'>
                <p className='text-[#777] capitalize '>globeGuide &copy; 2024 all right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
