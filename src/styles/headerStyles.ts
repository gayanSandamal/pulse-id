import { RadiusMap } from "@/types/components";

export const headerStyles = (width: number) => {
    return {
        header: { borderRadius: `0 0 ${RadiusMap.large} ${RadiusMap.large}`, overflow: 'hidden' },
        gradient: {
            width: `${width}px`,
            height: `${width}px`,
            background: 'radial-gradient(circle, rgb(255, 152, 0) -70%, rgb(255 152 0 / 30%) 60%)',
            top: '-40px'
        },
        link: { width: '37px', height: '28px' }
    }
}