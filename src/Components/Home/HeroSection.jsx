import React from 'react'
import homeImage from "../../assets/Images/home-image.svg"
import search from "../../assets/Images/search-icon.svg"

const HeroSection = () => {
    return (
        <div className='container'>
            <div className='bg-[#FDF8EE] flex justify-evenly px-20 items-center py-24'>
                <div className='w-[586px]'>
                    <div className='text-[60px] font-bold leading-[135%]'> The Smart Choice For Future </div>
                    <p className='text-xl font-medium text-[#8A8A8A] py-3'>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                    <div className='flex gap-5  py-5'>
                        <img src={search} alt="" />
                        <input type="text" color='#0F335E' placeholder='Search for location ...' className='rounded-full  text-xl font-medium pl-6 py-[20px]' />
                        <button className='text-[#FFFFFF] bg-[#4D2C5E] text-[25px] font-medium py-4 px-7 rounded-full'>Continue</button>
                        </div>
                </div>
                <div>
                    <img src={homeImage} alt="" className='w-[890px] h-[543px]' />
                </div>
            </div>

        </div>
    )
}

export default HeroSection
