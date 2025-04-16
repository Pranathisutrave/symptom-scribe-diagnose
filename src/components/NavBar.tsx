
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Stethoscope className="h-8 w-8 text-medical-primary" />
                <span className="ml-2 text-xl font-bold text-medical-dark">SymptomScribe</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-medical-primary px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/diagnosis" className="text-gray-700 hover:text-medical-primary px-3 py-2 text-sm font-medium">
                Diagnosis
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-medical-primary px-3 py-2 text-sm font-medium">
                About
              </Link>
              
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  className="border-medical-primary text-medical-primary hover:bg-medical-light"
                  onClick={logout}
                >
                  Logout
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="border-medical-primary text-medical-primary hover:bg-medical-light"
                    asChild
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button
                    className="bg-medical-primary hover:bg-medical-dark text-white"
                    asChild
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medical-primary focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/diagnosis" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnosis
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-medical-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <Button
                variant="outline"
                className="w-full justify-center border-medical-primary text-medical-primary hover:bg-medical-light mt-2"
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
              >
                Logout
              </Button>
            ) : (
              <div className="space-y-2 mt-2 px-3">
                <Button
                  variant="outline"
                  className="w-full justify-center border-medical-primary text-medical-primary hover:bg-medical-light"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  className="w-full justify-center bg-medical-primary hover:bg-medical-dark text-white"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
