import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/Agri-Connect.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="space-y-4">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <img src={Logo} alt="AgriConnect Logo" className="h-12 w-auto" /> 
            <p>Agri</p>
            <p className="text-secondary">Connect</p>
          </div>
          <p className="text-gray-400 p-5">
            AgriConnect helps farmers sell fresh produce directly to consumers, ensuring the best quality and fair prices for all.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Shop Vegetables
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Farmer Updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Address: 123 Farm Lane, AgriTown, India
          </p>
          <p className="text-gray-400">
            Email: <a href="mailto:info@agriconnect.com" className="hover:text-green-500">info@agriconnect.com</a>
          </p>
          <p className="text-gray-400">
            Phone: <a href="tel:+919876543210" className="hover:text-green-500">+91 98765 43210</a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 AgriConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
