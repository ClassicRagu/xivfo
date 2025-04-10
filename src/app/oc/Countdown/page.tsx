"use client";
import * as React from "react";

const calculateTimeLeft = (): Record<string, number> => {
    const difference = +new Date("2025-05-27T10:00:00+00:00") - +new Date();

    let timeLeft: Record<string, number> = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}

function CLL() {
    const [timeLeft, setTimeLeft] = React.useState<Record<string, number>>(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: React.JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div>
            <h1>
                Time Until OC
            </h1>
            <h2>
                {timerComponents.length ? timerComponents : <span>Why are you still here, go enjoy OC!</span>}
            </h2>
            <p>This countdown is set to end at 6am EST on 2025-05-27 and is subject to change based on maintenance times.</p>
        </div>
    );
}

export default CLL;