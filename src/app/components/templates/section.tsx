import { LabelTypesMap, SectionProps, SpacerSizeMap, ThemeColors } from "@/types/components";
import { Label } from "../atoms/Label";
import Link from "next/link";

const Section = (props: SectionProps) => {
    const { children, title, more, contentPadding = true } = props;

    const sectionStyles = {
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
    return (
        <section className="section" style={sectionStyles.section}>
            <div className="flex justify-between" style={sectionStyles.titleContainer}>
                <Label type={LabelTypesMap.sectionTitle}>{title}</Label>
                {
                    more && <Link href={more.href} style={{ lineHeight: 'normal' }}>
                        <Label type={LabelTypesMap.link} color={ThemeColors.Primary}>{more.label}</Label>
                    </Link>
                }
            </div>
            {children}
        </section>
    );
}

export default Section;