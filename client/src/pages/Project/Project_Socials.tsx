import React, { useContext } from "react";
import githublogo from "../../assets/github (1).svg";
import twitterlogo from "../../assets/twitter.svg";
import slacklogo from "../../assets/slack-icon.svg";
import linkedinLogo from "../../assets/linkedin-original.svg"
import LinkLogo from "../../assets/link.svg"
import { ProjectContext } from "../../Context/ProjectContext";

const Project_Socials: React.FC = () => {
  const { githubLink, setGithubLink, twitterLink, setTwitterLink, slackLink, setSlackLink, linkedInLink, setlinkedInLink, websiteLink, setWebsiteLink } = useContext(ProjectContext)
  // const [githubLink, setGithubLink] = useState<string>("");
  // const [twitterLink, setTwitterLink] = useState<string>("");
  // const [slackLink, setSlackLink] = useState<string>("");
  // const [linkedInLink, setlinkedInLink] = useState<string>("");
  // const [websiteLink, setWebsiteLink] = useState<string>("");
  return (
    <div>
      <div className="flex border-2 border-b-0 border-gray-400 h-20">
        {/* Left Side (30%) */}
        <div className="w-3/10  flex items-center justify-center bg-gray-200 border-r-2 border-gray-400">
          <p className="text-black  text-lg font-semibold flex items-center gap-2">
            GitHub
            <img src={githublogo} alt="GitHub Logo" className="w-6 h-6" />
          </p>
        </div>

        {/* Right Side (70%) */}
        <div className="w-7/10 flex items-center justify-center p-6">
          {/* Add content here */}
          <label className="text-blue-500 font-bold pr-2">@Github:</label>
          <input
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            placeholder="Write title here"
            className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>
      <div className="flex border-2 border-b-0 border-gray-400 h-20">
        {/* Left Side (30%) */}
        <div className="w-3/10  flex items-center justify-center bg-gray-200 border-r-2 border-gray-400">
          <p className="text-black  text-lg font-semibold flex items-center gap-2">
            Twitter
            <img src={twitterlogo} alt="GitHub Logo" className="w-6 h-6" />
          </p>
        </div>

        {/* Right Side (70%) */}
        <div className="w-7/10 flex items-center justify-center p-6">
          {/* Add content here */}
          <label className="text-blue-500 font-bold pr-2">@twitter:</label>
          <input
            type="text"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
            placeholder="Write title here"
            className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>
      <div className="flex border-2 border-b-0 border-gray-400 h-20">
        {/* Left Side (30%) */}
        <div className="w-3/10  flex items-center justify-center bg-gray-200 border-r-2 border-gray-400">
          <p className="text-black  text-lg font-semibold flex items-center gap-2">
            Slack
            <img src={slacklogo} alt="GitHub Logo" className="w-6 h-6" />
          </p>
        </div>

        {/* Right Side (70%) */}
        <div className="w-7/10 flex items-center justify-center p-6">
          {/* Add content here */}
          <label className="text-blue-500 font-bold pr-2">@slack:</label>
          <input
            type="text"
            value={slackLink}
            onChange={(e) => setSlackLink(e.target.value)}
            placeholder="Write title here"
            className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>
      <div className="flex border-2 border-b-0 border-gray-400 h-20">
        {/* Left Side (30%) */}
        <div className="w-3/10  flex items-center justify-center bg-gray-200 border-r-2 border-gray-400">
          <p className="text-black  text-lg font-semibold flex items-center gap-2">
            LinkedIn
            <img src={linkedinLogo} alt="GitHub Logo" className="w-6 h-6" />
          </p>
        </div>

        {/* Right Side (70%) */}
        <div className="w-7/10 flex items-center justify-center p-6">
          {/* Add content here */}
          <label className="text-blue-500 font-bold pr-2">@linkedIn:</label>
          <input
            type="text"
            value={linkedInLink}
            onChange={(e) => setlinkedInLink(e.target.value)}
            placeholder="Write title here"
            className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>
      <div className="flex border-2 border-gray-400 h-20">
        {/* Left Side (30%) */}
        <div className="w-3/10  flex items-center justify-center bg-gray-200 border-r-2 border-gray-400">
          <p className="text-black  text-lg font-semibold flex items-center gap-2">
            Website Link
            <img src={LinkLogo} alt="GitHub Logo" className="w-6 h-6" />
          </p>
        </div>

        {/* Right Side (70%) */}
        <div className="w-7/10 flex items-center justify-center p-6">
          {/* Add content here */}
          <label className="text-blue-500 font-bold pr-2">@Website:</label>
          <input
            type="text"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            placeholder="Write title here"
            className="text-white placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Project_Socials;
