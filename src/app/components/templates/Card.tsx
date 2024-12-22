'use client';

import clsx from 'clsx';
import { CardProps, SpacerSizeMap } from '@/types/components';

const Card = ({ children, className }: CardProps) => {
    const gradient = {
        width: '100%',
        height: '180%',
        background: 'radial-gradient(circle, rgb(255, 152, 0) -80%, rgba(255, 152, 0, 0.2) 60%)',
        top: '-40%',
        zIndex: 0
    }
    return (
        <div
            className={clsx(
                'relative w-full mx-auto shadow-md rounded-xl overflow-hidden',
                className
            )}
        >
            <div className="absolute" style={gradient}></div>
            <div className='relative' style={{ padding: SpacerSizeMap.S16, zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}

export default Card;
