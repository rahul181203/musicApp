/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['jotai-devtools'],
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"firebasestorage.googleapis.com",
                pathname:"**"
            }
        ]
    }
}
module.exports = nextConfig
