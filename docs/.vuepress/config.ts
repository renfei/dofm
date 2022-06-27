import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {head, navbarZh} from './configs'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '开发运维飞行手册',
    description: '开发与运维飞行手册 DOFM(DevOps Flight Manual)',

    head,

    theme: defaultTheme({
        logo: 'https://cdn.renfei.net/Logo/RF.svg',
        repo: 'renfei/dofm',
        docsDir: 'docs',
        docsBranch: 'master',

        locales: {
            '/': {
                navbar: navbarZh,
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
        // docsearchPlugin({
        //     appId: '',
        //     apiKey: '',
        //     indexName: 'dofm',
        // }),
    ],
})