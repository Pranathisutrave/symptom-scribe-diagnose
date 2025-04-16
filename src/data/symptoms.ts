
export interface Symptom {
  id: string;
  name: string;
  category: string;
}

export const symptoms: Symptom[] = [
  // General symptoms
  { id: "fever", name: "Fever", category: "General" },
  { id: "fatigue", name: "Fatigue", category: "General" },
  { id: "weakness", name: "Weakness", category: "General" },
  { id: "weightLoss", name: "Weight Loss", category: "General" },
  { id: "malaise", name: "General Discomfort", category: "General" },
  { id: "chills", name: "Chills", category: "General" },
  { id: "nightSweats", name: "Night Sweats", category: "General" },
  
  // Head & Neurological
  { id: "headache", name: "Headache", category: "Head & Neurological" },
  { id: "dizziness", name: "Dizziness", category: "Head & Neurological" },
  { id: "confusion", name: "Confusion", category: "Head & Neurological" },
  { id: "memoryIssues", name: "Memory Issues", category: "Head & Neurological" },
  { id: "seizures", name: "Seizures", category: "Head & Neurological" },
  { id: "blurredVision", name: "Blurred Vision", category: "Head & Neurological" },
  { id: "tremors", name: "Tremors", category: "Head & Neurological" },
  
  // Respiratory
  { id: "cough", name: "Cough", category: "Respiratory" },
  { id: "shortnessOfBreath", name: "Shortness of Breath", category: "Respiratory" },
  { id: "soreThroat", name: "Sore Throat", category: "Respiratory" },
  { id: "nasalCongestion", name: "Nasal Congestion", category: "Respiratory" },
  { id: "chestPain", name: "Chest Pain", category: "Respiratory" },
  { id: "wheezing", name: "Wheezing", category: "Respiratory" },
  
  // Gastrointestinal
  { id: "nausea", name: "Nausea", category: "Gastrointestinal" },
  { id: "vomiting", name: "Vomiting", category: "Gastrointestinal" },
  { id: "diarrhea", name: "Diarrhea", category: "Gastrointestinal" },
  { id: "constipation", name: "Constipation", category: "Gastrointestinal" },
  { id: "abdominalPain", name: "Abdominal Pain", category: "Gastrointestinal" },
  { id: "bloating", name: "Bloating", category: "Gastrointestinal" },
  { id: "lossOfAppetite", name: "Loss of Appetite", category: "Gastrointestinal" },
  
  // Musculoskeletal
  { id: "jointPain", name: "Joint Pain", category: "Musculoskeletal" },
  { id: "musclePain", name: "Muscle Pain", category: "Musculoskeletal" },
  { id: "backPain", name: "Back Pain", category: "Musculoskeletal" },
  { id: "stiffness", name: "Stiffness", category: "Musculoskeletal" },
  { id: "swelling", name: "Swelling", category: "Musculoskeletal" },
  
  // Skin
  { id: "rash", name: "Rash", category: "Skin" },
  { id: "itching", name: "Itching", category: "Skin" },
  { id: "hives", name: "Hives", category: "Skin" },
  { id: "dryness", name: "Dryness", category: "Skin" },
  { id: "bruising", name: "Bruising", category: "Skin" },
  { id: "yellowing", name: "Yellowing of skin/eyes", category: "Skin" },
  
  // Cardiovascular
  { id: "chestPressure", name: "Chest Pressure", category: "Cardiovascular" },
  { id: "palpitations", name: "Palpitations", category: "Cardiovascular" },
  { id: "fastHeartRate", name: "Fast Heart Rate", category: "Cardiovascular" },
  { id: "slowHeartRate", name: "Slow Heart Rate", category: "Cardiovascular" },
  { id: "swellingLimbs", name: "Swelling in Limbs", category: "Cardiovascular" },
  
  // Psychological
  { id: "anxiety", name: "Anxiety", category: "Psychological" },
  { id: "depression", name: "Depression", category: "Psychological" },
  { id: "insomnia", name: "Insomnia", category: "Psychological" },
  { id: "moodChanges", name: "Mood Changes", category: "Psychological" },
  { id: "irritability", name: "Irritability", category: "Psychological" },
];

export const getSymptomsByCategory = () => {
  const categories: { [key: string]: Symptom[] } = {};
  
  symptoms.forEach(symptom => {
    if (!categories[symptom.category]) {
      categories[symptom.category] = [];
    }
    categories[symptom.category].push(symptom);
  });
  
  return categories;
};
