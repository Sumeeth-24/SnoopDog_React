import React from "react";
import Folder from "../assets/images/Folder.png";

const HistoryPage = () => {
  const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];

  return (
    <div className="container mx-auto px-4 mt-24 mb-8">
      <h1 className="text-2xl font-bold mb-4 text-center">History Page</h1>
      {savedImages?.length === 0 ? (
        <p className="text-center text-gray-500">
          Please fetch some dog images.
          <img
            src={Folder}
            alt="empty-folder"
            width="340px"
            height="340px"
            className="mx-auto mt-4"
          />
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedImages?.map((image, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-white opacity-70 hover:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"></div>
              <img
                src={image}
                alt={`Dog ${index}`}
                className="w-full h-full object-cover shadow-md rounded-lg group"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
