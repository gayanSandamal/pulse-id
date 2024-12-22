import { CityCircleProps, SpacerSizeMap } from "@/types/components";
import { Avatar } from "../atoms/Avatar";
import { Label } from "../atoms/Label";
import Link from "next/link";
import clsx from "clsx";

const CityCircle = (props: CityCircleProps) => {
    const { href, label, src, className } = props;
    return (
        <Link
            className={clsx(
                'flex flex-col items-center justify-center',
                className
            )}
            href={href}
        >
            <div style={{ marginBottom: SpacerSizeMap.S8 }}>
                <Avatar src={src} alt={label} />
            </div>
            <Label>{label}</Label>
        </Link>
    );
}

export default CityCircle;