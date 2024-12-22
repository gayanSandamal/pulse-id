"use client";

import Link from "next/link";
import Image from 'next/image';
import { User } from "./User";
import { SpacerSizeMap } from "@/types/components";
import { useEffect, useState } from "react";
import { headerStyles } from "@/styles/headerStyles";

export const Header = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            className="relative"
            style={headerStyles(width).header}
        >
            <div className="absolute" style={headerStyles(width).gradient}></div>
            <div className="container mx-auto">
                <div className="flex items-center justify-between w-full" style={{ padding: SpacerSizeMap.S16 }}>
                    <Link className="relative" href="/" style={headerStyles(width).link}>
                        <Image
                            src={'/images/logo.png'}
                            alt={'Logo'}
                            fill
                            className="object-cover"
                        />
                    </Link>
                    <User title="John Doe" subtitle="Welcome" src="/images/user.jpg" />
                </div>
            </div>
        </header>
    );
}