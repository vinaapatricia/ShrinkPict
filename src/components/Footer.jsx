import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-white border-t flex justify-center items-center py-8 mt-10"> 
      <div className="flex items-center gap-6"> 
        <a href="https://www.instagram.com/vinapatriciaa/" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vina-patricia/" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/vinaapatricia" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
