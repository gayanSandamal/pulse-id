'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { AvatarProps, AvatarSizeMap, ThemeColors } from '@/types/components';

export const Avatar = ({ src, alt = 'Avatar', size = AvatarSizeMap.medium, className }: AvatarProps) => {
    const imageSrc = src || '/images/avatar-placeholder.jpg';

    const outerBorderThreshold = 4;
    const innerBorderThreshold = 8;

    const avatarSizes = {
        small: {
            container: AvatarSizeMap.small - outerBorderThreshold,
            avatar: AvatarSizeMap.small - innerBorderThreshold
        },
        medium: {
            container: AvatarSizeMap.medium - outerBorderThreshold,
            avatar: AvatarSizeMap.medium - innerBorderThreshold
        }
    };

    const selectedSize = size === AvatarSizeMap.small ? avatarSizes.small : avatarSizes.medium;

    const avatarStyles = {
        wrapper: {
            width: size,
            height: size,
            backgroundColor: ThemeColors.Primary
        },
        container: {
            width: selectedSize.container,
            height: selectedSize.container,
            backgroundColor: ThemeColors.Background
        },
        avatar: {
            width: selectedSize.avatar,
            height: selectedSize.avatar
        }
    };

    return (
        <div
            className={clsx(
                'relative rounded-full overflow-hidden flex items-center justify-center',
                className
            )}
            style={avatarStyles.wrapper}
        >
            <div className='rounded-full overflow-hidden flex items-center justify-center' style={avatarStyles.container}>
                <div className='rounded-full overflow-hidden absolute' style={avatarStyles.avatar}>
                    <Image
                        src={imageSrc}
                        alt={alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        blurDataURL={`${`imageSrc`}-16`}
                    />
                </div>
            </div>
        </div>
    );
}
