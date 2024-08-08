// src/components/Welcome.jsx
import { Card, Row, Col } from "antd";
import "antd/dist/reset.css"; // Import Ant Design's CSS
import { Link } from "react-router-dom";
import decor from "../assets/decor1.jpg";
import bridal from "../assets/decor3.jpg";
import bouquets from "../assets/decor4.jpg";
import fascinator from "../assets/fascinator1.jpg";
import Gele from "../assets/gele.jpg";
import interior from "../assets/decor2.jpg";

const { Meta } = Card;

const Welcome = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-pink-300">About Us</h2>
        <p className="text-gray-600">
          At MasKreation Event Center, we believe that every event is a unique opportunity 
          to create unforgettable experiences. With a passion for excellence and a 
          commitment to detail, we specialize in providing top-tier event planning services 
          that bring your vision to life. Our dedicated team of event planners combines creativity, 
          expertise, and personalized service to ensure 
          that every event we orchestrate is nothing short of extraordinary.
        </p>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-pink-300">Our Story</h2>
        <p className="text-gray-600"> 
          Founded with a vision to revolutionize the event planning industry, MasKreation has 
          quickly become a trusted name for creating remarkable events. Our journey began with a 
          simple idea: to blend innovation with tradition, crafting events that are not only memorable 
          but also unique. Over the years, we have built a reputation for excellence, working with a
          diverse range of clients from intimate gatherings to grand celebrations.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-300">Our Services</h2>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="Events decoration"
                src={decor}
                className="object-cover w-full h-60"
              />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Events Decorations"
              description="Whether you're planning a wedding, corporate event, birthday party, or any other celebration, our team of skilled designers will work closely with you to create a customized decoration plan that reflects your personality and theme. From glamorous and luxurious to simple and chic, we have a design style to suit every taste."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="Bridal Fans"
                src={bridal}
                className="object-cover w-full h-60"
              />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Bridal Fans"
              description="Our bridal fans are crafted with beauty and sophistication in mind. 
              Choose from a variety of styles, including intricate lace designs, personalized monograms, 
              and elegant patterns that complement your wedding theme. Each fan is designed to add a t
              ouch of grace and charm."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="Bouquets"
                src={bouquets}
                className="object-cover w-full h-60"
              />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Bouquets"
              description="We specialize in crafting stunning bouquets that capture 
              the essence of elegance and charm. Our bouquets are designed to bring joy and beauty to every occasion, 
              whether it is a wedding, anniversary, birthday, or just a thoughtful gesture, we have something 
              to suit every occasion and style."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="fascinator"
                src={fascinator}
                className="object-cover w-full h-60"
              />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Fascinator"
              description="Work with our talented designers to create a 
              fascinator that perfectly matches your outfit and personal style. 
              From classic to contemporary, we offer a wide range of 
              materials, colors, and embellishments to ensure your fascinator stands out. We offer on-site styling services to ensure your fascinator is perfectly positioned and secured for your event."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img alt="Gele" src={Gele} className="object-cover w-full h-60" />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Gele"
              description="We specialize in transforming your look with our exquisite 
              Gele-making services. 
              Our team will work closely with you to understand your vision and deliver a Gele that exceeds your expectations. 
              We use only the finest materials to ensure your Gele is both beautiful and durable. Our fabrics are selected for their quality and elegance, ensuring you look and feel fabulous."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="Interior Designs"
                src={interior}
                className="object-cover w-full h-60"
              />
            }
            className="flex flex-col justify-between"
          >
            <Meta
              title="Interior Designs"
              description="Transform your chosen venue into a 
              breathtaking setting with our comprehensive decoration services. We handle everything 
              from draping and lighting to floral arrangements and table settings,
              ensuring that every element contributes to a cohesive and enchanting atmosphere. We handle all the logistics so you can focus on enjoying your event."
            />
            <div className="text-center mt-4">
              <Link to="/contact">
                <button className="text-pink-300 hover:underline">
                  Contact Us
                </button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
