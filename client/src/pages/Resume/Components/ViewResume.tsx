import React from "react";
import { useResume } from "../../../Context/ResumeContext";

const ViewResume: React.FC = () => {
  const { data } = useResume();

  if (Object.keys(data).length === 0) {
    return (
      <div className="text-center py-10 text-white">
        <p>No resume data found. Please fill out the form.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-[#1e293b] text-white rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">📄 Your Resume</h2>
      <div className="space-y-6">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="bg-[#334155] p-4 rounded-xl shadow-sm">
            <h3 className="text-purple-300 font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
            {key === "file" && value ? (
              <p className="text-sm text-gray-300 mt-1">Uploaded: {(value as File).name}</p>
            ) : (
              <p className="text-sm text-gray-300 mt-1 whitespace-pre-line">{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewResume;
