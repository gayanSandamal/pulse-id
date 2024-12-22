'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { AvatarProps, AvatarSizeMap } from '@/types/components';
import { avatarStyles } from '@/styles/avatarStyles';

import { useMemo } from 'react';

export const Avatar = ({ src, alt = 'Avatar', size = AvatarSizeMap.medium, className }: AvatarProps) => {
    const styles = useMemo(() => avatarStyles(src, size), [src, size]);

    return (
        <div
            className={clsx(
                'relative rounded-full overflow-hidden flex items-center justify-center',
                className
            )}
            style={styles.wrapper}
        >
            <div className='rounded-full overflow-hidden flex items-center justify-center' style={styles.container}>
                <div className='rounded-full overflow-hidden absolute' style={styles.avatar}>
                    <Image
                        src={styles.imageSrc}
                        alt={alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        blurDataURL={`${styles.imageSrc}-16`}
                    />
                </div>
            </div>
        </div>
    );
}
