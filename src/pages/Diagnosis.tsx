
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Stethoscope, Search, AlertCircle, Activity, ArrowRight, Pill, Thermometer, X } from "lucide-react";
import { getSymptomsByCategory, symptoms, Symptom } from "@/data/symptoms";
import { getDiseasesBySymptoms, Disease } from "@/data/diseases";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Diagnosis = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [diagnoseClicked, setDiagnoseClicked] = useState(false);
  const [diagnosisResults, setDiagnosisResults] = useState<Disease[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  // Get symptoms grouped by category
  const categorizedSymptoms = getSymptomsByCategory();
  const categories = ["All", ...Object.keys(categorizedSymptoms)];

  // Filter symptoms by search query and active category
  const getFilteredSymptoms = () => {
    const filteredBySearch = symptoms.filter(symptom =>
      symptom.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (activeCategory === "All") {
      return filteredBySearch;
    }

    return filteredBySearch.filter(symptom => 
      symptom.category === activeCategory
    );
  };

  const filteredSymptoms = getFilteredSymptoms();

  const toggleSymptom = (symptom: Symptom) => {
    if (selectedSymptoms.find(s => s.id === symptom.id)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptom.id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const removeSymptom = (symptomId: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptomId));
  };

  const handleDiagnose = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to diagnose.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    setDiagnoseClicked(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const results = getDiseasesBySymptoms(selectedSymptoms.map(s => s.id));
      setDiagnosisResults(results);
      setIsAnalyzing(false);
      
      if (results.length > 0) {
        setSelectedDisease(results[0]);
      } else {
        setSelectedDisease(null);
        toast({
          title: "No matches found",
          description: "We couldn't find any diseases matching your symptoms. Please consult a healthcare professional.",
          variant: "destructive",
        });
      }
    }, 2000);
  };

  const resetDiagnosis = () => {
    setSearchQuery("");
    setSelectedSymptoms([]);
    setDiagnoseClicked(false);
    setDiagnosisResults([]);
    setSelectedDisease(null);
  };

  const getSeverityColor = (severity: "mild" | "moderate" | "severe") => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "severe":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-medical-dark mb-2">Symptom Checker</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Select your symptoms to receive an AI-powered diagnosis and treatment recommendations.
      </p>
      
      {!isAuthenticated && !diagnoseClicked && (
        <Alert className="mb-8 max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>You're not logged in</AlertTitle>
          <AlertDescription>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span>Create an account to save your diagnosis history.</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {!diagnoseClicked ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Thermometer className="mr-2 h-5 w-5 text-medical-primary" />
                  Select Your Symptoms
                </CardTitle>
                <CardDescription>
                  Search or browse symptoms by category
                </CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search symptoms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                  <ScrollArea className="max-w-full">
                    <TabsList className="mb-4 whitespace-nowrap overflow-x-auto">
                      {categories.map((category) => (
                        <TabsTrigger key={category} value={category}>
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </ScrollArea>
                  
                  <ScrollArea className="h-[400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredSymptoms.length > 0 ? (
                        filteredSymptoms.map((symptom) => (
                          <div key={symptom.id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md">
                            <Checkbox
                              id={`symptom-${symptom.id}`}
                              checked={selectedSymptoms.some(s => s.id === symptom.id)}
                              onCheckedChange={() => toggleSymptom(symptom)}
                            />
                            <label
                              htmlFor={`symptom-${symptom.id}`}
                              className="text-sm cursor-pointer flex-1"
                            >
                              {symptom.name}
                            </label>
                            <Badge variant="outline" className="text-xs">{symptom.category}</Badge>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-12 text-gray-500">
                          No symptoms found matching your search
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleDiagnose} 
                  className="w-full bg-medical-primary hover:bg-medical-dark"
                  disabled={selectedSymptoms.length === 0}
                >
                  Diagnose <Stethoscope className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-medical-primary" />
                  Selected Symptoms
                </CardTitle>
                <CardDescription>
                  {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? 's' : ''} selected
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedSymptoms.length > 0 ? (
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {selectedSymptoms.map((symptom) => (
                        <div key={symptom.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                          <span className="text-sm">{symptom.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSymptom(symptom.id)}
                            className="h-6 w-6 p-0 rounded-full"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    No symptoms selected yet
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  onClick={resetDiagnosis}
                  className="w-full"
                  disabled={selectedSymptoms.length === 0}
                >
                  Clear All
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          {isAnalyzing ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="animate-pulse-subtle">
                    <Stethoscope className="h-16 w-16 text-medical-primary mb-4" />
                  </div>
                  <h3 className="text-2xl font-semibold text-medical-dark mb-2">Analyzing Symptoms</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Our AI is processing your symptoms and finding potential matches...
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Potential Conditions</CardTitle>
                    <CardDescription>
                      Based on your {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {diagnosisResults.length > 0 ? (
                      <div className="space-y-2">
                        {diagnosisResults.map((disease) => (
                          <div 
                            key={disease.id}
                            className={`p-3 rounded-md cursor-pointer transition-colors ${
                              selectedDisease?.id === disease.id 
                                ? 'bg-medical-light border-l-4 border-medical-primary' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => setSelectedDisease(disease)}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{disease.name}</h4>
                              <Badge className={getSeverityColor(disease.severity)}>
                                {disease.severity}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-gray-500">
                        No matches found
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      onClick={resetDiagnosis}
                      className="w-full"
                    >
                      Start Over
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                {selectedDisease ? (
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">{selectedDisease.name}</CardTitle>
                          <CardDescription className="mt-1">
                            <Badge className={getSeverityColor(selectedDisease.severity)}>
                              {selectedDisease.severity} severity
                            </Badge>
                            {selectedDisease.contagious && (
                              <Badge variant="outline" className="ml-2">
                                Contagious
                              </Badge>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Description</h3>
                        <p className="text-gray-700">{selectedDisease.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-medical-primary" />
                          Common Symptoms
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {symptoms
                            .filter(symptom => selectedDisease.symptoms.includes(symptom.id))
                            .map(symptom => (
                              <Badge key={symptom.id} variant="secondary">
                                {symptom.name}
                              </Badge>
                            ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <Pill className="mr-2 h-5 w-5 text-medical-primary" />
                          Recommended Treatments
                        </h3>
                        <div className="space-y-3">
                          {selectedDisease.treatments.map((treatment, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-md">
                              <div className="font-medium text-medical-dark">{treatment.name}</div>
                              <div className="text-sm text-gray-600">{treatment.type}</div>
                              <div className="mt-1 text-sm">{treatment.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Medications</h3>
                        <div className="space-y-3">
                          {selectedDisease.medications.map((medication, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-md">
                              <div className="font-medium text-medical-dark">{medication.name}</div>
                              <div className="text-sm">Dosage: {medication.dosage}</div>
                              <div className="mt-1 text-sm text-gray-600">{medication.purpose}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Medical Advice</AlertTitle>
                        <AlertDescription>
                          {selectedDisease.followUpRecommendation}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                    <CardFooter>
                      <div className="text-sm text-gray-500 italic w-full text-center">
                        This information is for educational purposes only and is not a substitute for professional medical advice.
                      </div>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card className="flex items-center justify-center h-full">
                    <CardContent className="py-12 text-center">
                      <div className="text-gray-400 mb-4">
                        <AlertCircle className="h-12 w-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">No Condition Selected</h3>
                      <p className="text-gray-600 mb-4">
                        Please select a condition from the list to see detailed information.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-8 max-w-4xl mx-auto bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-600">
        <p className="font-semibold mb-2">Important Medical Disclaimer</p>
        <p>
          The information provided by this tool is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  );
};

export default Diagnosis;
