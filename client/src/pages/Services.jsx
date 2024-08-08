import React from 'react'
import { AiFillCustomerService } from "react-icons/ai";
export default function Services() {
    return (
        <>

            <div className='bg-green-700 h-screen w-full bg-cover bg-center p-8 sm:p-12 md:p-24'>
                <img src="./shabu2.jpeg" alt="" className='mx-auto' />
                <h1 className='text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center mt-4'>
                    Welcome to HomeEase <br /> Services
                </h1>
                <h4 className='text-white text-lg sm:text-xl md:text-3xl font-light mt-5 text-center'>
                    Discover a wide range of household maintenance services tailored to your needs.
                </h4>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 text-center text-white mt-9 mx-auto w-full px-4 sm:px-8 lg:px-32">
                    <div class="flex flex-col items-center">
                        <h2 class="text-xl md:text-2xl font-bold">10+</h2>
                        <p>Service Categories</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <h2 class="text-xl md:text-2xl font-bold">500+</h2>
                        <p>Trusted Professionals</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <h2 class="text-xl md:text-2xl font-bold">10,000+</h2>
                        <p>Completed Projects</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <h2 class="text-xl md:text-2xl font-bold">98%</h2>
                        <p>Customer Satisfaction</p>
                    </div>
                </div>
            </div> <br /> <br /> <br /> <br />

            <section>
                <div className='flex justify-center items-center min-h-10'>
                    <h1 className='text-black text-3xl sm:text-3xl md:text-5xl font-bold text-center mt-22'>
                        Explore Our Service Categories
                    </h1>
                </div>
                <section class="py-8 bg-gray-100">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500 cursor-pointer">
                                <h2 class="text-lg font-semibold mb-2 text-center">Plumbing</h2>
                                <p class="text-gray-700 text-center">1500</p>
                                <div>
                                    <i></i>
                                </div>
                            </div>
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
                                <h2 class="text-lg font-semibold mb-2 text-center">Electrical</h2>
                                <p class="text-gray-700 text-center">1200</p>
                            </div>
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
                                <h2 class="text-lg font-semibold mb-2 text-center">Carpentry</h2>
                                <p class="text-gray-700 text-center">800</p>
                            </div>
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
                                <h2 class="text-lg font-semibold mb-2 text-center">Cleaning</h2>
                                <p class="text-gray-700 text-center">1000</p>
                            </div>
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
                                <h2 class="text-lg font-semibold mb-2 text-center">Painting</h2>
                                <p class="text-gray-700 text-center">600</p>
                            </div>
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
                                <h2 class="text-lg font-semibold mb-2 text-center">Gardening</h2>
                                <p class="text-gray-700 text-center">700</p>
                            </div>
                        </div>
                    </div>
                </section> <br />   <br /> <br />
                <section class="py-16 bg-lime-300 flex flex-col md:flex-row items-center">
                    <div className='flex justify-center md:justify-start w-full md:w-1/2'>
                        <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-3/4 md:w-full' />
                    </div>
                    <div className='mt-8 md:mt-0 md:ml-8 w-full md:w-1/2 space-y-8 font-bold text-2xl text-center md:text-left px-4 md:px-0'>
                        <div>
                            <h1 className='font-bold text-4xl md:text-5xl'>How to Book a Service</h1>
                        </div>
                        <div>
                            <h2><span className='text-green-700'>01.</span> Browse through our extensive list of household services.</h2>
                        </div>
                        <div>
                            <h2><span className='text-green-700'>02.</span> Select the service you need and choose a preferred date and time.</h2>
                        </div>
                        <div>
                            <h2><span className='text-green-700'>03.</span> Confirm your booking and make secure payments via blockchain.</h2>
                        </div>
                    </div>
                </section>

            </section>
            <section>
                <div class="max-w-3xl mx-auto p-8 rounded-lg ml-10">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 ml-1">
                        Our Work Gallery
                    </h1>
                    <div class="flex flex-col sm:flex-row">
                        <p class="text-lg sm:text-xl text-gray-700 mb-4 sm:mr-8">
                            We offer a variety of household maintenance services tailored to meet your needs.
                        </p>
                        <p class="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-0">
                            Our services are designed to provide you with the highest level of convenience and satisfaction.
                        </p>
                    </div>
                </div>
                <section className='flex flex-wrap border-r-6 space-x-4'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
    <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className='w-45 h-60' />
  </div>
</section>

            </section> <br /> <br /> <br />

            <section className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-1/2">
                    <h2>
                        <span className="text-green-700 font-bold">FAQ</span>
                    </h2>
                    <h1 className="font-bold text-3xl md:text-5xl mt-4">
                        Frequently Asked <br />Questions
                    </h1>
                    <p className="mt-4">
                        Find answers to the most common questions about our services.
                    </p>
                </div>
                <div className="md:w-1/2 space-y-6">
                    <div className="border border-grey p-4 rounded-lg hover:shadow-2xl">
                        <h2 className="font-bold text-xl mt-6">How do I book a service?</h2>
                        <p className='mt-7'>Simply browse our services, select your preferred time, and confirm your booking.</p>
                    </div>
                    <div className="border border-grey p-4 rounded-lg  hover:shadow-2xl">
                        <h2 className="font-bold text-xl mt-6">Are the professionals vetted?</h2>
                        <p className='mt-7'>Yes, all our professionals are thoroughly vetted and background checked.</p>
                    </div>
                    <div className="border border-grey p-4 rounded-lg  hover:shadow-2xl">
                        <h2 className="font-bold text-xl mt-6">What payment methods do you accept?</h2>
                        <p className='mt-7'>We accept payments via integrated blockchain solutions for security and transparency.</p>
                    </div>
                    <div>
                        <h2>
                            <span className="text-green-700 font-bold  sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl hover:text-lime-500">
                                Check all common questions
                                <span className="text-green-700"> →</span>
                            </span>
                        </h2>
                    </div>
                </div>

            </section> <br /> <br />

            <section className=''>
                <div className='flex flex-col items-center'>

                    <h1 className='font-bold text-5xl mt-10 mr-38'>Get in Touch</h1>
                    <p>Have questions or need support? Reach out to us</p>
                </div>
                <div>
                    <div className=' items-center justify-around ml-auto mt-14'>
                        <div className='font-medium text-2xl mr-5 flex flex-col items-center w-full sm:w-[45%] md:w-[30%] mb-8'>
                            <div>
                                <AiFillCustomerService className='text-[43px]' />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-[33px] font-semibold'>
                                    Customer Support
                                </h1>
                                <p className='font-thin text-[20px]'>Get assistance with any inquiries or issues.</p>
                                <button className='border p-2 rounded-md text-green-500 bg-white transition transform ease-in-out hover:scale-105'>
                                    <span className='font-bold '>Start a conversation</span>
                                </button>
                            </div>
                        </div>

                        <div className='font-bold text-2xl mr-5 flex flex-col items-center w-full sm:w-[45%] md:w-[30%] mb-8'>
                            <div>
                                <AiFillCustomerService className='text-[43px]' />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-[33px] font-semibold'>
                                    Service Information
                                </h1>
                                <p className='font-thin text-[20px]'>Learn more about the services we offer</p>
                                <button className='border p-2 rounded-md text-green-500 bg-white transition transform ease-in-out hover:scale-105'>
                                    <span className='font-bold '>Learn More</span>
                                </button>
                            </div>
                        </div>

                        <div className='font-bold text-2xl mr-5 flex flex-col items-center w-full sm:w-[45%] md:w-[30%] mb-8'>
                            <div>
                                <AiFillCustomerService className='text-[43px]' />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-[33px] font-semibold'>
                                    Partnerships
                                </h1>
                                <p className='font-thin text-[20px]'>Get assistance with any inquiries or issues.</p>
                                <button className='border p-2 rounded-md text-green-500 bg-white transition transform ease-in-out hover:scale-105'>
                                    <span className='font-bold '>Collaborate now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
       
        








        </>
    )
}
