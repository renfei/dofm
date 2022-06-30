import type {NavbarConfig} from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '首页',
        link: '/zh-cn/',
    },
    {
        text: '开发',
        children: [
            {
                text: '开发规范',
                children: [
                    '/zh-cn/development/java.md',
                    '/zh-cn/development/vue.md',
                    '/zh-cn/development/git.md'
                ]
            },
        ]
    },
    {
        text: '安全',
        children: [
            {
                text: '开发安全',
                children: [
                    '/zh-cn/security/development.md',
                    '/zh-cn/security/guo-mi.md',
                    '/zh-cn/security/sanyuan.md',
                ]
            },
        ]
    },
    {
        text: '运维',
        children: [
            {
                text: '系统',
                children: [
                    '/zh-cn/operations/operating-system/windows.md',
                    '/zh-cn/operations/operating-system/linux.md',
                    '/zh-cn/operations/operating-system/macos.md',
                ]
            },
            {
                text: '事故',
                children: [
                    '/zh-cn/operations/accident/jvm.md'
                ]
            },
        ]
    },
]