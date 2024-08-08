import { useEffect } from "react";
import { Card, Row, Col } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design's CSS

// Sample images
import img1 from '../assets/decor1.jpg';
import img2 from '../assets/decor2.jpg';
import img3 from '../assets/decor3.jpg';
import img4 from '../assets/decor4.jpg';
import img5 from '../assets/decor5.jpg';
import img6 from '../assets/decor6.jpg';
import img7 from '../assets/gele.jpg';
import img8 from '../assets/fascinator8.jpg';
import img9 from '../assets/fascinator1.jpg';
import img10 from '../assets/fascinator5.jpg';
import img11 from '../assets/fascinator3.jpg';
import img12 from '../assets/fascinator4.jpg';
import img13 from '../assets/fascinator6.jpg';
import img14 from '../assets/decor8.jpg';
import img15 from '../assets/bouquet2.jpg';
import img16 from '../assets/fascinator.jpg';
import img17 from '../assets/fascinator7.jpg';
import img18 from '../assets/decor9.jpg';



const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="text-gray-600">
          Explore our gallery to see some of our best moments and offerings.
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 1" src={img1} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 2" src={img2} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 3" src={img3} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 4" src={img4} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 5" src={img5} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 6" src={img6} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 7" src={img7} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 8" src={img8} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 9" src={img9} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 10" src={img10} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 11" src={img11} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 12" src={img12} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 13" src={img13} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 14" src={img14} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 15" src={img15} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 16" src={img16} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 17" src={img17} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <Card
            cover={<img alt="Gallery 18" src={img18} className="object-cover h-64" />}
            className="transition-transform transform hover:scale-105"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
