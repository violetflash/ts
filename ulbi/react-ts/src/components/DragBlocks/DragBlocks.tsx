import React, {FC, useState} from 'react';
import './DragBlocks.css';

export const DragBlocks: FC = () => {
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const dragHandle = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('starting DRAG');
    }

    const dropHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('Dropped!')
    };

    const leaveHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dragOverWithPreventHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true); //меняем состояния Сначала true если драг-элемент находится вышли пределах текущего блока
    };

    return (
        <div>
            <div
                className="block block-1"
                draggable
                onDrag={dragHandle}
            />
            <div
                className="block block-2"
                onDrop={dropHandle}
                onDragLeave={leaveHandle} //когда мы вышли загрузке пределы этого квадрата
                onDragOver={dragOverWithPreventHandle}
                style={{backgroundColor: isDrag ? "red" : "lightseagreen"}}
            />
        </div>

    )
};