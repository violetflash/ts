import React, {FC, useState } from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void; //number, string
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
         children
     }) => {
        const [state, setState] = useState(0);
        return (
            <div onClick={onClick} style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
                background: variant === CardVariant.primary ? 'lightgrey' : ''
            }}>
                {children}
            </div>
        )

    };

export default Card;

