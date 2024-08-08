// src/pages/ContactUs.jsx

import { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "antd/dist/reset.css"; // Import Ant Design's CSS
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TikTokOutlined,
  InstagramOutlined,
  WhatsAppOutlined
} from "@ant-design/icons";

const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Add form submission logic here
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="contact-top" className="container mx-auto my-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-300">Contact Us</h2>
        <p className="text-gray-600">
          We would love to hear from you! Please fill out the form below and we
          will get in touch with you as soon as possible.
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            className="bg-white p-6 shadow-lg rounded-md"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please enter a subject" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-pink-300 border-none"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={24} md={12}>
          <div className="bg-gray-100 p-6 shadow-lg rounded-md">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Contact Information</h3>
            <p className="flex items-center mb-2">
              <PhoneOutlined className="mr-2" />
              <a
                href="tel:+233548691311"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                +233 54 869 1311
              </a>
              </p>
              <p className="flex items-center mb-2">
              <WhatsAppOutlined className="mr-2" />
              <a
                href="https://wa.me/233548691311"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                +233 54 869 1311
              </a>
            </p>
            <p className="flex items-center mb-2">
              <MailOutlined className="mr-2" />
              <a
                href="mailto:bmassabel@gmail.com"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                bmassabel@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-2">
              <EnvironmentOutlined className="mr-2" />
              <span className="text-sm">Ashaley Botwe, School Junction Ghana</span>
            </p>
            <h3 className="text-xl font-bold mt-4 text-pink-300">Opening Hours</h3>
            <div className="flex flex-col mt-2">
              <p>Monday - Friday: 9 AM - 5 PM</p>
              <p>Saturday: 9 AM - 3 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <h3 className="text-xl font-bold mt-4 text-pink-300">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com/profile.php?id=100063579040183&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <FacebookOutlined
                  style={{ fontSize: "24px", color: "#3b5998" }}
                />
              </a>
              <a
                href="https://tiktok.com/@maskreation?_t=8odlvG1eRGf&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition duration-300"
              >
                <TikTokOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://instagram.com/maskreation?igshid=aDdhcTZodHh1YXkx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-600 transition duration-300"
              >
                <InstagramOutlined
                  style={{ fontSize: "24px", color: "#e1306c" }}
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-pink-300">Our Location</h3>
        <div className="w-full h-64">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31856.644300221793!2d-0.15089215676530635!3d5.686225957645859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102073a758a7ef73%3A0x80cbbeb58ab0e8a!2sAshaley%20Botwe%2C%20Ghana!5e0!3m2!1sen!2sus!4v1625705656705!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
