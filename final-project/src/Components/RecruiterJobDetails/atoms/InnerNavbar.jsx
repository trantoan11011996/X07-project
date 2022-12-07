import React from 'react';

export default function InnerNavBar(){
    return(
        <div className=" justify-between hidden w-full md:flex md:w-auto md:order-1" >
    <ul className=" flex flex-col p-2 mt-2 border-bottom border-gray-700 rounded-lg bg-gray-200 md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white">
      <li>
        <a href="#" className=" block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Mô tả công việc </a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Kinh nghiệm</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Mô tả bổ sung</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Info công ty</a>
      </li>
     
    </ul>
    
  </div>
    )
}