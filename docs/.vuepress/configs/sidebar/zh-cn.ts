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
                '/zh-cn/development/vue.md',
                '/zh-cn/development/git.md',
                '/zh-cn/development/code-doc.md',
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
                '/zh-cn/security/sanyuan.md',
            ],
        },
        {
            text: '服务器安全手册',
            collapsible: true,
            children: [
                '/zh-cn/security/server/linux.md',
                '/zh-cn/security/server/lesuo.md',
            ],
        },
    ],
    '/zh-cn/operations/': [
        {
            text: '服务器飞行手册',
            collapsible: true,
            children: [
                '/zh-cn/operations/server/nginx.md',
                '/zh-cn/operations/server/docker.md',
                '/zh-cn/operations/server/elasticsearch.md',
                '/zh-cn/operations/server/zookeeper.md',
            ],
        },
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