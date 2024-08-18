/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["plus.unsplash.com", "images.unsplash.com", "firebasestorage.googleapis.com"],
    },
    // compilerOptions: {
    //     baseUrl: ".",
    //     paths: {
    //         "firebase/*": ["node_modules/firebase/*"]
    //     }
    // }
};

export default nextConfig;
