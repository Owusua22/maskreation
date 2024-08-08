// src/components/Hero.jsx
import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design's CSS

// Sample images
import img1 from '../assets/decor1.jpg';
import img2 from '../assets/decor2.jpg';
import img4 from '../assets/decor6.jpg';


const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden"> {/* Set a fixed height */}
      <Carousel autoplay effect="fade" dots={false} autoplaySpeed={5000}>
        <div className="w-full h-full">
          <img src={img1} alt="Hero 1" className="object-cover w-full h-[70vh]" />
        </div>
        <div className="w-full h-full">
          <img src={img2} alt="Hero 2" className="object-cover w-full h-[70vh]" />
        </div>
       
        <div className="w-full h-full">
          <img src={img4} alt="Hero 4" className="object-cover w-full h-[70vh]" />
        </div>
       

      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center">
      
      </div>
    </div>
  );
};

export default Hero;
