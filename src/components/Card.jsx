import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import toast from "react-hot-toast";
import { getRandomPrice } from "./RandomNumberGenerator";

const Card = ({ dogImage }) => {
  const [newDogImage, setNewDogImage] = useState("");
  const [price, setPrice] = useState(getRandomPrice());

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id: Date.now(),
      image: newDogImage || dogImage,
      price: parseFloat(price.replace("$", "")),
    };

    dispatch(addToCart(product));
    toast.success("Item added to cart Successfully");
  };

  const fetchRandomDog = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const imageUrl = response?.data?.message;

      // Save the image URL to local storage
      const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
      savedImages.push(imageUrl);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      toast.success("New Image Fetched Successfully");
      setNewDogImage(imageUrl);
      const newPrice = getRandomPrice();
      setPrice(newPrice);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Card container */}
      <div className="bg-customBlack w-w360 h-h510 rounded-2xl overflow-hidden shadow-lg p-6">
        {/* Card dogImage container */}
        <div className="w-full h-72">
          {/* Card Image */}
          <img
            src={newDogImage || dogImage}
            alt="card image"
            className="rounded-4xl object-cover w-full h-full"
          />
        </div>
        {/* Price and addToCart Container */}
        <div className="w-full h-auto py-8 flex justify-between">
          <p className="text-white text-xl font-bold">{price}</p>
          {/* addToCart Container */}
          <span
            onClick={handleAddToCart}
            className="w-8 h-8 bg-indigo-600 rounded-full"
          >
            <PlusIcon color="white" />
          </span>
        </div>
        <div className="flex flex-col justify-center mt-4 items-center">
          <Link
            onClick={fetchRandomDog}
            className="rounded-md bg-white cursor-pointer px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get New Image
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
