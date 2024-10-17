import React from "react";
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Icon Facebook, Google
import { PhoneIcon } from "@heroicons/react/24/solid"; // Heroicons cho icon điện thoại

const HeaderComponent = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between h-8 w-full">
      {/* Thông tin nhà hàng và số điện thoại */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold">Nhà Hàng ABC</h1>
        <div className="flex items-center space-x-1">
          <PhoneIcon className="h-5 w-5" />
          <span>0123 456 789</span>
        </div>
      </div>

      {/* Icon Facebook và Google */}
      <div className="flex space-x-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-4 w-4 hover:text-gray-300" />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="h-4 w-4 hover:text-gray-300" />
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
