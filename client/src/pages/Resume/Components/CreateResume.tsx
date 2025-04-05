import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useResume } from "../../../Context/ResumeContext";

const ResumeComp: React.FC = () => {
  // const [formData, setFormData] = useState<any>({});
  const { data: formData, setData: setFormData } = useResume();
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-10 bg-[#0f172a] text-white rounded-3xl shadow-2xl mt-10"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-purple-400"
      >
        ✨ Resume Builder
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
            className="border border-purple-700 p-6 rounded-2xl bg-[#1e293b] shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">{section.title}</h2>
            <div className={`grid ${section.grid || "grid-cols-1"} gap-4`}>
              {section.fields.map((field, fieldIdx) => {
                const placeholder =
                  field.placeholder ||
                  (field.type === "file"
                    ? "Upload your resume (PDF/JPG)"
                    : `Enter your ${field.name.replace(/([A-Z])/g, " $1").toLowerCase()}`);

                if (field.type === "textarea") {
                  return (
                    <motion.textarea
                      key={fieldIdx}
                      name={field.name}
                      rows={field.rows || 3}
                      placeholder={placeholder}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full p-3 rounded-xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  );
                } else if (field.type === "file") {
                  return (
                    <motion.input
                      key={fieldIdx}
                      type="file"
                      accept=".pdf,.jpg,.jpeg"
                      placeholder={placeholder}
                      onChange={handleFileChange}
                      whileFocus={{ scale: 1.01 }}
                      className="text-white"
                    />
                  );
                } else {
                  return (
                    <motion.input
                      key={fieldIdx}
                      name={field.name}
                      placeholder={placeholder}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.01 }}
                      className="p-3 rounded-xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  );
                }
              })}
            </div>
          </motion.section>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="block w-full py-3 mt-6 font-semibold bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl hover:from-purple-700 hover:to-purple-900 transition duration-300"
        >
          🚀 Submit Resume
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ResumeComp;

// Sections data
const sections = [
  {
    title: "👤 Personal Information",
    grid: "grid-cols-2",
    fields: [
      { name: "fullName", placeholder: "Full Name" },
      { name: "email", placeholder: "Email" },
      { name: "phone", placeholder: "Phone Number" },
      { name: "dob", placeholder: "Date of Birth" },
      { name: "address", placeholder: "Address" },
      { name: "linkedin", placeholder: "LinkedIn URL" },
      { name: "github", placeholder: "GitHub URL" },
      { name: "website", placeholder: "Portfolio/Website" },
    ],
  },
  {
    title: "🎯 Career Objective",
    fields: [{ name: "objective", placeholder: "Your career objective...", type: "textarea" }],
  },
  {
    title: "🎓 Education",
    grid: "grid-cols-2",
    fields: [
      { name: "school", placeholder: "School" },
      { name: "college", placeholder: "College/University" },
      { name: "degree", placeholder: "Degree" },
      { name: "cgpa", placeholder: "CGPA/Percentage" },
      { name: "passingYear", placeholder: "Year of Graduation" },
    ],
  },
  {
    title: "💼 Work Experience",
    grid: "grid-cols-2",
    fields: [
      { name: "company", placeholder: "Company Name" },
      { name: "jobTitle", placeholder: "Job Title" },
      { name: "jobStart", placeholder: "Start Date" },
      { name: "jobEnd", placeholder: "End Date" },
      { name: "jobDescription", placeholder: "Job Responsibilities...", type: "textarea" },
    ],
  },
  {
    title: "🛠️ Skills",
    fields: [{ name: "skills", placeholder: "e.g. JavaScript, Python, SQL" }],
  },
  {
    title: "🚧 Projects",
    fields: [{ name: "projects", placeholder: "Describe your projects...", type: "textarea" }],
  },
  {
    title: "📜 Certifications",
    fields: [{ name: "certifications", placeholder: "Mention your certifications...", type: "textarea" }],
  },
  {
    title: "🌐 Languages Known",
    fields: [{ name: "languages", placeholder: "e.g. English, Hindi, Spanish" }],
  },
  {
    title: "🏆 Achievements",
    fields: [{ name: "achievements", placeholder: "List your notable achievements...", type: "textarea" }],
  },
  {
    title: "🎨 Interests / Hobbies",
    fields: [{ name: "interests", placeholder: "e.g. Reading, Chess, Coding" }],
  },
  {
    title: "📄 Upload Resume",
    fields: [{ type: "file" }],
  },
];
