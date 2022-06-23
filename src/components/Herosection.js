import React from 'react'

function Herosection() {
    return (
        <div >
            <div className="lg:flex lg:items-center my-10">
               
                <div className="px-8 lg:py-28 md:px-20 lg:px-0 lg:w-1/2">
                    <h1 className="mb-3 lg:mb-8 text-green-600 font-bold text-2xl ">What is Lorem Ipsum? </h1>
                    <p className=' text-gray-600 text-sm lg:text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-5 lg:mt-8">
                        <a href="#">
                            <button className="bg-green-600 p-2 rounded  text-white text-xs md:text-base lg:text-base">
                                LEARN MORE
                            </button>
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 content pt-0 ">
                    <img src="https://cdn.dribbble.com/users/1615584/screenshots/16053492/media/c73c836a4dc0dc17d57cbdf0da8ab775.jpg"  />
                </div>
            </div>
        </div>
    )
}

export default Herosection