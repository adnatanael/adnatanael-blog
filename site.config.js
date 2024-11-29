const CONFIG = {
  // profile setting (required)
  profile: {
    name: "adnatanael",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Graphic Designer",
    bio: "A self-starter and experienced graphic designer and animator who has made various contributions to several multinational companies through branding, motion graphics, and digital design projects that meet businesses' ever-changing needs.",
    //email: "and@gmail.com",
    linkedin: "adnatanael",
    github: "adnatanael",
    instagram: "adnatanael",
  },
  projects: [
    {
      name: `adnatanael-blog`,
      href: "https://github.com/adnatanael/adnatanael-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Adnatanael",
    description: "Welcome to Adnatanael Blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://adnatanael.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60 //21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
