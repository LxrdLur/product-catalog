import React from 'react';

export const GpuIcon = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 120 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            {/* outer card */}
            <rect x="26" y="20" width="83" height="43" />

            {/* side connector */}
            <line x1="20" y1="27" x2="26" y2="27" />
            <line x1="20" y1="40" x2="26" y2="40" />

            {/* bottom pins */}
            <line x1="57" y1="63" x2="57" y2="69" />
            <line x1="72" y1="63" x2="72" y2="66" />
            <line x1="88" y1="63" x2="88" y2="69" />

            {/* left fan */}
            <circle cx="50" cy="41" r="15" />
            <circle cx="50" cy="41" r="2.6" fill="currentColor" stroke="none" />

            {/* right fan */}
            <circle cx="86" cy="41" r="15" />
            <circle cx="86" cy="41" r="2.6" fill="currentColor" stroke="none" />
        </svg>
    );
};

