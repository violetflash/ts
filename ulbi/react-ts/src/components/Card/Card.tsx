import React from 'react';

interface CardI {
    width: string;
    height: string;
    background?: string;
}

export const Card: React.FC<CardI> = ({width, height, children, background = "gray"}) => {
    return (
        <div style={{width, height, background}}>
            {children}
        </div>
    )
};