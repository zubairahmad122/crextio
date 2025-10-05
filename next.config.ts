import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
        dirs: ["src"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    // 👇 Add this line
    distDir: ".next",
};
export default nextConfig;
