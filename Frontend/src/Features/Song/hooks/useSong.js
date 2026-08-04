import { useContext } from "react";
import { getSongs } from "../services/song.api";
import { SongContext } from "../song.context.jsx";

export const useSong = () => {
    const context = useContext(SongContext);

    if (context === undefined) {
        throw new Error("useSong must be used within a SongContextProvider");
    }

    const { song, setSong, loading, setLoading } = context;

    async function handleGetSong({mood}) {
        setLoading(true)
        try {
            const res = await getSongs({ mood })
            // if (res.songs && res.songs.length > 0) {
            //     // Pick a random song from the array for variety
            //     const randomSong = res.songs[Math.floor(Math.random() * res.songs.length)];
            //     setSong(randomSong)
            // } else {
            //     setSong(null)
            // }
            setSong(res.songs)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return {song, loading, handleGetSong}
}