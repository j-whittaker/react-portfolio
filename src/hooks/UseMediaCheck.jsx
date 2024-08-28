import { useEffect, useState } from "react";

export default function useMediaCheck(mediaCheck) {
    const [mediaCheckMatches, setMediaCheckMatches] = useState(window.matchMedia(mediaCheck).matches);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia(mediaCheck);

        mediaQuery.addEventListener('change', () => {
            setMediaCheckMatches(mediaQuery.matches);
        });
    }, []);

    return mediaCheckMatches;
}