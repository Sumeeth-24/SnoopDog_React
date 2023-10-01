import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

const HomePage = () => {
  const [dogImage, setDogImage] = useState("");

  const fetchRandomDogImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const imageUrl = response?.data?.message;
      setDogImage(imageUrl);
      saveImageToLocalStorage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const saveImageToLocalStorage = async (imageUrl) => {
    try {
      const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
      savedImages.push(imageUrl);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="bg-indigo-600 w-full">
        <Card dogImage={dogImage} />
      </div>
    </div>
  );
};

export default HomePage;
