import { useState } from "react";
import Header from "../../components/header/Header";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div>
      <Header breadCrumbs={breadcrumbs} title={"Contact"} />{" "}
      <div className="md:w-[90%] mx-auto">
        <div>
          <div className="text-center mt-10">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center p-10">
          <div className="w-1/2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
              <p className="text-gray-600 mb-4">
                I'm happy to help! If you're looking for contact information or
                details about Edu.CHAMPS's online free courses website for
                e-learning, I don't have real-time browsing capabilities to
                access current websites or specific contact details.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4 gap-5">
                <div className="bg-[#0298D8] inline-block p-3">
                  <IoLocation className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Office</h4>
                  <p className="text-gray-600">
                    123 Street, Bangalore, Karnataka
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4 gap-5">
                <div className="bg-[#0298D8] inline-block p-3">
                  <FaPhoneAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Mobile</h4>
                  <p className="text-gray-600">+92 341 9661 304</p>
                </div>
              </div>
              <div className="flex items-center mb-4 gap-5">
                <div className="bg-[#0298D8] inline-block p-3">
                  <MdEmail className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Email</h4>
                  <p className="text-gray-600">educhamps001@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 align-center justify-center">
                <div className="flex flex-col md:flex-row justify-between w-full gap-3">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your Name"
                    className="border border-gray-500 p-2 rounded-md w-full md:w-1/2"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="Your Email"
                    className="border border-gray-500 p-2 rounded-md w-full md:w-1/2"
                  />
                </div>
                <div>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    placeholder="Subject"
                    className="w-full border border-gray-500 p-2 rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="Your Message"
                    className="w-full border border-gray-500 p-2 rounded-md"
                    rows={5}
                    cols={30}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#0298D8] w-full p-2 rounded-md text-white font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
