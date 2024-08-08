// src/components/Footer.jsx

import { FacebookOutlined, TikTokOutlined, InstagramOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Import Ant Design's CSS
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/logo.png"; // Replace with your logo

const Footer = () => {
  return (
    <footer className="bg-blue-gray-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          {/* Call Section */}
          <div className=" flex text-center md:text-left">
            <p className="text-lg font-bold mb-2">Call Us:</p>
                <a href="tel:+233548691311" className="text-xl hover:text-pink-400 transition duration-300">
                +233 54 869 1311
                </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
          <a
                href="https://facebook.com/profile.php?id=100063579040183&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                <FacebookOutlined
                  style={{ fontSize: "24px", color: "#3b5998" }}
                />
              </a>
              <a
                href="https://tiktok.com/@maskreation?_t=8odlvG1eRGf&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition duration-300"
              >
                <TikTokOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://instagram.com/maskreation?igshid=aDdhcTZodHh1YXkx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-800 hover:text-pink-600 transition duration-300"
              >
                <InstagramOutlined
                  style={{ fontSize: "24px", color: "#e1306c" }}
                />
              </a>
         
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center mt-6">
          <nav className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-pink-400 transition duration-300">Home</Link>
            <Link to="/gallery" className="hover:text-pink-400 transition duration-300">Gallery</Link>
          
            <Link to="/contact" className="hover:text-pink-400 transition duration-300">Contact</Link>
          </nav>
          <p className="text-sm mt-4">© 2024 MasKreation Events Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
