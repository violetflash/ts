import React, { useState } from 'react';

// export enum CardVariant {
//     outlined = "outlined",
//     primary = "primary",
// }

interface CardI {
    width: string;
    height: string;
    background?: string;
    variant: "primary" | "outlined";
    onClick: (num: number) => void;
}

export const Card: React.FC<CardI> = (
    {
        width,
        height,
        children,
        variant,
        onClick,
        background = "gray",
    }) => {
    const [state, setState] = useState(0);

    return (
        <div
            style={{
                width,
                height,
                background: variant === "outlined" ? 'transparent' : background,
                border: variant === "outlined" ? "2px solid gray" : "none",
            }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    )
};
