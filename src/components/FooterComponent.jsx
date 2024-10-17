import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">TableBooky</h2>
        <p>Register for free and win amazing discount points on table bookings.</p>
        <button className="mt-4 bg-orange-500 py-2 px-4 rounded-full text-white">
          Register
        </button>
      </div>
    </footer>
  );
};

export default FooterComponent;
