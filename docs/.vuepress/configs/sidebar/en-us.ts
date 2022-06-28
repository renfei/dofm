import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/': [
        {
            text: 'Home',
            children: [
                '/zh-cn/README.md',
            ],
        },
    ],
}
