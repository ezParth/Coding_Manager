import { Home, User, Settings, Menu, X, Twitter, Linkedin, GithubIcon } from "lucide-react";
import { JSX } from "react";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

export default function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`z-50 ${
          isOpen
            ? "h-full bg-black text-white transition-all duration-300 fixed w-64 border-r-1 border-gray-600 overflow-hidden"
            : "h-screen bg-black text-white transition-all duration-300 w-0"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="text-white mb-4 flex items-center mt-4 ml-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <nav className={`flex flex-col gap-4 ml-2 ${isOpen ? "" : "w-0"}`}>
          <NavItem icon={<Home size={24} />} label="Home" isOpen={isOpen} />
          <NavItem icon={<User size={24} />} label="Profile" isOpen={isOpen} />
          <NavItem icon={<Twitter size={24} />} label="Twitter" isOpen={isOpen} />
          <NavItem icon={<Linkedin size={24} />} label="LinkedIn" isOpen={isOpen} />
          <NavItem icon={<GithubIcon size={24} />} label="Github" isOpen={isOpen} />
          <NavItem icon={<Settings size={24} />} label="Settings" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isOpen }: NavItemProps) {
  return (
    <div className={`flex items-center gap-4 ${isOpen ? "p-2" : "p-0"} hover:bg-gray-700 rounded-lg cursor-pointer`}>
      {icon}
      {isOpen && <span className="text-lg">{label}</span>}
    </div>
  );
}
