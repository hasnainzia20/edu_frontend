import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-linkColor1 text-white">
      <div className=" grid lg:grid-cols-3 grid-cols-1 md:p-20 p-10">
        <div className="mb-10">
          <div>
            <h2 className="text-xl mb-2">Quick Link</h2>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">Privacy policy</Link>
              </li>
              <li>
                <Link to="/about">Terms and Condition</Link>
              </li>
              <li>
                <Link to="/about">FAQs and Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-10">
            <div>
              <h2 className="text-xl mb-2">Contact</h2>
            </div>
            <div className="space-y-3 mb-3">
              <div className="flex">
                <div className="mr-2">
                  <IoLocation />
                </div>
                <p>Abbottabad, Kpk, Pakistan</p>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <FaPhoneAlt />
                </div>
                <p>+92 341 9661 304</p>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <IoMdMail />
                </div>
                <p>educhamps001@gmail.com</p>
              </div>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <FaSquareXTwitter className="w-8 h-8" />
                </li>
                <li>
                  <FaFacebookSquare className="w-8 h-8" />
                </li>
                <li>
                  <FaYoutubeSquare className="w-8 h-8" />
                </li>
                <li>
                  <FaLinkedin className="w-8 h-8" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl mb-2">Subscribe to our Newsletter</h2>
          </div>
          <div className="mb-3">
            <p>
              Subscribe now and join our growing community of learners committed
              to lifelong education!
            </p>
          </div>
          <div>
            <form action="" method="post">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-l-md p-2"
                />
                <div className="bg-white py-2 px-3 rounded-r-md">
                  <input
                    type="submit"
                    value="Subscribe"
                    className=" font-semibold bg-logoColor2 py-2 px-3 text-white rounded-xl"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto border-gray-600" />
      <div className="px-20 py-10">
        <p>&copy; EDU.Champs, All rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
