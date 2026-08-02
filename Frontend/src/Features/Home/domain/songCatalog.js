// ─── Song Catalog ────────────────────────────────────────────────
// Maps detected facial emotions to mood buckets and song suggestions.

export const moodCatalog = [
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
    key: 'energetic',
    label: 'Energetic',
    description: 'You look pumped! High-energy beats incoming.',
    emoji: '😠',
  },
  {
    key: 'calm',
    label: 'Calm',
    description: 'You seem relaxed. Sit back and enjoy these smooth tracks.',
    emoji: '😌',
  },
];

const songsByMood = {
  happy: [
    { title: 'Blinding Lights',       artist: 'The Weeknd' },
    { title: 'Happy',                  artist: 'Pharrell Williams' },
    { title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake' },
    { title: 'Uptown Funk',            artist: 'Bruno Mars' },
    { title: 'Good as Hell',           artist: 'Lizzo' },
  ],
  sad: [
    { title: 'Someone Like You',  artist: 'Adele' },
    { title: 'Skinny Love',       artist: 'Bon Iver' },
    { title: 'The Night We Met',  artist: 'Lord Huron' },
    { title: 'Tears in Heaven',   artist: 'Eric Clapton' },
    { title: 'Fix You',           artist: 'Coldplay' },
  ],
  energetic: [
    { title: 'Lose Yourself',    artist: 'Eminem' },
    { title: 'Eye of the Tiger', artist: 'Survivor' },
    { title: 'Thunderstruck',    artist: 'AC/DC' },
    { title: 'Till I Collapse',  artist: 'Eminem' },
    { title: 'Power',            artist: 'Kanye West' },
  ],
  calm: [
    { title: 'Clair de Lune',    artist: 'Claude Debussy' },
    { title: 'Breathe',          artist: 'Pink Floyd' },
    { title: 'River Flows in You', artist: 'Yiruma' },
    { title: 'Comptine d\'un autre été', artist: 'Yann Tiersen' },
    { title: 'Weightless',       artist: 'Marconi Union' },
  ],
};

/**
 * Map a raw emotion string from the detector to a mood bucket key.
 * @param {string} emotion – e.g. "happy", "surprised", "angry"
 * @returns {string} one of: 'happy' | 'sad' | 'energetic' | 'calm'
 */
export function getMoodKeyFromEmotion(emotion = '') {
  const e = emotion.toLowerCase();
  if (['happy', 'surprised', 'neutral'].includes(e)) return 'happy';
  if (['sad', 'fearful', 'disgusted'].includes(e))   return 'sad';
  if (['angry'].includes(e))                          return 'energetic';
  return 'calm';
}

/**
 * Return song list for a given mood key.
 * @param {string} moodKey
 * @returns {Array<{title: string, artist: string}>}
 */
export function getSongsForMood(moodKey) {
  return songsByMood[moodKey] ?? songsByMood.happy;
}
