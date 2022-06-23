import React from 'react'

function Navbar() {
    return (
        <div className="flex  bg-green-200">
            <a href='#' className='grow ml-5  '>
                <img src="https://cdn-icons-png.flaticon.com/512/1841/1841783.png" alt="prudential logo" className='  h-20 w-32 lg:w-44 ' />

            </a>
            <nav class=" lg:px-2 px-4 py-2.5">
                <div class=" flex md:text-xs justify-between items-center mx-auto">

                    <button data-collapse-toggle="mobile-menu" type="button" class="mt-3 text-green-500 rounded-lg md:hidden hover:bg-gray-500 " aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div class="hidden  w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="flex  ">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs  border-0 hover:bg-green-500  mt-3 lg:text-sm  font-semibold   rounded  p-4  " >Research</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs border-0 hover:bg-green-500  mt-3  lg:text-sm font-semibold   rounded  p-4 whitespace-nowrap">Use Cases</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs border-0 hover:bg-green-500  mt-3  lg:text-sm font-semibold   rounded  p-4 ">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs border-0 hover:bg-green-500  mt-3  lg:text-sm font-semibold   rounded  p-4 ">News</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs border-0 hover:bg-green-500  mt-3  lg:text-sm font-semibold   rounded  p-4  ">Contact</a>

                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:text-xs whitespace-nowrap hover:bg-green-500  border-0   mt-3  lg:text-sm font-semibold   rounded  p-4 ">Request demo</a>

                            </li>
                        </ul>
                    </div>
                    <div class=" ">
                <div class="ml-4 flex whitespace-nowrap items-center md:ml-6">
                    <div>
                        
                        <a href="#">
                            <button class="py-2 pr-4 pl-3 text-black border-0 bg-green-500 mt-3 text-sm font-semibold rounded p-4">LOGIN</button>
                        </a>
                        <a class="border-l-2 border-gray-light mx-3 pb-2 pt-px"></a>
                        <a href="#">
                            <button class="btn btn-outline btn-gray text-xs lg:text-sm p-0.5 leading-5">EN</button>
                        </a>
                    </div>
                </div>
            </div>
                </div>
                
            </nav>

       


        </div>
    )
}

export default Navbar