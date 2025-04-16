
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
  { id: "appetiteLoss", name: "Loss of Appetite", category: "General" },
  { id: "weightGain", name: "Weight Gain", category: "General" },
  { id: "lethargy", name: "Lethargy", category: "General" },
  { id: "dehydration", name: "Dehydration", category: "General" },
  
  // Head & Neurological
  { id: "headache", name: "Headache", category: "Head & Neurological" },
  { id: "dizziness", name: "Dizziness", category: "Head & Neurological" },
  { id: "confusion", name: "Confusion", category: "Head & Neurological" },
  { id: "memoryIssues", name: "Memory Issues", category: "Head & Neurological" },
  { id: "seizures", name: "Seizures", category: "Head & Neurological" },
  { id: "blurredVision", name: "Blurred Vision", category: "Head & Neurological" },
  { id: "tremors", name: "Tremors", category: "Head & Neurological" },
  { id: "vertigo", name: "Vertigo", category: "Head & Neurological" },
  { id: "tinnitus", name: "Ringing in Ears", category: "Head & Neurological" },
  { id: "numbness", name: "Numbness/Tingling", category: "Head & Neurological" },
  { id: "slurredSpeech", name: "Slurred Speech", category: "Head & Neurological" },
  { id: "sensitivityToLight", name: "Light Sensitivity", category: "Head & Neurological" },
  { id: "sensitivityToSound", name: "Sound Sensitivity", category: "Head & Neurological" },
  
  // Respiratory
  { id: "cough", name: "Cough", category: "Respiratory" },
  { id: "shortnessOfBreath", name: "Shortness of Breath", category: "Respiratory" },
  { id: "soreThroat", name: "Sore Throat", category: "Respiratory" },
  { id: "nasalCongestion", name: "Nasal Congestion", category: "Respiratory" },
  { id: "chestPain", name: "Chest Pain", category: "Respiratory" },
  { id: "wheezing", name: "Wheezing", category: "Respiratory" },
  { id: "rapidBreathing", name: "Rapid Breathing", category: "Respiratory" },
  { id: "sneezing", name: "Sneezing", category: "Respiratory" },
  { id: "runnyNose", name: "Runny Nose", category: "Respiratory" },
  { id: "dryCough", name: "Dry Cough", category: "Respiratory" },
  { id: "productiveCough", name: "Productive Cough", category: "Respiratory" },
  { id: "bloodInSputum", name: "Blood in Sputum", category: "Respiratory" },
  
  // Gastrointestinal
  { id: "nausea", name: "Nausea", category: "Gastrointestinal" },
  { id: "vomiting", name: "Vomiting", category: "Gastrointestinal" },
  { id: "diarrhea", name: "Diarrhea", category: "Gastrointestinal" },
  { id: "constipation", name: "Constipation", category: "Gastrointestinal" },
  { id: "abdominalPain", name: "Abdominal Pain", category: "Gastrointestinal" },
  { id: "bloating", name: "Bloating", category: "Gastrointestinal" },
  { id: "lossOfAppetite", name: "Loss of Appetite", category: "Gastrointestinal" },
  { id: "bloodInStool", name: "Blood in Stool", category: "Gastrointestinal" },
  { id: "heartburn", name: "Heartburn", category: "Gastrointestinal" },
  { id: "excessiveGas", name: "Excessive Gas", category: "Gastrointestinal" },
  { id: "indigestion", name: "Indigestion", category: "Gastrointestinal" },
  { id: "stomachCramps", name: "Stomach Cramps", category: "Gastrointestinal" },
  { id: "difficultSwallowing", name: "Difficulty Swallowing", category: "Gastrointestinal" },
  
  // Musculoskeletal
  { id: "jointPain", name: "Joint Pain", category: "Musculoskeletal" },
  { id: "musclePain", name: "Muscle Pain", category: "Musculoskeletal" },
  { id: "backPain", name: "Back Pain", category: "Musculoskeletal" },
  { id: "stiffness", name: "Stiffness", category: "Musculoskeletal" },
  { id: "swelling", name: "Swelling", category: "Musculoskeletal" },
  { id: "muscleWeakness", name: "Muscle Weakness", category: "Musculoskeletal" },
  { id: "cramping", name: "Muscle Cramping", category: "Musculoskeletal" },
  { id: "jointSwelling", name: "Joint Swelling", category: "Musculoskeletal" },
  { id: "limitedMobility", name: "Limited Mobility", category: "Musculoskeletal" },
  { id: "boneDeformity", name: "Bone Deformity", category: "Musculoskeletal" },
  { id: "muscleSpasms", name: "Muscle Spasms", category: "Musculoskeletal" },
  
  // Skin
  { id: "rash", name: "Rash", category: "Skin" },
  { id: "itching", name: "Itching", category: "Skin" },
  { id: "hives", name: "Hives", category: "Skin" },
  { id: "dryness", name: "Dryness", category: "Skin" },
  { id: "bruising", name: "Bruising", category: "Skin" },
  { id: "yellowing", name: "Yellowing of skin/eyes", category: "Skin" },
  { id: "excessiveSweating", name: "Excessive Sweating", category: "Skin" },
  { id: "paleness", name: "Paleness", category: "Skin" },
  { id: "skinUlcers", name: "Skin Ulcers", category: "Skin" },
  { id: "skinDiscoloration", name: "Skin Discoloration", category: "Skin" },
  { id: "blisters", name: "Blisters", category: "Skin" },
  { id: "swollenLymphNodes", name: "Swollen Lymph Nodes", category: "Skin" },
  { id: "skinPeeling", name: "Skin Peeling", category: "Skin" },
  
  // Cardiovascular
  { id: "chestPressure", name: "Chest Pressure", category: "Cardiovascular" },
  { id: "palpitations", name: "Palpitations", category: "Cardiovascular" },
  { id: "fastHeartRate", name: "Fast Heart Rate", category: "Cardiovascular" },
  { id: "slowHeartRate", name: "Slow Heart Rate", category: "Cardiovascular" },
  { id: "swellingLimbs", name: "Swelling in Limbs", category: "Cardiovascular" },
  { id: "highBloodPressure", name: "High Blood Pressure", category: "Cardiovascular" },
  { id: "lowBloodPressure", name: "Low Blood Pressure", category: "Cardiovascular" },
  { id: "irregularHeartbeat", name: "Irregular Heartbeat", category: "Cardiovascular" },
  { id: "coldExtremities", name: "Cold Extremities", category: "Cardiovascular" },
  { id: "cyanosis", name: "Bluish Skin Color", category: "Cardiovascular" },
  { id: "poorCirculation", name: "Poor Circulation", category: "Cardiovascular" },
  
  // Psychological
  { id: "anxiety", name: "Anxiety", category: "Psychological" },
  { id: "depression", name: "Depression", category: "Psychological" },
  { id: "insomnia", name: "Insomnia", category: "Psychological" },
  { id: "moodChanges", name: "Mood Changes", category: "Psychological" },
  { id: "irritability", name: "Irritability", category: "Psychological" },
  { id: "paranoia", name: "Paranoia", category: "Psychological" },
  { id: "hallucinations", name: "Hallucinations", category: "Psychological" },
  { id: "panicAttacks", name: "Panic Attacks", category: "Psychological" },
  { id: "difficultyConcentrating", name: "Difficulty Concentrating", category: "Psychological" },
  { id: "socialWithdrawal", name: "Social Withdrawal", category: "Psychological" },
  { id: "delusions", name: "Delusions", category: "Psychological" },
  
  // Urinary
  { id: "frequentUrination", name: "Frequent Urination", category: "Urinary" },
  { id: "painfulUrination", name: "Painful Urination", category: "Urinary" },
  { id: "bloodInUrine", name: "Blood in Urine", category: "Urinary" },
  { id: "incontinence", name: "Incontinence", category: "Urinary" },
  { id: "urinationDifficulty", name: "Difficulty Urinating", category: "Urinary" },
  { id: "darkUrine", name: "Dark Urine", category: "Urinary" },
  { id: "foamyUrine", name: "Foamy Urine", category: "Urinary" }
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
