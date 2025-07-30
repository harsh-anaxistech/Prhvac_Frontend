import React, { useState, useEffect } from 'react';
import BgImage from "../../assets/Contact-banner.jpg";
import API from "../../utils/api"; // Adjust the path to your api.jsx

const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "First Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "phone Number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!captchaInput.trim()) {
      newErrors.captcha = "CAPTCHA is required";
    } else if (captchaInput !== captcha) {
      newErrors.captcha = "Incorrect CAPTCHA";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await API.post("/api/contact", formData);
      setFormStatus(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setCaptchaInput("");
      setCaptcha(generateCaptcha());
    } catch (error) {
      setFormStatus(
        error.response?.data?.error || "Failed to send message. Please try again."
      );
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setErrors({ ...errors, captcha: "" });
  };

  return (
    <>
      <div
        className="relative w-full h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(102, 163, 210, 0.6), rgba(102, 163, 210, 0.4)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Contact Us
          </h1>
        </div>
      </div>
      <section className='contact-section'>
        <div className="contact-section-container">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span><img src="https://i.ibb.co/cbnfrDF/location.png" alt="location" /></span>
                  <span>
                    UL 1&2, Suryarath, Sampada Owners Association, Ellisbridge, Ahmedabad.

                  </span>
                </li>
                <li>
                  <span>
                    <img src="https://i.ibb.co/rbbwDkP/mail.png" alt="mail" />
                  </span>
                  <span>
                    <a href="mailto:director@prhvac.in" className=" hover:underline">
                      director@prhvac.in
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="https://i.ibb.co/DGGjsW7/call.png" alt="call" />
                  </span>
                  <span>
                    <a href="tel:+919825098767" className=" hover:underline">
                      +91 9825098767
                    </a>
                  </span>
                </li>

              </ul>
            </div>

          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span>First Name</span>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="inputBox w50">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Email Address</span>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="inputBox w100">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span>phone Number</span>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="inputBox w100">
                <input
                  name="message"
                  value={formData.message}
                  onChange={handleChange}

                  required
                ></input>
                <span>Write Your Message Here...</span>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div className="inputBox w100">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 px-4 py-2 font-mono text-base select-none text-center w-[100px]">
                    {captcha}
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="text-[#00508D] bg-gray-200 hover:text-[#003a66] transition text-sm"
                    aria-label="Refresh CAPTCHA"
                    style={{ padding: '10px', width: '50px' }}
                  >
                    <i className="fas fa-rotate-right"></i>
                  </button>
                  <input
                    type="text"
                    placeholder="Enter"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-[100px] captcha-width px-4 py-2 border border-gray-300 rounded text-base font-mono outline-none text-center"
                  />
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                )}
              </div>
              <div className="inputBox w100">
                <input
                  type="submit"
                  value="Send"
                  onClick={handleSubmit}
                  className="group border border-[#00508D] text-[#00508D] text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-[#003366] hover:text-white"
                />
                {formStatus && (
                  <p
                    className={`mt-4 text-sm ${formStatus.includes("Thank you")
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {formStatus}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="location_section">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9976969987674!2d72.55504147798678!3d23.02385677616649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e857a892279fd%3A0xa7218bd9722ff6fd!2sPR%20HVAC%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1752838554155!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PR HVAC PRIVATE LIMITED Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;