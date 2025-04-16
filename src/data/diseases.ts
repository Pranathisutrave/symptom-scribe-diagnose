
export interface Treatment {
  type: string;
  name: string;
  description: string;
}

export interface Medication {
  name: string;
  dosage: string;
  purpose: string;
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: Treatment[];
  medications: Medication[];
  severity: "mild" | "moderate" | "severe";
  contagious: boolean;
  followUpRecommendation: string;
}

export interface DiseaseMatch {
  disease: Disease;
  matchScore: number;
  matchingSymptoms: string[];
}

export const diseases: Disease[] = [
  {
    id: "common_cold",
    name: "Common Cold",
    description: "A viral infection of the upper respiratory tract that primarily affects the nose and throat.",
    symptoms: ["nasalCongestion", "soreThroat", "cough", "sneezing", "malaise", "headache"],
    treatments: [
      {
        type: "Self Care",
        name: "Rest and Hydration",
        description: "Get plenty of rest and drink adequate fluids."
      },
      {
        type: "Self Care",
        name: "Humidification",
        description: "Use a humidifier or take hot showers to ease congestion."
      }
    ],
    medications: [
      {
        name: "Acetaminophen (Tylenol)",
        dosage: "325-650mg every 4-6 hours as needed",
        purpose: "Reduces fever and relieves pain"
      },
      {
        name: "Dextromethorphan",
        dosage: "As directed on packaging",
        purpose: "Suppresses cough"
      },
      {
        name: "Phenylephrine",
        dosage: "As directed on packaging",
        purpose: "Relieves nasal congestion"
      }
    ],
    severity: "mild",
    contagious: true,
    followUpRecommendation: "Usually resolves within 7-10 days. Seek medical attention if symptoms worsen or persist beyond 10 days."
  },
  {
    id: "flu",
    name: "Influenza (Flu)",
    description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.",
    symptoms: ["fever", "cough", "soreThroat", "bodyAches", "fatigue", "headache", "chills"],
    treatments: [
      {
        type: "Self Care",
        name: "Rest and Hydration",
        description: "Get plenty of rest and drink adequate fluids."
      },
      {
        type: "Medical",
        name: "Antiviral Medication",
        description: "May be prescribed by a doctor if caught early."
      }
    ],
    medications: [
      {
        name: "Oseltamivir (Tamiflu)",
        dosage: "75mg twice daily for 5 days",
        purpose: "Antiviral medication to reduce duration of symptoms"
      },
      {
        name: "Ibuprofen (Advil, Motrin)",
        dosage: "400-600mg every 6-8 hours as needed",
        purpose: "Reduces fever and relieves pain"
      }
    ],
    severity: "moderate",
    contagious: true,
    followUpRecommendation: "Seek medical attention if experiencing difficulty breathing, persistent chest pain, confusion, or if symptoms worsen."
  },
  {
    id: "migraine",
    name: "Migraine",
    description: "A neurological condition characterized by intense, debilitating headaches, often accompanied by other symptoms.",
    symptoms: ["headache", "nausea", "vomiting", "sensitivityToLight", "sensitivityToSound", "blurredVision"],
    treatments: [
      {
        type: "Self Care",
        name: "Rest in Dark Room",
        description: "Rest in a quiet, dark room during an attack."
      },
      {
        type: "Medical",
        name: "Preventive Medication",
        description: "Regular medication may be prescribed to prevent attacks."
      }
    ],
    medications: [
      {
        name: "Sumatriptan (Imitrex)",
        dosage: "50-100mg at onset of migraine",
        purpose: "Stops migraine pain by constricting blood vessels"
      },
      {
        name: "Topiramate (Topamax)",
        dosage: "25-100mg daily",
        purpose: "Prevents migraine attacks"
      },
      {
        name: "Propranolol",
        dosage: "40-160mg daily",
        purpose: "Prevents migraine attacks"
      }
    ],
    severity: "moderate",
    contagious: false,
    followUpRecommendation: "Consult a neurologist if migraines are frequent or severe. Keep a headache diary to identify triggers."
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid.",
    symptoms: ["cough", "fever", "chills", "shortnessOfBreath", "chestPain", "fatigue", "confusion"],
    treatments: [
      {
        type: "Medical",
        name: "Antibiotics",
        description: "Prescribed for bacterial pneumonia."
      },
      {
        type: "Self Care",
        name: "Rest and Hydration",
        description: "Get plenty of rest and stay hydrated."
      }
    ],
    medications: [
      {
        name: "Azithromycin",
        dosage: "500mg on first day, then 250mg daily for 4 days",
        purpose: "Treats bacterial infection"
      },
      {
        name: "Amoxicillin",
        dosage: "500mg three times daily for 7-10 days",
        purpose: "Treats bacterial infection"
      }
    ],
    severity: "severe",
    contagious: true,
    followUpRecommendation: "Seek immediate medical attention. Follow up with a healthcare provider after treatment to ensure the infection has cleared."
  },
  {
    id: "hypertension",
    name: "Hypertension (High Blood Pressure)",
    description: "A chronic condition in which the force of the blood against the artery walls is consistently too high.",
    symptoms: ["headache", "shortness of breath", "nosebleeds", "chest pain", "dizziness"],
    treatments: [
      {
        type: "Lifestyle",
        name: "Diet and Exercise",
        description: "Adopt a heart-healthy diet low in sodium and increase physical activity."
      },
      {
        type: "Medical",
        name: "Blood Pressure Medication",
        description: "Various medications may be prescribed to control blood pressure."
      }
    ],
    medications: [
      {
        name: "Lisinopril",
        dosage: "10-40mg once daily",
        purpose: "ACE inhibitor that relaxes blood vessels"
      },
      {
        name: "Amlodipine",
        dosage: "5-10mg once daily",
        purpose: "Calcium channel blocker that relaxes blood vessels"
      },
      {
        name: "Hydrochlorothiazide",
        dosage: "12.5-25mg once daily",
        purpose: "Diuretic that helps the body get rid of excess water and salt"
      }
    ],
    severity: "moderate",
    contagious: false,
    followUpRecommendation: "Regular monitoring of blood pressure. Schedule routine check-ups with healthcare provider."
  },
  {
    id: "diabetes",
    name: "Type 2 Diabetes",
    description: "A chronic condition that affects how the body metabolizes sugar (glucose).",
    symptoms: ["increased thirst", "frequent urination", "increased hunger", "fatigue", "blurred vision", "slow healing sores"],
    treatments: [
      {
        type: "Lifestyle",
        name: "Diet and Exercise",
        description: "Healthy diet and regular physical activity to help control blood sugar levels."
      },
      {
        type: "Medical",
        name: "Blood Sugar Monitoring",
        description: "Regular checking of blood glucose levels."
      }
    ],
    medications: [
      {
        name: "Metformin",
        dosage: "500-2000mg daily",
        purpose: "Reduces glucose production in the liver"
      },
      {
        name: "Glipizide",
        dosage: "5-20mg daily",
        purpose: "Stimulates insulin release"
      },
      {
        name: "Insulin",
        dosage: "Varies based on individual needs",
        purpose: "Regulates blood sugar levels"
      }
    ],
    severity: "severe",
    contagious: false,
    followUpRecommendation: "Regular check-ups with healthcare provider. Monitor blood sugar levels as directed."
  },
  {
    id: "gerd",
    name: "Gastroesophageal Reflux Disease (GERD)",
    description: "A digestive disorder that affects the lower esophageal sphincter, causing stomach acid to regularly flow back into the esophagus.",
    symptoms: ["heartburn", "regurgitation", "difficulty swallowing", "chest pain", "chronic cough", "nausea"],
    treatments: [
      {
        type: "Lifestyle",
        name: "Diet Modifications",
        description: "Avoid trigger foods, eat smaller meals, and don't lie down after eating."
      },
      {
        type: "Medical",
        name: "Acid Reducers",
        description: "Medications to reduce stomach acid production."
      }
    ],
    medications: [
      {
        name: "Omeprazole",
        dosage: "20-40mg once daily",
        purpose: "Reduces stomach acid production"
      },
      {
        name: "Famotidine",
        dosage: "20mg twice daily",
        purpose: "Reduces stomach acid production"
      },
      {
        name: "Antacids (Tums, Rolaids)",
        dosage: "As needed",
        purpose: "Neutralizes stomach acid"
      }
    ],
    severity: "moderate",
    contagious: false,
    followUpRecommendation: "Consult a gastroenterologist if symptoms persist despite treatment. Consider endoscopy if symptoms are severe or persistent."
  },
  {
    id: "arthritis",
    name: "Rheumatoid Arthritis",
    description: "A chronic inflammatory disorder that can affect more than just the joints.",
    symptoms: ["joint pain", "joint stiffness", "joint swelling", "fatigue", "fever", "loss of appetite"],
    treatments: [
      {
        type: "Medical",
        name: "Disease-Modifying Antirheumatic Drugs (DMARDs)",
        description: "Medications that can slow the progression of the disease."
      },
      {
        type: "Physical Therapy",
        name: "Exercise and Stretching",
        description: "Specific exercises to maintain joint mobility."
      }
    ],
    medications: [
      {
        name: "Methotrexate",
        dosage: "7.5-20mg once weekly",
        purpose: "Reduces inflammation and slows disease progression"
      },
      {
        name: "Prednisone",
        dosage: "5-10mg daily",
        purpose: "Reduces inflammation and pain"
      },
      {
        name: "Adalimumab (Humira)",
        dosage: "40mg every other week",
        purpose: "Biologic medication that reduces inflammation"
      }
    ],
    severity: "severe",
    contagious: false,
    followUpRecommendation: "Regular appointments with a rheumatologist. Lab tests to monitor disease activity and medication effects."
  },
  {
    id: "sinusitis",
    name: "Sinusitis",
    description: "Inflammation of the sinuses, often due to infection.",
    symptoms: ["nasalCongestion", "facialPain", "headache", "postNasalDrip", "cough", "fatigue"],
    treatments: [
      {
        type: "Self Care",
        name: "Nasal Irrigation",
        description: "Use a neti pot or saline spray to flush out sinuses."
      },
      {
        type: "Medical",
        name: "Antibiotics",
        description: "May be prescribed if the infection is bacterial."
      }
    ],
    medications: [
      {
        name: "Amoxicillin-Clavulanate",
        dosage: "875mg twice daily for 7-10 days",
        purpose: "Treats bacterial infection"
      },
      {
        name: "Fluticasone (Flonase)",
        dosage: "1-2 sprays in each nostril once daily",
        purpose: "Reduces inflammation in nasal passages"
      },
      {
        name: "Pseudoephedrine (Sudafed)",
        dosage: "30-60mg every 4-6 hours",
        purpose: "Relieves nasal congestion"
      }
    ],
    severity: "mild",
    contagious: false,
    followUpRecommendation: "See a doctor if symptoms last longer than 10 days or if you have recurring sinusitis."
  },
  {
    id: "asthma",
    name: "Asthma",
    description: "A condition in which the airways narrow and swell, producing extra mucus.",
    symptoms: ["shortnessOfBreath", "wheezing", "coughing", "chestTightness"],
    treatments: [
      {
        type: "Medical",
        name: "Inhalers",
        description: "Quick-relief and long-term control medications."
      },
      {
        type: "Lifestyle",
        name: "Trigger Avoidance",
        description: "Identify and avoid asthma triggers."
      }
    ],
    medications: [
      {
        name: "Albuterol (ProAir, Ventolin)",
        dosage: "2 puffs every 4-6 hours as needed",
        purpose: "Quick-relief inhaler for symptoms"
      },
      {
        name: "Fluticasone-Salmeterol (Advair)",
        dosage: "1 inhalation twice daily",
        purpose: "Long-term control medication"
      },
      {
        name: "Montelukast (Singulair)",
        dosage: "10mg once daily",
        purpose: "Prevents asthma symptoms"
      }
    ],
    severity: "moderate",
    contagious: false,
    followUpRecommendation: "Regular check-ups with a pulmonologist. Keep a symptom diary and monitor peak flow readings."
  }
];

// Enhanced helper function to match symptoms to diseases with percentage
export const getDiseasesBySymptoms = (selectedSymptomIds: string[]): DiseaseMatch[] => {
  if (!selectedSymptomIds.length) return [];
  
  // Calculate match score for each disease
  const matchScores = diseases.map(disease => {
    const matchingSymptoms = disease.symptoms.filter(symptomId => 
      selectedSymptomIds.includes(symptomId)
    );
    
    // Calculate two-way match score:
    // 1. How many of the disease's symptoms are in the user selection
    const diseaseSymptomsCoverage = matchingSymptoms.length / disease.symptoms.length;
    
    // 2. How many of the user's selected symptoms are in this disease
    const userSymptomsCoverage = matchingSymptoms.length / selectedSymptomIds.length;
    
    // Weighted average with more weight on disease symptoms coverage
    const overallMatchScore = (diseaseSymptomsCoverage * 0.7) + (userSymptomsCoverage * 0.3);
    
    // Return as a percentage
    const matchPercentage = Math.round(overallMatchScore * 100);
    
    return {
      disease,
      matchScore: matchPercentage,
      matchingSymptoms: matchingSymptoms
    };
  });
  
  // Filter for relevant matches and sort by score
  return matchScores
    .filter(match => match.matchingSymptoms.length > 0) // Must have at least one matching symptom
    .sort((a, b) => b.matchScore - a.matchScore) // Sort by score descending
    .slice(0, 5); // Take top 5 matches
};
