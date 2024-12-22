"use client";

import Link from "next/link";
import Image from 'next/image';
import { User } from "./User";
import { RadiusMap, SpacerSizeMap } from "@/types/components";
import { useEffect, useState } from "react";

export const Header = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headerStyles = {
        header: { borderRadius: `0 0 ${RadiusMap.large} ${RadiusMap.large}`, overflow: 'hidden' },
        gradient: {
            width: `${width}px`,
            height: `${width}px`,
            background: 'radial-gradient(circle, rgb(255, 152, 0) -70%, rgb(255 152 0 / 30%) 60%)',
            top: '-40px'
        },
        link: { width: '37px', height: '28px' }
    }

    return (
        <header
            className="relative"
            style={headerStyles.header}
        >
            <div className="absolute" style={headerStyles.gradient}></div>
            <div className="container mx-auto">
                <div className="flex items-center justify-between w-full" style={{ padding: SpacerSizeMap.S16 }}>
                    <Link className="relative" href="/" style={headerStyles.link}>
                        <Image
                            src={'/images/logo.png'}
                            alt={'Logo'}
                            fill
                            className="object-cover"
                        />
                    </Link>
                    <User title="John Doe" subtitle="Welcome" src="/images/avatar-placeholder.jpg" />
                </div>
            </div>
        </header>
    );
}