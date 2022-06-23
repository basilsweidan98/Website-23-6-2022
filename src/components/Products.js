import React from 'react'

function Products() {
    return (

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-7 gap-3 bg-contain lg:pb-40 bg-mobile bg-no-repeat m-auto mt-16'>
                <div className="bg-white p-2 px-0 lg:py-4 rounded-lg hover:shadow-2xl cursor-pointer h-full flex flex-col ">
                    <div className="flex justify-center items-center border-b  bg-no-repeat bg-contain py-2 h-auto">
                        <img className="w-24 h-auto self-center" src="https://intelloz.com/wp-content/uploads/2021/05/Website-768x384.jpg"  />
                    </div>
                    <div className="text-center pt-4 lg:px-4 lg:pt-8 flex h-full flex-col justify-between">
                        <div className="flex items-center justify-center">
                            <h3 className="font-bold text-green-700 mb-5">Mobile Application</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className=" text-green-500 px-5 ">Excepteur sint occaecat cupidatat non proident.</p>
                            <h3 className='font-bold text-green-700'>29.99 AED</h3>
                            <a href="#">
                                <button className="bg-green-600 p-2 rounded mt-4 text-white text-xs md:text-base lg:text-base"  >Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 px-0 lg:py-4 rounded-lg hover:shadow-2xl cursor-pointer h-full flex flex-col ">
                    <div className="flex justify-center items-center border-b  bg-no-repeat bg-contain py-2 h-auto">
                        <img className="w-24 h-auto self-center" src="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png"  />
                    </div>
                    <div className="text-center pt-4 lg:px-4 lg:pt-8 flex h-full flex-col justify-between">
                        <div className="flex items-center justify-center">
                            <h3 className="font-bold text-green-700 mb-5">Website Development</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className=" text-green-500 px-5">Excepteur sint occaecat cupidatat non proident.</p>
                            <h3 className='font-bold text-green-700'>50.99 AED</h3>
                            <a href="#">
                                <button className="bg-green-600 p-2 rounded mt-4 text-white text-xs md:text-base lg:text-base"  >Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 px-0 lg:py-4 rounded-lg hover:shadow-2xl cursor-pointer h-full flex flex-col ">
                    <div className="flex justify-center items-center border-b  bg-no-repeat bg-contain py-2 h-auto">
                        <img className="w-24 h-auto self-center" src="https://mangools.com/blog/wp-content/uploads/2021/01/google-homepage.png"  />
                    </div>
                    <div className="text-center pt-4 lg:px-4 lg:pt-8 flex h-full flex-col justify-between">
                        <div className="flex items-center justify-center">
                            <h3 className="font-bold text-green-700 mb-5">Search Engine</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className=" text-green-500 px-5">Excepteur sint occaecat cupidatat non proident.</p>
                            <h3 className='font-bold text-green-700'>30.15 AED</h3>
                            <a href="#">
                                <button className="bg-green-600 p-2 rounded mt-4 text-white text-xs md:text-base lg:text-base"  >Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 px-0 lg:py-4 rounded-lg  hover:shadow-xl cursor-pointer h-full flex flex-col justify-between">
                    <div className="flex justify-center items-center border-b border-cream bg-no-repeat bg-center bg-contain py-2 h-auto default-product-bg">
                        <img className="w-24 h-auto self-center" src="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png"  />
                    </div>
                    <div className="text-center pt-4 lg:px-4 lg:pt-8 flex h-full flex-col justify-between">
                        <div className="flex items-center justify-center">
                            <h3 className="font-bold text-green-700 mb-5">Sales & Marketing</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className=" text-green-500 px-5">Excepteur sint occaecat cupidatat non proident.</p>
                            <h3 className='font-bold text-green-700'>100.15 AED</h3>
                            <a href="#">
                                <button className="bg-green-600 p-2 rounded mt-4 text-white text-xs md:text-base lg:text-base"  >Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>)
}

export default Products




// https://img.etimg.com/thumb/msid-46065504,width-300,imgsize-52163,,resizemode-4,quality-100/.jpg