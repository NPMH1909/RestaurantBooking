import React from "react";


const NavbarComponent = () => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-orange-500">TableBooky</h1>
      </div>
      <nav className="flex items-center space-x-8">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">Contact Us</a>
        <a href="#" className="hover:text-orange-500">Sign Out</a>
      </nav>
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full ml-2"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <span>Tài khoản</span>
      </div>
    </header>
  );
};

export default NavbarComponent;
