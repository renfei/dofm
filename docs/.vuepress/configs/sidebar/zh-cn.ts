import type {SidebarConfig} from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/zh-cn/': [
        {
            text: '飞行手册',
            children: [
                '/zh-cn/development/README.md',
                '/zh-cn/security/README.md',
                '/zh-cn/operations/README.md',
            ],
        },
    ],
    '/zh-cn/development/': [
        {
            text: '开发规约手册',
            collapsible: true,
            children: [
                '/zh-cn/development/java/README.md',
            ],
        },
    ],
    '/zh-cn/security/': [
        {
            text: '安全规约手册',
            children: [
                '/zh-cn/security/README.md',
            ],
        },
    ],
    '/zh-cn/operations/': [
        {
            text: '事故处置手册',
            collapsible: true,
            children: [
                '/zh-cn/operations/accident/jvm/README.md',
            ],
        },
    ],
}