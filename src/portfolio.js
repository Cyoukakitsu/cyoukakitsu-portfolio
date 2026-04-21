/* ZHAO JIAYI — Personal Portfolio
   Language: Japanese (ja)
   i18n: See src/i18n/ for future Chinese/English stubs */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1800
};

// Hero Section
const illustration = {
  animated: true
};

const greeting = {
  username: "ZHAO JIAYI",
  title: "はじめまして、ZHAO JIAYIです",
  subTitle: emoji(
    "ゼロからフロントエンドエンジニア、フロントエンドエンジニアからAI・フルスタック開発へ挑戦中 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Cyoukakitsu",
  gmail: "z261459808@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "スキルセット",
  subTitle: "フロントエンドからAI連携まで、TypeScriptを軸に幅広く開発",
  skills: [
    emoji("⚡ TypeScriptとReact / Next.jsを使ったモダンなWebアプリ開発"),
    emoji("⚡ AI Agent開発・LLM APIの活用"),
    emoji("⚡ SupabaseとVercelを活用したフルスタック開発・デプロイ")
  ],

  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm / pnpm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Supabase / PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "AI Integration",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "上智大学大学院",
      logo: require("./assets/images/sophiaUniversityLogo.svg"),
      subHeader: "経済学研究科",
      duration: "入学〜修了",
      desc: "経済学の理論的・実証的研究を通じて、データ分析と論理的思考力を養う。",
      descBullets: [
        "経済学・統計学の基礎から応用まで幅広く習得",
        "研究を通じてデータドリブンな問題解決能力を強化"
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "フロントエンド開発",
      progressPercentage: "85%"
    },
    {
      Stack: "AI連携開発",
      progressPercentage: "75%"
    },
    {
      Stack: "バックエンド開発",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "バックエンドエンジニア",
      company: "SIer企業（金融システム）",
      companylogo: require("./assets/images/sierCompanyLogo.svg"),
      date: "在職期間（詳細は面談にてお伝えします）",
      desc: "銀行向け業務システムのバックエンド開発・保守に従事。",
      descBullets: [
        "銀行業務ロジックの設計・実装・テスト",
        "レガシーシステムの保守・改善対応",
        "チーム開発でのコードレビュー・ドキュメント整備"
      ]
    }
  ]
};

// Open Source / GitHub
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Featured Projects
const bigProjects = {
  title: "プロジェクト",
  subtitle: "TypeScriptとAIを組み合わせて作り続けているプロダクト",
  projects: [
    {
      image: require("./assets/images/aiPortfolioManagerLogo.svg"),
      projectName: "AI Portfolio Manager",
      projectDesc:
        "リアルタイムの株・暗号資産データとAIチャットボットを統合した投資管理ダッシュボード。",
      footerLink: [
        {
          name: "デモを見る",
          url: "https://ai-portfolio-manager-stocks-crypto.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Cyoukakitsu/AI-Portfolio-Manager-Stocks-Crypto"
        }
      ]
    },
    {
      image: require("./assets/images/tsGymLogo.svg"),
      projectName: "TS GYM",
      projectDesc:
        "Monaco Editorを搭載したTypeScript練習プラットフォーム。AIがコードをリアルタイムでレビュー・解説。",
      footerLink: [
        {
          name: "デモを見る",
          url: "https://ts-gym-46k9.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Cyoukakitsu/TS-gym"
        }
      ]
    },
    {
      image: require("./assets/images/fireCalcLogo.svg"),
      projectName: "FIRE Calculator",
      projectDesc:
        "財務自由（FIRE）をビジュアライズする極簡でモダンなシミュレーターアプリ。",
      footerLink: [
        {
          name: "デモを見る",
          url: "https://fire-calculator-v1-1.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Cyoukakitsu/fire--calculator--v1.1"
        }
      ]
    },
  ],
  display: true
};

// Achievements — disabled
const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false
};

// Blog — disabled
const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks — disabled
const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast — disabled
const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume — disabled (no resume link yet)
const resumeSection = {
  title: "履歴書",
  subtitle: "ご希望の方はお気軽にご連絡ください",
  display: false
};

// Contact
const contactInfo = {
  title: emoji("お気軽にどうぞ ✉️"),
  subtitle:
    "プロジェクトのご相談、採用のご連絡、技術的な話題など、何でもお待ちしております。",
  number: "",
  email_address: "z261459808@gmail.com"
};

// Twitter — disabled
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
