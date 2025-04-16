
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Activity, Pill, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-light to-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
              AI-Powered Disease Diagnosis
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Identify potential health conditions based on your symptoms and get personalized treatment suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-medical-primary hover:bg-medical-dark text-white font-semibold px-6 py-3 rounded-lg text-lg"
                asChild
              >
                <Link to="/diagnosis">
                  Start Diagnosis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              {!isAuthenticated && (
                <Button 
                  variant="outline" 
                  className="border-medical-primary text-medical-primary hover:bg-medical-light font-semibold px-6 py-3 rounded-lg text-lg"
                  asChild
                >
                  <Link to="/signup">Create Account</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-medical-accent rounded-full opacity-30 absolute top-0 left-0 -z-10"></div>
              <Stethoscope className="w-48 h-48 md:w-64 md:h-64 text-medical-primary" />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-medical-light p-6 rounded-lg shadow-md text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-medical-primary" />
              </div>
              <h3 className="text-xl font-semibold text-medical-dark mb-3">
                Enter Your Symptoms
              </h3>
              <p className="text-gray-600">
                Select from our comprehensive list of symptoms to describe your condition accurately.
              </p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg shadow-md text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-medical-primary" />
              </div>
              <h3 className="text-xl font-semibold text-medical-dark mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our advanced AI system analyzes your symptoms to identify potential health conditions.
              </p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg shadow-md text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-8 w-8 text-medical-primary" />
              </div>
              <h3 className="text-xl font-semibold text-medical-dark mb-3">
                Treatment Suggestions
              </h3>
              <p className="text-gray-600">
                Receive personalized treatment options and medication suggestions for your condition.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              For informational purposes only. Always consult with a healthcare professional.
            </p>
            <Button 
              className="bg-medical-primary hover:bg-medical-dark text-white"
              asChild
            >
              <Link to="/diagnosis">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Disclaimer Banner */}
      <section className="bg-medical-dark text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Medical Disclaimer</h3>
          <p className="max-w-4xl mx-auto">
            SymptomScribe is designed to provide information and suggestions only. 
            It is not intended to replace professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
