import React,{useEffect} from 'react';
import { TfiClose } from "react-icons/tfi";

const DescriptionModal = ({data,show,close}) => {

    useEffect(() => {
        if (show) {
            
          document.body.style.overflow = 'hidden';
        }else {
          document.body.style.overflow = 'auto';
        }
  
        return () => {
          document.body.style.overflow = 'auto';
        } ;
      }, [show]);
    return(
        <>
        
                <div className={`${show ? 'h-[100%]' : 'h-0'} fixed  top-0 left-0 w-[100%]   bg-[#000] z-index`}>
                <div className={`${show ? 'top-[10vh] opacity-1' : 'top-[-100vh] opacity-0'} bg-white w-[60%] shadow-3xl px-[40px] py-[40px] absolute   left-[50%] transform translate-x-[-50%] transition-all duration-700 rounded-lg`}>
                    <TfiClose onClick={close} className='absolute right-[70px] cursor-pointer text-[#4d4d4d] hover:text-[#000]' />
                    <h2 className='text-4xl capitalize pb-[40px] font-montserrat font-bold'>{data.city}</h2>
                    <p className='text-[#4d4d4d] text-[17px]  leading-[160%]'>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default DescriptionModal;
