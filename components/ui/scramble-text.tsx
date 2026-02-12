"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export function ScrambleText({ text, className, hover = true }: { text: string; className?: string; hover?: boolean }) {
    const [outputText, setOutputText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let pos = 0;

        clearInterval(intervalRef.current!);

        intervalRef.current = setInterval(() => {
            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (pos / 3 > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            setOutputText(scrambled);
            pos++;

            if (pos >= text.length * 3) {
                clearInterval(intervalRef.current!);
            }
        }, 30);
    };

    useEffect(() => {
        if (!hover) {
            scramble();
        }
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={hover ? scramble : undefined}
        >
            {outputText}
        </span>
    );
}
