import React from 'react'

export default function About() {
  return (
    <>

      <div className="flex flex-col ml-16 mt-24 h-5/6 bg-gray-100 p-4">
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
      <section class="py-16 flex flex-col md:flex-row space-y-8 md:space-y-2 items-center">
        <div class="flex justify-center md:justify-start w-full md:w-1/2">
          <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg" alt="Service Image" class="w-3/4 md:w-full" />
        </div>
        <div class="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2 space-y-10 text-center md:text-left px-4 md:px-0">
          <div>
            <h4 class="text-green-400">Our Values</h4>
            <h1 class="font-bold text-4xl">Our Journey</h1>
            <p>
              Founded with the vision to simplify home maintenance, HomeEase has grown into a trusted platform connecting homeowners with skilled professionals. Our values are rooted in efficiency, trust, and innovation.
            </p>
          </div>
          <div>
            <h4 class="font-bold">Trustworthy Services</h4>
            <p>We vet all our professionals to ensure you receive reliable and high-quality service.</p>
          </div>
          <div>
            <h4 class="font-bold">Efficient Solutions</h4>
            <p>Our platform is designed to save you time by providing quick and efficient solutions for all your home maintenance needs.</p>
          </div>
          <div>
            <h4 class="font-bold">Secure Payments</h4>
            <p>With integrated blockchain payment solutions, your transactions are secure and transparent.</p>
          </div>
          <div class="flex justify-center md:justify-start mt-4">
            <button
              class="
      font-bold bg-lime-500 hover:bg-lime-600 text-white
      py-2 px-4 rounded-full transition duration-300
      ease-in-out transform hover:scale-105 focus:outline-none
      focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50
      md:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className=''>
        <div className="bg-green-700 w-full p-4 bg-cover bg-center  min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h4 className="text-lime-400 font-bold pl-8 text-lg sm:text-xl md:text-2xl">Our Impact</h4>
            <h1 className="font-bold text-4xl pl-8 text-white">Trusted by Thousands</h1>
            <p className="pt-8 pl-8 text-white">
              HomeEase has established itself as a reliable platform for household maintenance, trusted by thousands of homeowners.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 text-center text-white mt-9 mx-auto pt-10 px-4 sm:px-8 lg:px-32">
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold">5,000+</h2>
              <p>Homes Served</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold">1,200+</h2>
              <p>Professionals Connected</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold">4,800+</h2>
              <p>Positive Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold">5+</h2>
              <p>Years in Service</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-white font-bold text-4xl">Meet Our Leadership</h1>
          </div>
          <div className="text-slate-50 text-center mt-4">
            <p>
              Our team is dedicated to providing the best service experience. Get to
              know the people behind HomeEase.
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-6">
          <div className="rounded-2xl p-6 bg-slate-800 flex-1 min-w-[240px] max-w-xs">
            <img
              className="w-full h-auto rounded-lg mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s"
              alt="Leonard Krasner"
            />
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">Leonard Krasner</h1>
              <h3 className="text-slate-300 mt-2">CEO & Founder</h3>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-slate-800 flex-1 min-w-[240px] max-w-xs">
            <img
              className="w-full h-auto rounded-lg mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s"
              alt="Alyssa Atkinson"
            />
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">Alyssa Atkinson</h1>
              <h3 className="text-slate-300 mt-2">COO</h3>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-slate-800 flex-1 min-w-[240px] max-w-xs">
            <img
              className="w-full h-auto rounded-lg mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s"
              alt="Jordan Jackson"
            />
            <div className="text-center">
              <h1 className="text-white font-bold text-xl">Jordan Jackson</h1>
              <h3 className="text-slate-300 mt-2">CTO</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="isolated overflow-hidden dark:bg-slate-800 px-6 lg:px-10">
        <div className="w-full h-auto rounded-lg mb-4 mt-14 flex flex-col lg:flex-row items-center lg:items-start lg:pl-28">
          <img
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl mb-4 lg:mb-0 lg:mr-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s"
            alt="User Profile"
          />
          <div className='flex'>
          <div className="text-center lg:text-left">
            <h1 className="text-black dark:text-white text-lg lg:text-xl mb-2">
              "HomeEase has transformed the way I manage home maintenance. The
              professionals are reliable,
              and the blockchain payment system gives me
              peace of mind."
            </h1>
            <div className="mt-4">
              <h3 className="text-slate-700 dark:text-slate-300 text-base lg:text-lg font-semibold">
                Leonard Krasner
              </h3>
              <h3 className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">
                Homeowner
              </h3>
            </div>
            
            </div>
          </div>
        </div>
      </section>
      <section className='pt-16 '>
        <div className='relative bg-slate-400'>
          <div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg-1/3'>
            <img
              className="w-full h-auto mb-4 "
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="Jordan Jackson"
            /     >
            <div>
              <div className="text-center lg:text-left ">
            <h1 className="text-black dark:text-white text-lg lg:text-xl mb-2">
              "HomeEase has transformed the way I manage home maintenance. The
              professionals are reliable,
              and the blockchain payment system gives me
              peace of mind."
            </h1>
            <div className="mt-4">
              <h3 className="text-slate-700 dark:text-slate-300 text-base lg:text-lg font-semibold">
                Leonard Krasner
              </h3>
              <h3 className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">
                Homeowner
              </h3>
            </div>
          </div>
            </div>
            </div>
           <div className='relative mx-auto max-w-7xl py-16 sm:py-20 lg:px-8  lg:py-32'>
          </div>
           
          
        </div>
      </section>
       <section className="w-full"> 
   <nav className="bg-gray-100 dark:bg-slate-950 py-20 px-4 lg:py-8 lg:px-10">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
      <div className="mt-6 lg:mt-0 space-x-0 lg:space-x-6 text-xl font-semibold flex flex-col lg:flex-row items-center pt-12">
        <a
          href="#about"
          className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 mb-4 lg:mb-0"
        >
          About Us
        </a>
        <a
          href="#services"
          className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 mb-4 lg:mb-0"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 mb-4 lg:mb-0"
        >
          Contact
        </a>
        <a
          href="#faq"
          className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        >
          FAQ
        </a>
      </div>
    </div>
  </nav>
</section> 
      
    </>
  )
}