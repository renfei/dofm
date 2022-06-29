import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `/image/icons/favicon-16x16.png`,
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `/image/icons/favicon-32x32.png`,
        },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'DevOps Flight Manual' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'DevOps Flight Manual' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
        'link',
        { rel: 'apple-touch-icon', href: `/image/icons/apple-touch-icon.png` },
    ],
    [
        'link',
        {
            rel: 'mask-icon',
            href: '/image/icons/safari-pinned-tab.svg',
            color: '#3eaf7c',
        },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]