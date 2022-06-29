import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {head, navbarZh, navbarEn, sidebarZh, sidebarEn} from './configs'

export default defineUserConfig({
    base: '/',

    head,

    locales: {
        '/': {
            lang: 'en-US',
            title: 'DevOps Flight Manual',
            description: 'DevOps Flight Manual',
        },
        '/zh-cn/': {
            lang: 'zh-CN',
            title: '开发运维飞行手册',
            description: '开发与运维飞行手册 DOFM(DevOps Flight Manual)',
        },
    },

    theme: defaultTheme({
        logo: '/image/logo.webp',
        repo: 'renfei/dofm',
        docsDir: 'docs',
        docsBranch: 'master',

        locales: {
            '/': {
                navbar: navbarEn,
                sidebar: sidebarEn,
            },
            '/zh-cn/': {
                navbar: navbarZh,
                sidebar: sidebarZh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleSidebar: '切换侧边栏',
                repoLabel: '参与编辑贡献',
            },
        },
    }),

    plugins: [
        docsearchPlugin({
            appId: 'FOC7PMEU25',
            apiKey: 'ac831bb5902f4068a903aa1ede0b6e5d',
            indexName: 'dofm',
        }),
    ],
})