import React from 'react'
import HeroImg from "../assets/hero_image.png"

const Hero = () => {
  return (
    <div>
        <div className='grid grid cols-1 px-10 md:grid-cols-2'>
        
        <div className='flex flex-wrap px-10 py-5 gap-5'>
            <h1 className='font-bold'>RivanCyber</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus sollicitudin elit, sit amet condimentum arcu. Curabitur vitae sapien at odio elementum mollis eleifend a erat. Sed rutrum diam sed mauris molestie, nec volutpat sapien varius. Vivamus interdum eget velit a blandit. Nullam libero est, mattis in nunc a, pretium placerat odio. In hac habitasse platea dictumst. Quisque rutrum consequat est nec varius. </p>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-30 rounded">Enroll Now</button>
        </div>
        <img className='flex flex-wrap' src ={HeroImg} alt="img" />
    </div>
    </div>

  )
}

export default Hero