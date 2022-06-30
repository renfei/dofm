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
            // collapsible: true,
            children: [
                '/zh-cn/development/java.md',
            ],
        },
    ],
    '/zh-cn/security/': [
        {
            text: '安全规约手册',
            collapsible: true,
            children: [
                '/zh-cn/security/development.md',
                '/zh-cn/security/guo-mi.md',
            ],
        },
    ],
    '/zh-cn/operations/': [
        {
            text: '操作系统飞行手册',
            collapsible: true,
            children: [
                '/zh-cn/operations/operating-system/windows.md',
                '/zh-cn/operations/operating-system/linux.md',
                '/zh-cn/operations/operating-system/macos.md',
            ],
        },
        {
            text: '事故处置手册',
            collapsible: true,
            children: [
                '/zh-cn/operations/accident/jvm.md',
            ],
        },
    ],
}