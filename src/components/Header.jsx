import React from "react";

const Header = ({ drawerOpenHandler }) => {
  return (
    <header className="container bg-white m-auto py-12 md:py-20 flex flex-col md:flex-row items-center justify-around rounded-bl-3xl rounded-br-3xl">
      <h3 className="text-2xl md:text-4xl text-center font-bold text-blue-900">
        দর্শনীয় স্থান যোগ করতে চান?
      </h3>
      <button
        className="border py-1 md:py-2 px-4 md:px-8 rounded-lg mt-6 md:mt-0 bg-blue-100 hover:bg-blue-200 text-blue-800 text-md md:text-xl focus:outline-none focus:ring-2 ring-offset-1"
        onClick={drawerOpenHandler}>
        add new place
      </button>
    </header>
  );
};

export default Header;