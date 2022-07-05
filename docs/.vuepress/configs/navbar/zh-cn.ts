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
                    '/zh-cn/development/git.md',
                    '/zh-cn/development/code-doc.md',
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
            {
                text: '服务器安全',
                children: [
                    '/zh-cn/security/server/linux.md',
                    '/zh-cn/security/server/lesuo.md',
                ]
            },
        ],
    },
    {
        text: '运维',
        children: [
            {
                text: '服务器',
                children: [
                    '/zh-cn/operations/server/nginx.md',
                    '/zh-cn/operations/server/docker.md',
                    '/zh-cn/operations/server/elasticsearch.md',
                    '/zh-cn/operations/server/zookeeper.md',
                ]
            },
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
    {
        text: '更多',
        children: [
            {
                text: '任霏博客',
                children: [
                    'https://www.renfei.net',
                ]
            },
        ]
    },
]