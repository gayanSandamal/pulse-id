import { AvatarSizeMap, ThemeColors } from "@/types/components";

export const avatarStyles = (src?: string, size = AvatarSizeMap.medium) => {
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

    return {
        imageSrc,
        wrapper: avatarStyles.wrapper,
        container: avatarStyles.container,
        avatar: avatarStyles.avatar
    }
}