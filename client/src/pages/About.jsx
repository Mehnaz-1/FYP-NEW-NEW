import React from 'react'

export default function About() {
  return (
    <>

    <div className="flex flex-col ml-16 mt-24 min-h-screen bg-gray-100 p-4">
      <div className=" space-y-4 max-w-xl">
        <h1 className="text-1xl md:text-1xl lg:text-1xl font-bold text-gray-800">
          <span className='text-green-800'>Your Home, Our Priority</span>
        </h1>
        <p className="text-xl md:text-4xl lg:text-5xl text-black">
          <span className="font-bold">Welcome to HomeEase</span>
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-500">
          At HomeEase, we are committed to making household maintenance effortless. Discover how our platform connects you with top professionals and leverages blockchain for seamless payments.
        </p>
      </div>
    </div>
    <section>
      <div className='flex'>
  <div className="flex justify-center md:justify-start w-full md:w-1/2">
    <img
      src="https://i.rtings.com/assets/pages/KSgFV72t/best-laptops-for-working-from-home-20230503-medium.jpg?format=auto"
      alt="Service Image"
      className="w-4/5 md:w-full"
    />
  </div>
  <div>
  <div className="w-full md:w-1/2">
    <div className="p-4 md:p-6">
      <h4 className="text-lg font-semibold mb-2">Our Value</h4>
      <h1 className="text-2xl font-bold mb-4">Our Journey</h1>
      <p className="text-base leading-relaxed">
        Founded with the vision to simplify home maintenance,
        HomeEase has grown into a trusted platform connecting homeowners
        with skilled professionals. Our values are rooted in efficiency,
        trust, and innovation.
      </p>
      </div>
    </div>
    
    </div>
    
    
  </div>
 
</section>
 


</>
)
}