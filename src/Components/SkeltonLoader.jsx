import React from 'react';

const SkeltonLoader = () => {
    return (
        <>
            <div className=" animate-pulse">
                <div className='flex w-[90%] mx-auto mt-4 mb-2 gap-4'>
                    <div className="w-28 h-4 bg-gray-300 rounded"></div>
                    <div className="w-28 h-4 bg-gray-300 rounded"></div>
                    <div className="w-28 h-4 bg-gray-300 rounded"></div>
                    <div className="w-28 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-[90%] mx-auto h-1 bg-gray-300 rounded mb-2"></div>

                <div className='flex w-[90%] gap-2 mx-auto mb-4'>                      
                    <div className="w-20 h-3 bg-gray-300 rounded"></div>
                    <div className="w-20 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="w-[95%] mx-auto h-[80vh] bg-gray-300 rounded-lg"></div>
                <div className='w-[90%] mx-auto'>
                    <div className='my-6'>
                        <div className="w-32 h-6 bg-gray-300 rounded mb-4"></div>
                        <div className="w-[500px] mb-2 h-4 bg-gray-300 rounded"></div>
                        <div className="w-[480px] mb-2 h-4 bg-gray-300 rounded"></div>
                        <div className="w-[450px] mb-2 h-4 bg-gray-300 rounded"></div>
                    </div>

                    <div className='my-[4rem]'>
                        <div className="w-32 h-6 bg-gray-300 rounded mb-4"></div>
                        <div className="w-[250px] mb-2 h-4 bg-gray-300 rounded"></div>
                        <div className="w-[150px] mb-2 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>  

                <div className='w-[90%] mx-auto'>
                    <div className='flex mb-24'>
                        <div className='w-[28%]'>
                            <div className="w-52 h-6 bg-gray-300 rounded mb-4"></div>
                            <div className="w-[300px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[250px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[100px] mt-6 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className='grid grid-cols-3 w-[72%] gap-4'>
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
                    <div className='flex mb-24'>
                        <div className='w-[28%]'>
                            <div className="w-52 h-6 bg-gray-300 rounded mb-4"></div>
                            <div className="w-[300px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[250px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[100px] mt-6 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className='grid grid-cols-3 w-[72%] gap-4'>
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
                    <div className='flex mb-24'>
                        <div className='w-[28%]'>
                            <div className="w-52 h-6 bg-gray-300 rounded mb-4"></div>
                            <div className="w-[300px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[250px] mb-2 h-4 bg-gray-300 rounded"></div>
                            <div className="w-[100px] mt-6 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className='grid grid-cols-3 w-[72%] gap-4'>
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
                    
                </div> 
               
            </div>  
        </>
    );
}

export default SkeltonLoader;
