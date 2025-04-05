import {
  Home,
  User,
  Settings,
  Menu,
  X,
  Twitter,
  Linkedin,
  GithubIcon,
} from "lucide-react";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  to: string;
  onClick?: () => void;
}

export default function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`z-50 ${
          isOpen
            ? "h-full bg-black text-white transition-all duration-300 fixed w-64 border-r border-gray-700 overflow-hidden"
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
          <NavItem icon={<Home size={24} />} label="Home" isOpen={isOpen} to="/" onClick={() => setIsOpen(false)} />
          <NavItem icon={<User size={24} />} label="Profile" isOpen={isOpen} to="/profile" onClick={() => setIsOpen(false)} />
          <NavItem icon={<Twitter size={24} />} label="Twitter" isOpen={isOpen} to="/twitter" onClick={() => setIsOpen(false)} />
          <NavItem icon={<Linkedin size={24} />} label="LinkedIn" isOpen={isOpen} to="/linkedin" onClick={() => setIsOpen(false)} />
          <NavItem icon={<GithubIcon size={24} />} label="Github" isOpen={isOpen} to="/github" onClick={() => setIsOpen(false)} />
          <NavItem icon={<Settings size={24} />} label="Settings" isOpen={isOpen} to="/settings" onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isOpen, to, onClick }: NavItemProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(to);
        onClick?.();
      }}
      className={`flex items-center gap-4 ${isOpen ? "p-2" : "p-0"} hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200`}
    >
      {icon}
      {isOpen && <span className="text-lg">{label}</span>}
    </div>
  );
}
