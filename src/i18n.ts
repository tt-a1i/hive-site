export type Lang = 'en' | 'zh'

/* Only the strings consumed by Layout.astro and Nav.astro live here.
   Section copy lives inline in each component next to its markup. */
export interface Strings {
  htmlLang: string
  meta: {
    title: string
    description: string
  }
  nav: {
    install: string
    star: string
    switcherLabel: string
    switcherHref: string
  }
}

export const STRINGS: Record<Lang, Strings> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Hive — orchestrate CLI coding agents in your browser',
      description:
        'Run Claude Code, Codex, Gemini and other CLI agents as one team: an orchestrator dispatches, real terminals run in your browser, everything stays on your machine. Source-available.',
    },
    nav: {
      install: 'Install',
      star: 'Star',
      switcherLabel: '中',
      switcherHref: '/',
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    meta: {
      title: 'Hive — 在浏览器里指挥一支 CLI Agent 团队',
      description:
        '把 Claude Code、Codex、Gemini 等 CLI Agent 组成一支团队：Orchestrator 派活，Worker 执行，真实终端跑在浏览器里，数据全在本机。源码可见，npm 一条命令安装。',
    },
    nav: {
      install: '安装',
      star: 'Star',
      switcherLabel: 'EN',
      switcherHref: '/en/',
    },
  },
}
