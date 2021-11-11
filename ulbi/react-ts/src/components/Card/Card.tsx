import React from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardI {
    width: string;
    height: string;
    background?: string;
    variant?: CardVariant | undefined;
}

export const Card: React.FC<CardI> = (
    {
        width,
        height,
        children,
        background = "gray",
        variant = "primary"
    }) => {
    return (
        <div style={{
            width,
            height,
            background: variant === 'primary' ? background : 'transparent',
            border: "2px solid gray"
        }}>
            {children}
        </div>
    )
};