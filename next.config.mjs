/** @type {import('next').NextConfig} */
import ChildProcess from 'child_process';
import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    const commitHash = ChildProcess.execSync('git log --pretty=format:"%h" -n1').toString().trim();
    return process.env.GIT_HASH || commitHash;
  },
});

export default nextConfig;
