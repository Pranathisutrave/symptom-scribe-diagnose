
import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SymptomScribe</h3>
            <p className="text-gray-300 mb-4">
              AI-powered symptom analysis and disease prediction to help you
              understand your health concerns.
            </p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-medical-accent mr-2" />
              <p className="text-sm text-medical-accent">
                For informational purposes only. Always consult a doctor.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-medical-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-gray-300 hover:text-medical-accent transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-medical-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-medical-accent transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-medical-accent transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-medical-accent mr-2" />
                <a href="mailto:contact@symptomscribe.com" className="text-gray-300 hover:text-medical-accent">
                  contact@symptomscribe.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-medical-accent mr-2" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-medical-accent">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SymptomScribe. All rights reserved.</p>
          <p className="mt-2">
            This service is not intended to replace professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
