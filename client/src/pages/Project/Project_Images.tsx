import React, { useState } from "react";

const Project_Images: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [image2, setImage2] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage2(imageUrl);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      console.log("FILE --> ", file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex border-2 border-gray-400 h-80">
      {/* Left Side (30%) */}
      <div className="w-3/10 bg-gray-800 flex items-center justify-center border-r-2 border-gray-400">
        <p className="text-white text-lg font-semibold">Upload Images Here</p>
      </div>

      {/* Right Side (70%) */}
      <div className="w-7/10 flex items-center justify-center p-6 gap-x-14">
        <div
          className="w-[calc(256px*16/9)] h-64 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-300 cursor-pointer bg-gray-900 hover:border-gray-200 transition-all duration-300 relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <p className="text-lg">Drag & Drop to Upload Image</p>
              <p className="text-sm mt-1">or click to select a file</p>
              <input
                type="file"
                accept="image/*"
                className="absolute opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
            </>
          )}
        </div>
        <div
          className="w-[calc(256px*16/9)] h-64 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-300 cursor-pointer bg-gray-900 hover:border-gray-200 transition-all duration-300 relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {image ? (
            <img
              src={image2}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <p className="text-lg">Drag & Drop to Upload Image</p>
              <p className="text-sm mt-1">or click to select a file</p>
              <input
                type="file"
                accept="image/*"
                className="absolute opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileChange2}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project_Images;
