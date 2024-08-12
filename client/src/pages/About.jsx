import React from 'react'

export default function About() {
  return (
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
  )
}
{/* <section> */}
<div className="bg-white text-gray-800">
      {/* Header Image */}
      <div className="w-full">
        <img
          src="https://cdn.wegic.ai/assets/onepage/ai/image/77e589fd-419b-43c5-bc54-7ebffecc1cca.jpeg"
          alt="HomeEase"
          className="w-full h-64 object-cover md:h-96"
        />
      </div>

      {/* Our Values Section */}
      <div className="max-w-7xl mx-auto p-6 md:px-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Values</h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Trustworthy Services</h3>
            <p>We vet all our professionals to ensure you receive reliable and high-quality service.</p>
          </div>
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Efficient Solutions</h3>
            <p>Our platform is designed to save you time by providing quick and efficient solutions for all your home maintenance needs.</p>
          </div>
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>With integrated blockchain payment solutions, your transactions are secure and transparent.</p>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto p-6 md:px-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Journey</h2>
          <p className="text-center max-w-3xl mx-auto">
            Founded with the vision to simplify home maintenance, HomeEase has grown into a trusted platform connecting homeowners with skilled professionals. Our values are rooted in efficiency, trust, and innovation.
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center py-8">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>
// </section>
