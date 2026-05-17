export type Lang = 'en' | 'zh'

export interface Strings {
  htmlLang: string
  meta: {
    title: string
    description: string
  }
  hero: {
    kicker: { product: string; sub: string; version: string }
    headlinePre: string
    headlineKey: string
    headlinePost: string
    subheadLine1: string
    subheadLine2: string
    tryDemo: string
    viewSource: string
  }
  workbench: {
    figLabel: string
    figTitle: string
    figCaption: string
    figCaptionAt: string
  }
  note: {
    kicker: string
    line1: string
    line2: string
    line3: string
  }
  cta: {
    kicker: string
    title: string
    tryDemo: string
    viewSource: string
  }
  colophon: {
    repository: string
    package: string
    license: string
    requires: string
    requiresValue: string
    readme: string
    changelog: string
    security: string
    contributing: string
    issues: string
    signoff: string
  }
  nav: {
    star: string
    switcherLabel: string
    switcherHref: string
  }
}

export const STRINGS: Record<Lang, Strings> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Hive — A hive of agents, in your browser',
      description:
        'Bundle multiple agents into a hive — code, research, writing, video. One orchestrates, the rest execute. Local, source-available, alpha.',
    },
    hero: {
      kicker: { product: 'Volume 01', sub: 'browser-native', version: 'v0.6.0-alpha.5' },
      headlinePre: 'The ',
      headlineKey: 'hive-mind',
      headlinePost: 'for CLI coding agents',
      subheadLine1: 'Real CLI agents. Real terminals.',
      subheadLine2: 'In your browser.',
      tryDemo: 'Try the demo',
      viewSource: 'View source',
    },
    workbench: {
      figLabel: 'Nº II',
      figTitle: 'The workbench',
      figCaption: 'Hive workbench, running locally at',
      figCaptionAt: 'localhost:4010',
    },
    note: {
      kicker: 'Nº III · A note',
      line1: 'Real CLIs, talking to each other.',
      line2: 'No glue code. No screen-scraping. Local-first.',
      line3: 'The hive is yours.',
    },
    cta: {
      kicker: 'Nº IV · Install',
      title: 'Run the workbench locally in three commands.',
      tryDemo: 'Try the demo',
      viewSource: 'View source',
    },
    colophon: {
      repository: 'Repository',
      package: 'Package',
      license: 'License',
      requires: 'Requires',
      requiresValue: 'Node ≥ 22',
      readme: 'README',
      changelog: 'Changelog',
      security: 'Security',
      contributing: 'Contributing',
      issues: 'Issues',
      signoff: 'Hive · Volume 01 · 39.9042° N  116.4074° E',
    },
    nav: {
      star: 'Star',
      switcherLabel: '中',
      switcherHref: '/',
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    meta: {
      title: 'Hive — 在浏览器里造一座 Agent 蜂巢',
      description:
        '把多个 Agent 组成蜂巢——写代码、做调研、写作、剪辑——一个 Orchestrator 派活，其它执行。本地运行，源码可见，alpha 阶段。',
    },
    hero: {
      kicker: { product: '卷一', sub: '浏览器原生', version: 'v0.6.0-alpha.5' },
      headlinePre: '',
      headlineKey: '浏览器版蜂巢',
      headlinePost: '为 CLI Agent 而生',
      subheadLine1: '真实 CLI agent。真实终端。',
      subheadLine2: '就在你的浏览器里。',
      tryDemo: '试试 demo',
      viewSource: '查看源码',
    },
    workbench: {
      figLabel: 'Nº II',
      figTitle: '工作台',
      figCaption: 'Hive 工作台，本地运行于',
      figCaptionAt: 'localhost:4010',
    },
    note: {
      kicker: 'Nº III · 一则随笔',
      line1: '真实的 CLI 互相对话。',
      line2: '没有胶水代码，没有屏幕抓取，本机优先。',
      line3: '蜂巢归你所有。',
    },
    cta: {
      kicker: 'Nº IV · 安装',
      title: '三条命令在本地启动 Hive 工作台。',
      tryDemo: '试试 demo',
      viewSource: '查看源码',
    },
    colophon: {
      repository: '仓库',
      package: '包',
      license: '许可证',
      requires: '环境',
      requiresValue: 'Node ≥ 22',
      readme: '文档',
      changelog: '变更日志',
      security: '安全',
      contributing: '贡献',
      issues: '问题',
      signoff: 'Hive · 卷一 · 39.9042° N  116.4074° E',
    },
    nav: {
      star: 'Star',
      switcherLabel: 'EN',
      switcherHref: '/en/',
    },
  },
}
