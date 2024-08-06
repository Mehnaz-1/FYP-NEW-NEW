import React from 'react'

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
                            <div class="bg-lime-300 p-6 rounded-lg shadow-md hover:bg-lime-500">
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
                <div class="max-w-3xl mx-auto p-8 rounded-lg  ml-10">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 ml-1 space-x-6">
                    Our Work Gallery
                    </h1>
                    <div className='flex '>
                        <p class="text-lg sm:text-xl text-gray-700 mb-4 space-x-8">
                            We offer a variety of household maintenance services tailored to meet your needs.
                        </p>
                        <div class="text-lg sm:text-xl text-gray-700 flex flex-col sm:flex-row">
                            <p class="mb-4 sm:mb-0 sm:mr-4">
                                Our services are designed to provide you with the highest level of convenience and satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <section className='flex border-r-6 space-x-4 '>
                    <div>
                        <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' />
                    </div>
                    <div>
                        <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' />
                    </div>
                    <div>
                        <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' />
                    </div>
                    <div>
                        <img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' />
                    </div>
                    <div><img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' /></div>
                    <div><img src='https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png' alt='Service Image' className=' md:w-60  h-44' /></div>
                </section>


            </section>








        </>
    )
}
