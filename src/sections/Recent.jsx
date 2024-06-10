import React, {useContext} from 'react';
import { placesContext } from '../../Context/placesContext';

const Recent = () => {
    const [placeName, setPlaceName, recentViewed, setRecentViewed] =
    useContext(placesContext);
    return (
            <>
                {
                    recentViewed.length > 0 && 
                    <section className='w-[90%] mx-auto pb-[100px]'>
                       <h2 className='capitalize font-montserrat font-bold text-3xl mb-4'>your recent search</h2>
                        <div className='flex flex-wrap gap-4'>
                        {
                              recentViewed.map(el=>(
                                <div 
                                key={el.city}
                                className="flex shadow-md border border-[#e0e0e0] p-4 rounded-lg items-center gap-4 py-2 font-medium text-[16px] hover:bg-[#f2f2f2] cursor-pointer">
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
                    </section>  
                }
            </>
    );
}

export default Recent;
