import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b ">
      <div className="container px-4 mx-auto relative lg:text-md ">
        <div className="flex justify-between items-center font-semibold text-lg focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
          <div className="flex items-center flex-shrink-0">   
          <a
            href="/"
            className="flex rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            Shrink
            <span className="bg-gradient-to-r from-blue-700 to-purple-800 text-transparent bg-clip-text">
            Pict</span>
          </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} offset={-100}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
