
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Heart, Shield, Server, Bot, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-medical-dark mb-4">About SymptomScribe</h1>
          <p className="text-xl text-gray-600">
            Using artificial intelligence to help you understand your health
          </p>
        </div>
        
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="technology">Our Technology</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-medical-dark">
                  <Heart className="mr-2 h-6 w-6 text-medical-primary" />
                  Our Mission
                </CardTitle>
                <CardDescription>
                  Making healthcare information accessible to everyone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  At SymptomScribe, we believe that everyone should have access to reliable health information. 
                  Our mission is to empower individuals to make informed decisions about their health by providing 
                  AI-powered insights based on reported symptoms.
                </p>
                <p>
                  We aim to bridge the gap between symptom onset and medical consultation, helping users understand 
                  potential conditions and appropriate next steps. While we never replace professional medical advice, 
                  we strive to be a trusted first resource for health concerns.
                </p>
                <div className="bg-medical-light p-4 rounded-md mt-4">
                  <h3 className="font-semibold text-medical-dark mb-2">Our Core Values</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Accuracy and reliability in health information</li>
                    <li>Accessibility for users of all backgrounds</li>
                    <li>Privacy and security of sensitive health data</li>
                    <li>Continuous improvement through medical research and AI advancements</li>
                    <li>Responsible use of technology in healthcare</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technology" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-medical-dark">
                  <Brain className="mr-2 h-6 w-6 text-medical-primary" />
                  Our Technology
                </CardTitle>
                <CardDescription>
                  Advanced AI for symptom analysis and disease prediction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Bot className="h-5 w-5 text-medical-primary mr-2" />
                      <h3 className="font-semibold text-medical-dark">AI Diagnosis Engine</h3>
                    </div>
                    <p className="text-gray-700">
                      Our proprietary AI algorithm analyzes combinations of symptoms to identify potential 
                      conditions with remarkable accuracy. By continuously learning from medical databases 
                      and research, our system becomes increasingly precise over time.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Server className="h-5 w-5 text-medical-primary mr-2" />
                      <h3 className="font-semibold text-medical-dark">Medical Knowledge Base</h3>
                    </div>
                    <p className="text-gray-700">
                      Behind our system is a vast database of medical knowledge, including symptom-disease 
                      relationships, treatment options, and medication information. This database is regularly 
                      updated to reflect the latest medical research and guidelines.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-medical-primary mr-2" />
                      <h3 className="font-semibold text-medical-dark">Privacy & Security</h3>
                    </div>
                    <p className="text-gray-700">
                      We employ state-of-the-art encryption and security measures to protect your health 
                      information. Your data is never sold or shared with third parties, and we comply with 
                      all relevant healthcare privacy regulations.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-medical-primary mr-2" />
                      <h3 className="font-semibold text-medical-dark">User-Centered Design</h3>
                    </div>
                    <p className="text-gray-700">
                      Our platform is designed with users in mind, making complex medical information accessible 
                      and easy to understand. We focus on creating an intuitive experience that guides you through 
                      the symptom reporting and diagnosis process.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mt-6">
                  <h3 className="font-semibold text-medical-dark mb-2">Technology Limitations</h3>
                  <p className="text-gray-700">
                    While our technology is sophisticated, it has limitations. Our system:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>Cannot access physical signs a doctor would observe</li>
                    <li>Is not a replacement for laboratory tests or imaging</li>
                    <li>May not detect rare conditions with limited data</li>
                    <li>Should be used as an informational tool, not for definitive diagnosis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-medical-dark">
                  <Users className="mr-2 h-6 w-6 text-medical-primary" />
                  Our Team
                </CardTitle>
                <CardDescription>
                  A diverse group of healthcare and technology experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  SymptomScribe was founded by a team of physicians, AI researchers, and health technology 
                  specialists united by a common goal: making quality health information accessible to everyone.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-medical-dark mb-2">Medical Advisory Board</h3>
                    <p className="text-gray-700">
                      Our platform is guided by a board of practicing physicians across various specialties, 
                      ensuring that our system adheres to clinical standards and provides medically sound information.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-medical-dark mb-2">AI Research Team</h3>
                    <p className="text-gray-700">
                      Our AI specialists continuously refine our algorithms and models, incorporating the 
                      latest advancements in machine learning for healthcare applications.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-medical-dark mb-2">Development Team</h3>
                    <p className="text-gray-700">
                      Our software engineers and designers work to create an intuitive, accessible platform 
                      that makes complex health information easy to understand and navigate.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-medical-dark mb-2">Medical Content Team</h3>
                    <p className="text-gray-700">
                      Healthcare professionals who ensure all information provided is accurate, up-to-date, 
                      and presented in a way that's helpful and understandable for users.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="font-semibold text-medical-dark mb-2">Join Our Mission</h3>
                  <p className="text-gray-700">
                    We're always looking for talented individuals passionate about healthcare and technology. 
                    If you're interested in contributing to our mission, please reach out to our team at 
                    <a href="mailto:careers@symptomscribe.com" className="text-medical-primary hover:underline"> careers@symptomscribe.com</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-medical-light p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-medical-dark mb-4">Medical Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The content provided by SymptomScribe is for informational and educational purposes only and is not 
            intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-gray-700 mb-4">
            Always seek the advice of your physician or other qualified health provider with any questions you 
            may have regarding a medical condition. Never disregard professional medical advice or delay in seeking 
            it because of something you have read on this website.
          </p>
          <p className="text-gray-700">
            If you think you may have a medical emergency, call your doctor or emergency services immediately. 
            SymptomScribe does not recommend or endorse any specific tests, physicians, products, procedures, 
            opinions, or other information that may be mentioned on our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
