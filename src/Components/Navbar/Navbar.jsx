// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom'; // Import this if you're using React Router
import logo from '../../assets/logo.png'; // Replace with your logo
import "./Navbar.css"

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation(); // Get the current location
  const [activeTab, setActiveTab] = useState(location.pathname); // Set initial active tab

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleMenuClick = (path) => {
    setActiveTab(path);
    closeDrawer();
  };

  return (
    <nav className="sticky-navbar p-4 flex justify-between items-center">
      <Link to ="/">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 w-14 mr-2" /> {/* Add your logo here */}
        <div className="text-xl font-bold text-pink-400 ">MasKreation Event Services</div>
      </div>
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/"
          
          className={`hover:text-pink-400 ${activeTab === '/' ? 'text-pink-300' : ''}`}
          onClick={() => handleMenuClick('/')}
        >
          Home
        </Link>
        <Link to = "/gallery"
         
          className={`hover:text-pink-400 ${activeTab === '/gallery' ? 'text-pink-300' : ''}`}
          onClick={() => handleMenuClick('/gallery')}
        >
          Gallery
        </Link>
      
        <Link to = "/contact"
         
          className={`hover:text-pink-400 ${activeTab === '/contact' ? 'text-pink-300' : ''}`}
          onClick={() => handleMenuClick('/contact')}
        >
          Contact Us
        </Link>
      </div>
      <Button
        className="md:hidden"
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
        width={200} // Reduce the width of the sidebar
      >
        <Menu selectedKeys={[activeTab]} mode="inline">
          <Menu.Item key="#"
            onClick={() => handleMenuClick('#')}
          >
            <Link hrf="/">Home</Link>
          </Menu.Item>
          
          <Menu.Item key="/gallery"
            onClick={() => handleMenuClick("/gallery")}
          >
            <Link to="/gallery">Gallery</Link>
          </Menu.Item>
        
          <Menu.Item key="/contact"
            onClick={() => handleMenuClick('/contact')}
          >
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
