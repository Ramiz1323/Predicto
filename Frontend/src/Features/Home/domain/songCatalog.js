export const moodCatalog = [
  {
    key: "very happy",
    label: "Very Happy",
    subtitle: "Bright, loud, euphoric tracks.",
    accent: "#ffb347",
    description: "Full-energy tracks that match big smiles and celebratory moments.",
  },
  {
    key: "happy",
    label: "Happy",
    subtitle: "Uplifting, groovy, catchy songs.",
    accent: "#ffd166",
    description: "Light, feel-good picks for relaxed confidence and upbeat moods.",
  },
  {
    key: "surprised",
    label: "Surprised",
    subtitle: "Fast switches, punchy hooks.",
    accent: "#7dd3fc",
    description: "Sharp transitions and playful energy for unexpected reactions.",
  },
  {
    key: "sad",
    label: "Sad",
    subtitle: "Soft, emotional, reflective tracks.",
    accent: "#a78bfa",
    description: "Slower songs that sit with the mood instead of fighting it.",
  },
];

export const featuredSongs = {
  "very happy": [
    { title: "Golden Hours", artist: "Nova Bloom", duration: "3:14" },
    { title: "Run The Lights", artist: "Pulse Avenue", duration: "2:58" },
    { title: "Skyline Fever", artist: "Milo & The Echo", duration: "3:36" },
  ],
  happy: [
    { title: "Weekend Replay", artist: "Sonic Lane", duration: "3:02" },
    { title: "Easy On The Soul", artist: "The Lull Signals", duration: "3:45" },
    { title: "Colorwave", artist: "Jade Circuit", duration: "2:49" },
  ],
  surprised: [
    { title: "Signal Jump", artist: "North State", duration: "2:37" },
    { title: "Midnight Switch", artist: "The Arcades", duration: "3:09" },
    { title: "Echo Blink", artist: "Velvet Static", duration: "2:55" },
  ],
  sad: [
    { title: "Blue Hour", artist: "Still Water", duration: "3:51" },
    { title: "Slow Fire", artist: "The Low Notes", duration: "4:02" },
    { title: "Raincheck", artist: "Morrow", duration: "3:33" },
  ],
};

export function getMoodKeyFromEmotion(emotion = "") {
  const value = emotion.toLowerCase();

  if (value.includes("very happy")) {
    return "very happy";
  }

  if (value.includes("happy")) {
    return "happy";
  }

  if (value.includes("surprise")) {
    return "surprised";
  }

  if (value.includes("sad")) {
    return "sad";
  }

  return "happy";
}

export function getSongsForMood(mood) {
  return featuredSongs[mood] ?? featuredSongs.happy;
}