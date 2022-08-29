/**
 * @Descripttion: 
 * @version: 
 * @Author: Nick.
 * @Date: 2022-08-29 13:21:19
 * @LastEditors: Nick.
 * @LastEditTime: 2022-08-29 16:23:10
 */
export default {
    lang: 'zh-CN',
    title: '基石编程笔记',
    titleTemplate: '让习惯成为自然',
    description: '记录基石项目诞生开发全过程',
    head: [
        // ico
        ["link", {rel: "icon", href: "/favicon.ico"}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "NickNiu"}],
        ["meta", {name: "keywords", content: "PHP 全栈知识体系, PHP体系, PHP知识体系, PHP框架,PHP详解,PHP学习路线, PHP面试, 知识体系, PHP技术体系, PHP编程, PHP编程指南,PHP开发体系, PHP开发,PHP教程,PHP,PHP数据结构, 算法, 开发基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    themeConfig: {
        logo: "/logo.png",
        // 展示搜索框
        algolia: {
            appKey: '',
            indexName: '',
            searchParameters: {
                faeFilters: ['tags:guide,api']
            }
        },
        nav: [
            { text: '基石诞生记', link: '/app/' },
            { text: '基石PHP', link: '/php/' },
            { text: 'Arco Pro', link: '/arco_pro/' },
        ],
        sidebar: {
            '/app/':[
                {
                    text: '系统设计方案',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: '', link: '/app/' },
                        // { text: 'One', link: '/guide/one' }, // /guide/one.md
                        // { text: 'Two', link: '/guide/two' } // /guide/two.md
                    ]
                }
            ],
            '/php/': [
                {
                    text: '',
                    items: [
                        { text: '', link: '/php/' },
                    ]
                }
            ],
            '/arco_pro/': [
                {
                    text: 'Acro Pro 二次开发笔记',
                    items: [
                        { text: '前言', link: '/arco_pro/' },
                        { text: '状态管理Pinia', link: '/arco_pro/arco_pro_pinia' },
                        { text: 'TypeScript', link: '/arco_pro/arco_ts_assignment' }
                    ]
                }
            ]
          },
        footer: {
            message: '<a style="color: #fff" target="_blank" href="https://beian.miit.gov.cn/">豫ICP备2021031152号</a>',
            copyright: 'Copyright © 2022 NickNiu.'
        }
    }
  }
  