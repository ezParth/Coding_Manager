import React, { useEffect, useState } from "react";
import { useResume } from "../../../Context/ResumeContext";
import { getResume } from "../../../api/GetResume.api";
import { useNavigate } from "react-router-dom";
import { checkIsAdmin } from "../../../api/IsAdmin.api";
import toast from "react-hot-toast";
import { useResumeUpdateContext } from "../../../Context/ResumeUpdateContext";

const ViewResume: React.FC = () => {
  const { data, setData } = useResume();
  const [loading, setLoading] = useState(true);
  const [adminloading, setAdminLoading] = useState(false);
  const navigate = useNavigate();
    const { IsUpdating, setIsUpdating } = useResumeUpdateContext();

  const handleGetResume = async () => {
    try {
      const response = await getResume();
      if (response?.Resume) {
        setData({ Resume: response.Resume });
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetResume();
  }, []);

  const handleEditResume = async () => {
    try {
      setAdminLoading(true);
      const res = await checkIsAdmin();
      if (res?.IsAllowed) {
        setIsUpdating(true);
        navigate("/resume/upload");
        toast.dismiss();
        toast.success("🚀 Update the resume!");
      } else {
        toast.dismiss();
        toast.error("❌ Only Admin is allowed to change the Resume");
      }
    } catch (error) {
      console.log("ERROR IN HANDLEEDITRESUME: ", error);
    } finally {
      setAdminLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-[#1f0036] via-[#1a103d] to-[#090221]">
        <div className="text-white text-xl animate-pulse tracking-wide">
          🚀 Loading your resume...
        </div>
      </div>
    );
  }

  if (!data || !data.Resume || Object.keys(data.Resume).length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1f0036] via-[#2a1057] to-[#090221]">
        <p className="text-white text-lg mb-6 animate-bounce">
          📭 No resume found. Let’s create one!
        </p>
        <button
          onClick={() => navigate("/resume/add")}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg"
        >
          ✨ Add Resume
        </button>
      </div>
    );
  }

  const resume = data.Resume;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1f0036] via-[#2a1057] to-[#090221] text-white py-12 px-6">
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid #f9a8d4;
          animation: typing 3s steps(30, end), blink 0.75s step-end infinite;
        }
      `}
      </style>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-pink-400 text-center tracking-widest">
          <span className="animate-typing block">
            🧠 Your Cosmic Resume
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(resume).map(([key, value]) => (
            <div
              key={key}
              className="bg-white/10 animate-float backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 shadow-pink-500/20 shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-300 mb-2 capitalize tracking-wide">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              {key === "file" && value ? (
                <p className="text-sm text-gray-200">
                  📎 Uploaded: {(value as File).name}
                </p>
              ) : (
                <p className="text-base text-gray-200 whitespace-pre-line leading-relaxed">
                  {value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Edit Resume Button */}
      <button
        onClick={handleEditResume}
        className={`fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg transition-all text-lg font-medium z-50 cursor-pointer ${
          adminloading
            ? "bg-gray-700 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:shadow-pink-500/40"
        }`}
        disabled={adminloading}
      >
        {adminloading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          "🛠️ Edit Resume"
        )}
      </button>
    </div>
  );
};

export default ViewResume;
