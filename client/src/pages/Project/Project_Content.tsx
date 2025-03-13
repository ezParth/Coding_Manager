import React, { useState } from "react";

const Project_Content: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleWarning, setTitleWarning] = useState("");
  const [descWarning, setDescWarning] = useState("");

  // Function to count words
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  // Title Change Handler
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const wordCount = countWords(text);

    if (wordCount > 20) {
      setTitleWarning("⚠️ Title cannot exceed 20 words.");
    } else if (wordCount < 2) {
      setTitleWarning("⚠️ Title should be at least 2 words.");
    } else {
      setTitleWarning("");
    }

    // Allow typing only within word limits
    if (wordCount <= 20) {
      setTitle(text);
    }
  };

  // Description Change Handler
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const wordCount = countWords(text);

    if (wordCount > 500) {
      setDescWarning("⚠️ Description cannot exceed 500 words.");
    } else if (wordCount < 50) {
      setDescWarning("⚠️ Description should be at least 50 words.");
    } else {
      setDescWarning("");
    }

    // Allow typing only within word limits
    if (wordCount <= 500) {
      setDescription(text);
    }
  };

  return (
    <div className="space-y-6 pt-5 pb-5">
      {/* Title Section */}
      <div className="flex flex-col border-2 border-gray-400 p-4">
        <label className="text-blue-500 font-bold">@Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Write title here"
          className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
        />
        {titleWarning && <p className="text-red-500 text-sm">{titleWarning}</p>}
      </div>

      {/* Description Section */}
      <div className="flex flex-col border-2 border-gray-400 p-4">
        <label className="text-blue-500 font-bold">@Description:</label>
        <textarea
          value={description}
          onChange={handleDescChange}
          placeholder="Write description here"
          rows={5}
          className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full resize-none"
        />
        {descWarning && <p className="text-red-500 text-sm">{descWarning}</p>}
      </div>
    </div>
  );
};

export default Project_Content;
