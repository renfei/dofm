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
                text: 'Java',
                children: [
                    '/zh-cn/development/java.md'
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
                    '/zh-cn/security/development.md'
                ]
            },
        ]
    },
    {
        text: '运维',
        children: [
            {
                text: '事故',
                children: [
                    '/zh-cn/operations/accident/jvm.md'
                ]
            },
        ]
    },
]