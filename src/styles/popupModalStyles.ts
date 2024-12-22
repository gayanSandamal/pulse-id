import { SpacerSizeMap, ThemeColors } from "@/types/components";

export const modalStyles = {
    container: { paddingLeft: SpacerSizeMap.S36, paddingRight: SpacerSizeMap.S36 },
    content: { width: `calc(100% - ${SpacerSizeMap.S32})`, bottom: SpacerSizeMap.S16 },
    titleContainer: { marginTop: SpacerSizeMap.S8, marginBottom: SpacerSizeMap.S8 },
    ratingsContainer: { marginBottom: SpacerSizeMap.S12 },
    ratingsInnerContainer: {
        border: `1px solid ${ThemeColors.Background}`,
        borderRadius: SpacerSizeMap.S16,
        paddingTop: SpacerSizeMap.S4,
        paddingBottom: SpacerSizeMap.S4,
        paddingLeft: SpacerSizeMap.S8,
        paddingRight: SpacerSizeMap.S8
    },
    startContainer: { width: 15, height: 15 },
    seeMoreLabelContainer: { width: `calc(100% - ${SpacerSizeMap.S36})`, paddingLeft: SpacerSizeMap.S36 }
}