export const moodCatalog = [
  {
    key: "very happy",
    label: "Very happy",
    description: "Bright, high-energy tracks for an uplifted state.",
  },
  {
    key: "happy",
    label: "Happy",
    description: "Warm, easygoing songs that keep the momentum light.",
  },
  {
    key: "surprised",
    label: "Surprised",
    description: "Playful sounds with a little edge and movement.",
  },
  {
    key: "sad",
    label: "Sad",
    description: "Calmer tracks for reflective, slower moments.",
  },
];

export const songLibrary = {
  "very happy": [
    { title: "Solar Bloom", artist: "Nova Pulse" },
    { title: "Golden Rush", artist: "Luma Field" },
    { title: "Skyline Spark", artist: "Orbit Vale" },
  ],
  happy: [
    { title: "Soft Neon", artist: "Mira Wave" },
    { title: "Late Afternoon", artist: "Cinder Club" },
    { title: "Warm Static", artist: "Haze Theory" },
  ],
  surprised: [
    { title: "Flash Frame", artist: "Kairo Drift" },
    { title: "Signal Shift", artist: "Arc Terrace" },
    { title: "Electric Bloom", artist: "Velvet Byte" },
  ],
  sad: [
    { title: "Low Tide", artist: "Sable North" },
    { title: "Afterglow Rain", artist: "Moon Harbor" },
    { title: "Quiet Gravity", artist: "Blue Meridian" },
  ],
};

export function getMoodKeyFromEmotion(emotion = "") {
  const normalized = emotion.toLowerCase();

  if (normalized.includes("very happy") || normalized.includes("excited") || normalized.includes("joy")) {
    return "very happy";
  }

  if (normalized.includes("surprised") || normalized.includes("astonished")) {
    return "surprised";
  }

  if (normalized.includes("sad") || normalized.includes("down")) {
    return "sad";
  }

  return "happy";
}

export function getSongsForMood(moodKey) {
  return songLibrary[moodKey] ?? songLibrary.happy;
}