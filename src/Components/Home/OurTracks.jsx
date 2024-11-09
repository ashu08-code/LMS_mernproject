import React from 'react'
import uiimage1 from "../../assets/Images/uiuxdesign1.svg"
import uiimage2 from "../../assets/Images/uiuxdesign2.svg"
import uiimage3 from "../../assets/Images/uiuxdesign3.svg"
import stars from "../../assets/Images/starts.svg"


const OurTracks = () => {
    return (
        <div className='container'>
            <div className='pt-[95px]'>
                <div className='text-center text-[50px] font-semibold'>Our Tracks</div>
                <p className='text-center text-xl font-medium text-[#8A8A8A] pb-[65px]  '>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className='flex justify-center gap-5 items-center pb-[126px]'>
                <div>
                    <div className='border rounded-lg px-3 pt-3'>
                        <div className='rounded w-[430px] h-[238px] '><img src={uiimage1} alt="" className=' w-full h-full' /> </div>
                        <div className='mt-1 mb-7'>
                            <div className='flex justify-between items-center'>
                                <p className='text-base font-medium text-[#ACACAC]'>UI/UX Design</p>
                                <img src={stars} alt="" />
                            </div>
                            <p className='text-xl font-medium '>UI/UX Design for Beginners</p>
                        </div>
                    </div>
                    <button className='border font-medium text-[22px] rounded-full mt-[-16px] ml-[130px] py-2 px-9 bg-[#FF7426] text-[#FFFFFF]'>Join Course</button>
                </div>

                <div>
                    <div className='border rounded-lg px-3 pt-3'>
                        <div className='rounded w-[430px] h-[238px] '><img src={uiimage2} alt="" className=' w-full h-full' /> </div>
                        <div className='mt-1 mb-7'>
                            <div className='flex justify-between items-center'>
                                <p className='text-base font-medium text-[#ACACAC]'>UI/UX Design</p>
                                <img src={stars} alt="" />
                            </div>
                            <p className='text-xl font-medium '>UI/UX Design for Beginners</p>
                        </div>
                    </div>
                    <button className='border font-medium text-[22px] rounded-full mt-[-16px] ml-[130px] py-2 px-9 bg-[#FF7426] text-[#FFFFFF]'>Join Course</button>
                </div>
                
                <div>
                    <div className='border rounded-lg px-3 pt-3'>
                        <div className='rounded w-[430px] h-[238px] '><img src={uiimage3} alt="" className=' w-full h-full' /> </div>
                        <div className='mt-1 mb-7'>
                            <div className='flex justify-between items-center'>
                                <p className='text-base font-medium text-[#ACACAC]'>UI/UX Design</p>
                                <img src={stars} alt="" />
                            </div>
                            <p className='text-xl font-medium '>UI/UX Design for Beginners</p>
                        </div>
                    </div>
                    <button className='border font-medium text-[22px] rounded-full mt-[-16px] ml-[130px] py-2 px-9 bg-[#FF7426] text-[#FFFFFF]'>Join Course</button>
                </div>

            </div>
            
        </div>
    )
}

export default OurTracks
