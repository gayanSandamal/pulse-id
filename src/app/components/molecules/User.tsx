import { AvatarSizeMap, LabelTypesMap, SpacerSizeMap, ThemeColors, UserProps } from "@/types/components";
import { Avatar } from "../atoms/Avatar";
import { Label } from "../atoms/Label";
import clsx from "clsx";

export const User = (props: UserProps) => {
    const { title, subtitle, src, className } = props;
    return (
        <div className={clsx(
            'flex items-center',
            className
        )}>
            <div className="flex flex-col items-end" style={{ marginRight: SpacerSizeMap.S16 }}>
                <Label>{title}</Label>
                <Label type={LabelTypesMap.userSubtitle} color={ThemeColors.Subtitle}>{subtitle}</Label>
            </div>
            <Avatar alt={title} size={AvatarSizeMap.small} src={src} />
        </div>
    );
}