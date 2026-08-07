// ─── Song Catalog ────────────────────────────────────────────────
// Maps detected facial emotions to mood buckets and song suggestions.

export const moodCatalog = [
  {
    key: 'neutral',
    label: 'Neutral',
    description: 'Keep it steady.',
    emoji: '😐',
  },
  {
    key: '',
    label: 'Any',
    description: 'A mix of everything.',
    emoji: '🎧',
  },
  {
    key: 'happy',
    label: 'Happy',
    description: 'You look cheerful! Here are some uplifting tracks for you.',
    emoji: '😊',
  },
  {
    key: 'sad',
    label: 'Sad',
    description: 'Feeling low? These tracks will resonate with your vibe.',
    emoji: '😢',
  },
  {
    key: 'surprised',
    label: 'Surprised',
    description: 'You look pumped! High-energy beats incoming.',
    emoji: '😳',
  },
  {
    key: 'very happy',
    label: 'Very Happy',
    description: 'You seem amazing. Sit back and enjoy these smooth tracks.',
    emoji: '🥰',
  },
];

const songsByMood = {
  happy: [
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Happy', artist: 'Pharrell Williams' },
    { title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake' },
    { title: 'Uptown Funk', artist: 'Bruno Mars' },
    { title: 'Good as Hell', artist: 'Lizzo' },
  ],
  sad: [
    { title: 'Someone Like You', artist: 'Adele' },
    { title: 'Skinny Love', artist: 'Bon Iver' },
    { title: 'The Night We Met', artist: 'Lord Huron' },
    { title: 'Tears in Heaven', artist: 'Eric Clapton' },
    { title: 'Fix You', artist: 'Coldplay' },
  ],
  surprised: [
    { title: 'Lose Yourself', artist: 'Eminem' },
    { title: 'Eye of the Tiger', artist: 'Survivor' },
    { title: 'Thunderstruck', artist: 'AC/DC' },
    { title: 'Till I Collapse', artist: 'Eminem' },
    { title: 'Power', artist: 'Kanye West' },
  ],
  "very happy": [
    { title: 'Clair de Lune', artist: 'Claude Debussy' },
    { title: 'Breathe', artist: 'Pink Floyd' },
    { title: 'River Flows in You', artist: 'Yiruma' },
    { title: 'Comptine d\'un autre été', artist: 'Yann Tiersen' },
    { title: 'Weightless', artist: 'Marconi Union' },
  ],
  neutral: [
    { title: 'Shape of You', artist: 'Ed Sheeran' }
  ],
  "": [
    { title: 'Random Song', artist: 'Random Artist' }
  ]
};

export function getMoodKeyFromEmotion(emotion = '') {
  const e = emotion.toLowerCase();
  if (['happy'].includes(e)) return 'happy';
  if (['sad', 'fearful', 'disgusted'].includes(e)) return 'sad';
  if (['surprised', 'angry'].includes(e)) return 'surprised';
  if (['very happy'].includes(e)) return 'very happy';
  if (['neutral'].includes(e)) return 'neutral';
  return 'neutral';
}

/**
 * Return song list for a given mood key.
 * @param {string} moodKey
 * @returns {Array<{title: string, artist: string}>}
 */
export function getSongsForMood(moodKey) {
  return songsByMood[moodKey] ?? songsByMood.happy;
}
