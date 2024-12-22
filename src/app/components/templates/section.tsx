import { LabelTypesMap, SectionProps, ThemeColors } from "@/types/components";
import { Label } from "../atoms/Label";
import Link from "next/link";
import { sectionStyles } from "@/styles/sectionStyles";

const Section = (props: SectionProps) => {
    const { children, title, more, contentPadding = true } = props;


    return (
        <section className="section" style={sectionStyles(contentPadding).section}>
            <div className="flex justify-between" style={sectionStyles(contentPadding).titleContainer}>
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