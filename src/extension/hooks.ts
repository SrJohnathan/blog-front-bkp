"use client"

import {useEffect, useState} from "react";

interface MediaQueryHookResult {
    isMatching: boolean;
}


export const useMediaQuery = (query: number): MediaQueryHookResult => {
 

    const [isMatching, setIsMatching] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const mediaQueryList = window.matchMedia(`(max-width: ${query}px)`);
            return mediaQueryList.matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQueryList = window.matchMedia(`(max-width: ${query}px)`);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMatching(event.matches);
        };

        mediaQueryList.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        };
    }, [query]);

    return { isMatching };
};


