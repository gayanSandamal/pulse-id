import { SpacerSizeMap, ThemeColors } from "@/types/components"

export const sectionStyles = (contentPadding = true) => {
    return {
        section: {
            paddingLeft: contentPadding ? SpacerSizeMap.S16 : 0,
            paddingRight: contentPadding ? SpacerSizeMap.S16 : 0,
            paddingTop: SpacerSizeMap.S24,
        },
        titleContainer: {
            paddingLeft: !contentPadding ? SpacerSizeMap.S16 : 0,
            paddingRight: !contentPadding ? SpacerSizeMap.S16 : 0,
            marginBottom: SpacerSizeMap.S16
        },
        title: {
            color: ThemeColors.Font
        }
    }
}