import type { Metadata } from "next";
import {Inter,Mona_Sans} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});
const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "crextio",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${monaSans.variable} antialiased`} suppressHydrationWarning={true}>
        
            {children}
          
        </body>
        </html>
    );
}
