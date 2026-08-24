"use strict";

/* ==========================================================================
   THE SC COMPANY portfolio — self-contained page script.
   Reuses the same lang-switch / header / scrollspy pattern as the main
   portfolio, but inlined into a single file (no i18n/*.json, no build step).
   ========================================================================== */

const I18N = {
  ko: {
    "site.title": "SIM JUYONG | Web · AI · Automation Developer",
    "site.description": "웹 개발, 일본 시스템 경험, AI 기반 자동화 — THE SC COMPANY 지원을 위한 짧은 포트폴리오.",
    "og.title": "SIM JUYONG | Web · AI · Automation Developer",

    "nav.home": "🙋 About",
    "nav.why": "🧭 Why Me",
    "nav.experience": "🧑‍💼 Experience",
    "nav.projects": "🚀 Projects",
    "nav.skills": "🛠️ Skills",
    "nav.certifications": "🏆 Certs",
    "nav.contact": "📬 Contact",

    "hero.tag": "✨ WEB DEVELOPMENT · AI · AUTOMATION · JAPAN",
    "hero.title": "AI로 빠르게 만들고,\n웹과 자동화로 실제 문제를 해결합니다.",
    "hero.subtitle":
      "웹 개발에서 시작해 일본 시스템 프로젝트와 클라우드 환경까지 경험했습니다. 이제 AI를 활용해 아이디어를 빠르게 구현하고, 반복되는 업무를 자동화하는 개발을 지향합니다.",
    "hero.cta.projects": "🔭 View Projects",
    "hero.cta.contact": "✉️ Contact",
    "hero.role": "Web · AI · Automation Developer",
    "hero.badge.japan": "🇯🇵 Japan Work Experience",

    "why.title": "🧭 Why Me",
    "why.web.title": "💻 Web Development",
    "why.web.desc": "개발 · 운영 · 유지보수까지, 웹 실무 전 과정을 다뤄본 개발자입니다.",
    "why.japan.title": "🇯🇵 Japan Work Experience",
    "why.japan.desc": "일본어 소통 + 현지 실무 경험으로, 일본 채널용 랜딩페이지 · 대시보드 · 자동화를 직접 만듭니다.",
    "why.ai.title": "🤖 AI Development",
    "why.ai.desc": "AI를 학습에 그치지 않고, 실제 개발에 적극 적용하고 있습니다.",
    "why.automation.title": "⚙️ Automation",
    "why.automation.desc": "Python · Shell 스크립트와 배치 설계 경험으로 반복 업무를 자동화합니다.",

    "experience.title": "🧑‍💼 Experience",
    "experience.flow.1": "Web Development",
    "experience.flow.2": "System & Data",
    "experience.flow.3": "Cloud & Automation",
    "experience.flow.4": "AI-assisted Development",

    "exp.gsifn.role": "Web Frontend Developer",
    "exp.gsifn.b1": "국내 주요 상장기업 IR 웹사이트 개발",
    "exp.gsifn.b2": "투자정보 Web Widget 개발",
    "exp.gsifn.b3": "HTML / CSS / JavaScript, Responsive Web",
    "exp.gsifn.b4": "고객사별 UI 및 기능 Customizing",
    "exp.gsifn.b5": "PHP / MySQL, AWS EC2 기반 운영",

    "exp.cal.role": "System Engineer",
    "exp.cal.b1": "일본 지자체 시스템 구축·운영",
    "exp.cal.b2": "Oracle / SQL 기반 데이터 처리",
    "exp.cal.b3": "Java 기반 시스템 분석, Linux / Kubernetes 환경 운영",
    "exp.cal.b4": "일본 현지 엔지니어와 협업",

    "exp.pci.role": "Cloud / Infrastructure Engineer",
    "exp.pci.b1": "일본 금융권 Cloud Migration (JP1 → GCP Cloud Run Jobs)",
    "exp.pci.b2": "Shell Script 작성, 반복 실행 로직 공통화 / Parameterization",
    "exp.pci.b3": "일본어 기술 문서 작성",
    "exp.pci.b4": "애자일 스프린트 리뷰에서 일본 고객 대상으로 일본어 기술 프레젠테이션 직접 진행",

    "projects.title": "🚀 Selected Projects",
    "projects.subtitle": "Ideas into Working Products.",

    "p0.title": "Japan Clinic Marketing Copilot",
    "p0.badge": "🤖 AI Demo",
    "p0.problem": "일본 미용·뷰티 클리닉은 카피 작성, 랜딩페이지 제작, 리드 관리, 성과 분석이 따로 돌아가 마케팅팀의 반복 업무가 많음.",
    "p0.build": "AI로 일본어 마케팅 카피와 반응형 랜딩페이지를 자동 생성하고, 리드를 자동 분류·우선순위화하며, 채널별 성과를 대시보드로 보여주는 데모를 AI 코딩 툴로 직접 설계·구현.",
    "p0.result": "캠페인 기획부터 카피 · 랜딩페이지 · 리드 관리 · 성과 분석까지, 마케팅 퍼널 전체를 자동화하는 프로토타입 완성.",
    "p0.note": "⚠️ 포트폴리오용 데모이며, 테스트, 검증, 시연용입니다.",

    "p1.title": "Corporate IR Web Platform",
    "p1.problem": "기업마다 서로 다른 IR 정보와 UI 요구사항을 웹에서 제공해야 함.",
    "p1.build": "HTML / CSS / JavaScript 기반 반응형 웹 및 투자정보 Widget 개발. 고객사별 요구사항에 맞게 UI와 기능 Customizing.",
    "p1.result": "국내 주요 상장기업의 IR Web Service 개발 및 운영 경험 확보.",

    "p2.title": "Personal Multilingual Portfolio",
    "p2.problem": "개발·클라우드·글로벌 경험을 하나의 웹사이트에서 보여줄 필요.",
    "p2.build": "직접 설계 및 개발하고 AWS에 배포한 개인 포트폴리오. 한국어 / 영어 / 일본어 지원.",
    "p2.result": "기획 → 개발 → 배포 → 운영까지 직접 수행하는 End-to-End 개발 경험.",
    "p2.now": "🟢 NOW — 지금 보고 계신 페이지입니다!",

    "p3.title": "Cloud Batch Automation",
    "p3.problem": "기존 JP1 배치 시스템에서 Cloud Run Jobs를 안정적으로 실행해야 함.",
    "p3.build": "Shell Script로 JP1 → Wrapper Shell → Cloud Run Jobs 연계 구조 구현. 반복 실행 로직을 공통화하고 Parameterization.",
    "p3.result": "기존 시스템과 Cloud 환경을 연결하는 표준 실행 구조 설계 및 검증.",
    "p3.private": "🔒 Private project — 아키텍처만 소개합니다",
    "p3.summary": "일본 금융권 배치 시스템을 JP1에서 GCP Cloud Run Jobs로 전환한 프로젝트입니다. 상세 코드와 내부 자료는 공개할 수 없어, 전체 아키텍처만 소개합니다.",
    "p3.legend.exec": "실행 흐름 (dispatch → run → logs)",
    "p3.legend.exit": "종료 코드 반환",
    "p3.legend.build": "빌드 / 배포 흐름",
    "p3.insight": "온프레미스 JP1/AJS3 배치를 GCP Cloud Run Jobs로 전환하며, 4개 팀이 공유할 연계 기준을 문서로 정리했습니다.\n배치 기동 패턴 3종 비교표와 CI/CD 연계 방침 검토서가 실제 전환 결정에 쓰였습니다.",
    "cert.credly": "View all badges on Credly",

    "ai.title": "🤖 How I Build with AI",
    "ai.subtitle": "AI is not the product. It makes product development faster.",
    "ai.flow.1": "Idea / Problem",
    "ai.flow.2": "AI-assisted Planning",
    "ai.flow.3": "Prototype",
    "ai.flow.4": "Code & Integration",
    "ai.flow.5": "Test",
    "ai.flow.6": "Deploy",
    "ai.flow.7": "Improve",
    "ai.desc": "AI Coding Tool을 단순 코드 생성기가 아니라 개발 속도를 높이는 협업 도구로 활용합니다.",
    "ai.item.1": "Requirement Structuring",
    "ai.item.2": "Implementation Research",
    "ai.item.3": "Code Generation",
    "ai.item.4": "Refactoring",
    "ai.item.5": "Debugging",
    "ai.item.6": "Documentation",
    "ai.note": "AI가 생성한 결과를 그대로 사용하는 것이 아니라, 직접 검증하고 실제 서비스 환경에 맞게 수정합니다.",

    "build.title": "🧰 What I Can Build",
    "build.subtitle": "For Marketing Teams",
    "build.landing.title": "🖥️ Landing Pages",
    "build.landing.desc": "캠페인 / 서비스용 반응형 랜딩페이지",
    "build.dashboard.title": "📊 Marketing Dashboard",
    "build.dashboard.desc": "API와 데이터를 연결한 간단한 운영 Dashboard",
    "build.automation.title": "⚙️ Workflow Automation",
    "build.automation.desc": "반복적인 데이터 처리와 업무 프로세스 자동화",
    "build.tools.title": "🧩 Internal Tools",
    "build.tools.desc": "현업의 작은 불편을 해결하는 Web-based Internal Tool",
    "build.closing": "마케팅팀의 아이디어를 빠르게 실제 결과물로 만드는 개발자가 되고 싶습니다.",

    "skills.title": "🛠️ Skills",
    "skills.group.automation": "⚙️ AUTOMATION / DATA",
    "skills.group.language": "🗣️ LANGUAGE",
    "skills.lang.ko": "Korean — Native",
    "skills.lang.ja": "Japanese — JLPT N1 / Business",
    "skills.lang.en": "English — TOEIC 925 / Business",

    "cert.title": "🏆 Certifications",
    "cert.subtitle": "AWS 클라우드 자격증과 어학 성적",
    "cert.toeic.name": "TOEIC",
    "cert.toeic.score": "925 / Business",
    "cert.jlpt.name": "JLPT N1",
    "cert.jlpt.score": "일본어능력시험 최상위 등급",

    "contact.title": "📬 Let's Build Something Useful.",
    "contact.body":
      "기술의 가치는 실제 문제를 해결할 때 만들어진다고 생각합니다.\n\n웹과 AI를 활용해 아이디어를 실제 결과물로 만들겠습니다.",
  },

  en: {
    "site.title": "SIM JUYONG | Web · AI · Automation Developer",
    "site.description": "Web development, Japan system experience, and AI-assisted automation — a short portfolio built for THE SC COMPANY.",
    "og.title": "SIM JUYONG | Web · AI · Automation Developer",

    "nav.home": "🙋 About",
    "nav.why": "🧭 Why Me",
    "nav.experience": "🧑‍💼 Experience",
    "nav.projects": "🚀 Projects",
    "nav.skills": "🛠️ Skills",
    "nav.certifications": "🏆 Certs",
    "nav.contact": "📬 Contact",

    "hero.tag": "✨ WEB DEVELOPMENT · AI · AUTOMATION · JAPAN",
    "hero.title": "Build Fast with AI.\nSolve Real Problems with Web & Automation.",
    "hero.subtitle":
      "Starting in web development, I've worked across Japanese system projects and cloud environments. Now I use AI to turn ideas into working products quickly and to automate repetitive work.",
    "hero.cta.projects": "🔭 View Projects",
    "hero.cta.contact": "✉️ Contact",
    "hero.role": "Web · AI · Automation Developer",
    "hero.badge.japan": "🇯🇵 Japan Work Experience",

    "why.title": "🧭 Why Me",
    "why.web.title": "💻 Web Development",
    "why.web.desc": "Development, operations, and maintenance — I've handled the full web lifecycle.",
    "why.japan.title": "🇯🇵 Japan Work Experience",
    "why.japan.desc": "Japanese fluency + hands-on experience in Japan — I can build landing pages, dashboards, and automation for Japanese-market channels myself.",
    "why.ai.title": "🤖 AI Development",
    "why.ai.desc": "I don't just learn AI — I actively apply it in real development work.",
    "why.automation.title": "⚙️ Automation",
    "why.automation.desc": "Python, shell scripting, and batch design experience — I automate repetitive work.",

    "experience.title": "🧑‍💼 Experience",
    "experience.flow.1": "Web Development",
    "experience.flow.2": "System & Data",
    "experience.flow.3": "Cloud & Automation",
    "experience.flow.4": "AI-assisted Development",

    "exp.gsifn.role": "Web Frontend Developer",
    "exp.gsifn.b1": "Built IR websites for major listed Korean companies",
    "exp.gsifn.b2": "Developed investor-information web widgets",
    "exp.gsifn.b3": "HTML / CSS / JavaScript, responsive web",
    "exp.gsifn.b4": "Customized UI and features per client",
    "exp.gsifn.b5": "PHP / MySQL, operated on AWS EC2",

    "exp.cal.role": "System Engineer",
    "exp.cal.b1": "Built and operated systems for a Japanese local government",
    "exp.cal.b2": "Data processing with Oracle / SQL",
    "exp.cal.b3": "Java-based system analysis, Linux / Kubernetes operations",
    "exp.cal.b4": "Collaborated with local engineers in Japan",

    "exp.pci.role": "Cloud / Infrastructure Engineer",
    "exp.pci.b1": "Cloud migration for a Japanese financial company (JP1 → GCP Cloud Run Jobs)",
    "exp.pci.b2": "Wrote shell scripts, standardized and parameterized recurring job logic",
    "exp.pci.b3": "Authored technical documentation in Japanese",
    "exp.pci.b4": "Delivered technical presentations in Japanese directly to Japanese clients during Agile sprint reviews",

    "projects.title": "🚀 Selected Projects",
    "projects.subtitle": "Ideas into Working Products.",

    "p0.title": "Japan Clinic Marketing Copilot",
    "p0.badge": "🤖 AI Demo",
    "p0.problem": "Japanese beauty/aesthetic clinics run copywriting, landing pages, lead handling, and performance analysis as disconnected, repetitive marketing work.",
    "p0.build": "Built a demo with AI coding tools that auto-generates Japanese marketing copy and responsive landing pages, auto-classifies and prioritizes leads, and shows channel performance on a dashboard.",
    "p0.result": "A working prototype that automates the marketing funnel end to end — campaign planning, copy, landing page, lead handling, and performance analysis.",
    "p0.note": "⚠️ A portfolio demo, built for learning, testing, and proof-of-concept purposes.",

    "p1.title": "Corporate IR Web Platform",
    "p1.problem": "Each company needed different IR content and UI requirements delivered on the web.",
    "p1.build": "Built responsive sites and investor-info widgets in HTML / CSS / JavaScript, customized per client.",
    "p1.result": "Gained hands-on experience building and operating IR web services for major listed companies.",

    "p2.title": "Personal Multilingual Portfolio",
    "p2.problem": "Needed a single site to present development, cloud, and cross-border experience.",
    "p2.build": "Designed, built, and deployed my own portfolio on AWS, supporting Korean / English / Japanese.",
    "p2.result": "End-to-end experience: planning → development → deployment → operations, all handled myself.",
    "p2.now": "🟢 NOW — You're looking at this exact page!",

    "p3.title": "Cloud Batch Automation",
    "p3.problem": "Needed to run Cloud Run Jobs reliably alongside an existing JP1 batch system.",
    "p3.build": "Built a JP1 → wrapper shell → Cloud Run Jobs pipeline, standardizing and parameterizing repeated execution logic.",
    "p3.result": "Designed and validated a standard execution structure connecting legacy systems with the cloud.",
    "p3.private": "🔒 Private project — architecture only",
    "p3.summary": "A migration project that moved a Japanese financial company's batch system from JP1 to GCP Cloud Run Jobs. The code and internal materials are confidential, so only the overall architecture is shown here.",
    "p3.legend.exec": "Execution flow (dispatch → run → logs)",
    "p3.legend.exit": "Exit code return",
    "p3.legend.build": "Build / deploy flow",
    "p3.insight": "While migrating an on-prem JP1/AJS3 batch system to GCP Cloud Run Jobs, I documented the integration standard shared across 4 teams.\nA comparison table of 3 batch-trigger patterns and a CI/CD integration policy review were used in the actual migration decision.",
    "cert.credly": "View all badges on Credly",

    "ai.title": "🤖 How I Build with AI",
    "ai.subtitle": "AI is not the product. It makes product development faster.",
    "ai.flow.1": "Idea / Problem",
    "ai.flow.2": "AI-assisted Planning",
    "ai.flow.3": "Prototype",
    "ai.flow.4": "Code & Integration",
    "ai.flow.5": "Test",
    "ai.flow.6": "Deploy",
    "ai.flow.7": "Improve",
    "ai.desc": "I treat AI coding tools as a collaborator that speeds up development, not just a code generator.",
    "ai.item.1": "Requirement Structuring",
    "ai.item.2": "Implementation Research",
    "ai.item.3": "Code Generation",
    "ai.item.4": "Refactoring",
    "ai.item.5": "Debugging",
    "ai.item.6": "Documentation",
    "ai.note": "I don't ship AI output as-is — I verify it myself and adapt it to fit the real production environment.",

    "build.title": "🧰 What I Can Build",
    "build.subtitle": "For Marketing Teams",
    "build.landing.title": "🖥️ Landing Pages",
    "build.landing.desc": "Responsive landing pages for campaigns and services",
    "build.dashboard.title": "📊 Marketing Dashboard",
    "build.dashboard.desc": "Simple operational dashboards connected to APIs and data",
    "build.automation.title": "⚙️ Workflow Automation",
    "build.automation.desc": "Automating repetitive data processing and business workflows",
    "build.tools.title": "🧩 Internal Tools",
    "build.tools.desc": "Web-based internal tools that solve everyday friction",
    "build.closing": "I want to be the developer who turns a marketing team's ideas into real results, fast.",

    "skills.title": "🛠️ Skills",
    "skills.group.automation": "⚙️ AUTOMATION / DATA",
    "skills.group.language": "🗣️ LANGUAGE",
    "skills.lang.ko": "Korean — Native",
    "skills.lang.ja": "Japanese — JLPT N1 / Business",
    "skills.lang.en": "English — TOEIC 925 / Business",

    "cert.title": "🏆 Certifications",
    "cert.subtitle": "AWS Cloud Certifications & Language Proficiency",
    "cert.toeic.name": "TOEIC",
    "cert.toeic.score": "925 / Business",
    "cert.jlpt.name": "JLPT N1",
    "cert.jlpt.score": "Highest level of the Japanese Language Proficiency Test",

    "contact.title": "📬 Let's Build Something Useful.",
    "contact.body": "Technology creates value when it solves real problems.\n\nI use Web and AI to turn ideas into working products.",
  },

  ja: {
    "site.title": "SIM JUYONG | Web · AI · Automation Developer",
    "site.description": "Web開発、日本でのシステム経験、AIを活用した業務自動化 — THE SC COMPANY応募のための短いポートフォリオです。",
    "og.title": "SIM JUYONG | Web · AI · Automation Developer",

    "nav.home": "🙋 About",
    "nav.why": "🧭 Why Me",
    "nav.experience": "🧑‍💼 Experience",
    "nav.projects": "🚀 Projects",
    "nav.skills": "🛠️ Skills",
    "nav.certifications": "🏆 Certs",
    "nav.contact": "📬 Contact",

    "hero.tag": "✨ WEB DEVELOPMENT · AI · AUTOMATION · JAPAN",
    "hero.title": "AIで素早く形にし、\nWebと自動化で課題を解決します。",
    "hero.subtitle":
      "Web開発を起点に、日本のシステムプロジェクトやクラウド環境まで経験しました。現在はAIを活用してアイデアを素早く形にし、繰り返し業務を自動化する開発を目指しています。",
    "hero.cta.projects": "🔭 View Projects",
    "hero.cta.contact": "✉️ Contact",
    "hero.role": "Web · AI · Automation Developer",
    "hero.badge.japan": "🇯🇵 Japan Work Experience",

    "why.title": "🧭 Why Me",
    "why.web.title": "💻 Web Development",
    "why.web.desc": "開発・運用・保守まで、Webの実務全体を経験してきました。",
    "why.japan.title": "🇯🇵 Japan Work Experience",
    "why.japan.desc": "日本語での意思疎通と現地実務経験を活かし、日本向けチャネルのランディングページ・ダッシュボード・自動化を自ら構築できます。",
    "why.ai.title": "🤖 AI Development",
    "why.ai.desc": "AIを学ぶだけでなく、実際の開発に積極的に活用しています。",
    "why.automation.title": "⚙️ Automation",
    "why.automation.desc": "Python・Shellスクリプトとバッチ設計の経験を活かし、繰り返し業務を自動化します。",

    "experience.title": "🧑‍💼 Experience",
    "experience.flow.1": "Web Development",
    "experience.flow.2": "System & Data",
    "experience.flow.3": "Cloud & Automation",
    "experience.flow.4": "AI-assisted Development",

    "exp.gsifn.role": "Web Frontend Developer",
    "exp.gsifn.b1": "韓国主要上場企業のIRサイト開発",
    "exp.gsifn.b2": "投資情報Web Widgetの開発",
    "exp.gsifn.b3": "HTML / CSS / JavaScript、レスポンシブWeb",
    "exp.gsifn.b4": "顧客ごとのUI・機能カスタマイズ",
    "exp.gsifn.b5": "PHP / MySQL、AWS EC2上での運用",

    "exp.cal.role": "System Engineer",
    "exp.cal.b1": "日本の自治体システムの構築・運用",
    "exp.cal.b2": "Oracle / SQLによるデータ処理",
    "exp.cal.b3": "Javaベースのシステム分析、Linux / Kubernetes環境の運用",
    "exp.cal.b4": "現地エンジニアとの協業",

    "exp.pci.role": "Cloud / Infrastructure Engineer",
    "exp.pci.b1": "日本の金融機関向けCloud Migration（JP1 → GCP Cloud Run Jobs）",
    "exp.pci.b2": "Shell Scriptの作成、実行ロジックの共通化・パラメータ化",
    "exp.pci.b3": "日本語での技術ドキュメント作成",
    "exp.pci.b4": "アジャイルのスプリントレビューで、日本のお客様向けに技術プレゼンテーションを日本語で直接実施",

    "projects.title": "🚀 Selected Projects",
    "projects.subtitle": "Ideas into Working Products.",

    "p0.title": "Japan Clinic Marketing Copilot",
    "p0.badge": "🤖 AI Demo",
    "p0.problem": "日本の美容クリニックでは、コピー作成・ランディングページ制作・リード管理・成果分析がバラバラに運用され、マーケティング業務の反復作業が多い。",
    "p0.build": "AIで日本語マーケティングコピーとレスポンシブなランディングページを自動生成し、リードを自動分類・優先順位付けし、チャネル別の成果をダッシュボードで可視化するデモをAI Coding Toolで設計・実装。",
    "p0.result": "キャンペーン企画からコピー・ランディングページ・リード管理・成果分析まで、マーケティングファネル全体を自動化するプロトタイプを完成。",
    "p0.note": "⚠️ ポートフォリオ用のデモであり、学習・検証・テスト目的で作成したものです。",

    "p1.title": "Corporate IR Web Platform",
    "p1.problem": "企業ごとに異なるIR情報とUI要件をWebで提供する必要があった。",
    "p1.build": "HTML / CSS / JavaScriptによるレスポンシブWebと投資情報Widgetを開発。顧客ごとの要件に合わせてUI・機能をカスタマイズ。",
    "p1.result": "韓国主要上場企業のIR Web Serviceの開発・運用経験を獲得。",

    "p2.title": "Personal Multilingual Portfolio",
    "p2.problem": "開発・クラウド・グローバル経験を一つのサイトで示す必要があった。",
    "p2.build": "自ら設計・開発し、AWSにデプロイした個人ポートフォリオ。韓国語 / 英語 / 日本語に対応。",
    "p2.result": "企画から開発・デプロイ・運用までを一貫して行うEnd-to-Endの開発経験。",
    "p2.now": "🟢 NOW — 今まさにご覧になっているページです！",

    "p3.title": "Cloud Batch Automation",
    "p3.problem": "既存のJP1バッチシステムからCloud Run Jobsを安定的に実行する必要があった。",
    "p3.build": "Shell Scriptを用いてJP1 → Wrapper Shell → Cloud Run Jobsの連携構造を実装。実行ロジックを共通化しパラメータ化。",
    "p3.result": "既存システムとクラウド環境をつなぐ標準的な実行構造を設計・検証。",
    "p3.private": "🔒 Private project — アーキテクチャのみ紹介",
    "p3.summary": "日本の金融機関のバッチシステムをJP1からGCP Cloud Run Jobsへ移行したプロジェクトです。コードや内部資料は非公開のため、全体アーキテクチャのみご紹介します。",
    "p3.legend.exec": "実行フロー（dispatch → run → logs）",
    "p3.legend.exit": "終了コード返却",
    "p3.legend.build": "ビルド／デプロイフロー",
    "p3.insight": "オンプレミスのJP1/AJS3バッチをGCP Cloud Run Jobsへ移行する過程で、4チームが共有する連携基準をドキュメントとして整理しました。\nバッチ起動パターン3種の比較表とCI/CD連携方針の検討書が、実際の移行判断に使用されました。",
    "cert.credly": "View all badges on Credly",

    "ai.title": "🤖 How I Build with AI",
    "ai.subtitle": "AI is not the product. It makes product development faster.",
    "ai.flow.1": "Idea / Problem",
    "ai.flow.2": "AI-assisted Planning",
    "ai.flow.3": "Prototype",
    "ai.flow.4": "Code & Integration",
    "ai.flow.5": "Test",
    "ai.flow.6": "Deploy",
    "ai.flow.7": "Improve",
    "ai.desc": "AI Coding Toolを単なるコード生成ツールではなく、開発スピードを高める協働ツールとして活用しています。",
    "ai.item.1": "Requirement Structuring",
    "ai.item.2": "Implementation Research",
    "ai.item.3": "Code Generation",
    "ai.item.4": "Refactoring",
    "ai.item.5": "Debugging",
    "ai.item.6": "Documentation",
    "ai.note": "AIが生成した結果をそのまま使うのではなく、自分で検証し、実際のサービス環境に合わせて修正します。",

    "build.title": "🧰 What I Can Build",
    "build.subtitle": "For Marketing Teams",
    "build.landing.title": "🖥️ Landing Pages",
    "build.landing.desc": "キャンペーン・サービス向けのレスポンシブランディングページ",
    "build.dashboard.title": "📊 Marketing Dashboard",
    "build.dashboard.desc": "APIとデータを連携したシンプルな運用ダッシュボード",
    "build.automation.title": "⚙️ Workflow Automation",
    "build.automation.desc": "繰り返しのデータ処理・業務プロセスの自動化",
    "build.tools.title": "🧩 Internal Tools",
    "build.tools.desc": "現場の小さな不便を解消するWebベースの社内ツール",
    "build.closing": "マーケティングチームのアイデアを、素早く実際の成果物にする開発者でありたいと思っています。",

    "skills.title": "🛠️ Skills",
    "skills.group.automation": "⚙️ AUTOMATION / DATA",
    "skills.group.language": "🗣️ LANGUAGE",
    "skills.lang.ko": "Korean — Native",
    "skills.lang.ja": "Japanese — JLPT N1 / Business",
    "skills.lang.en": "English — TOEIC 925 / Business",

    "cert.title": "🏆 Certifications",
    "cert.subtitle": "AWSクラウド認定資格と語学スコア",
    "cert.toeic.name": "TOEIC",
    "cert.toeic.score": "925 / Business",
    "cert.jlpt.name": "JLPT N1",
    "cert.jlpt.score": "日本語能力試験 最上位級",

    "contact.title": "📬 Let's Build Something Useful.",
    "contact.body": "技術の価値は、実際の課題を解決してこそ生まれると考えています。\n\nWebとAIを活用し、アイデアを実際の成果につなげます。",
  },
};

const SUPPORTED = ["ko", "en", "ja"];
const DEFAULT_LANG = "ko";

function getLangFromQuery() {
  const params = new URLSearchParams(location.search);
  const l = params.get("lang");
  return SUPPORTED.includes(l) ? l : null;
}

function getLangFromStorage() {
  try {
    const l = localStorage.getItem("thesc_lang");
    return SUPPORTED.includes(l) ? l : null;
  } catch {
    return null;
  }
}

function getLangFromNavigator() {
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("ja")) return "ja";
  return "en";
}

function resolveLang() {
  return getLangFromQuery() || getLangFromStorage() || getLangFromNavigator() || DEFAULT_LANG;
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val !== "string") return;
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = val.replace(/\n/g, "<br>");
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el
      .getAttribute("data-i18n-attr")
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const val = dict[key];
      if (val) el.setAttribute(attr, val);
    });
  });

  if (dict["site.title"]) document.title = dict["site.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["site.description"]) metaDesc.setAttribute("content", dict["site.description"]);
}

function initLangSwitcher() {
  const select = document.getElementById("langSelect");
  if (!select) return;
  const current = resolveLang();
  select.value = current;
  applyI18n(current);

  select.addEventListener("change", (e) => {
    const lang = e.target.value;
    try {
      localStorage.setItem("thesc_lang", lang);
    } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.toString());
    applyI18n(lang);
  });
}

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;
  const headerHeight = header.getBoundingClientRect().height;
  const navbarMenu = document.querySelector(".header__menu");
  const navbarToggle = document.querySelector(".header__toggle");

  document.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > headerHeight);
  });

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => navbarMenu.classList.toggle("open"));
    navbarMenu.addEventListener("click", () => navbarMenu.classList.remove("open"));
  }
}

function initScrollSpy() {
  const sectionIds = ["#home", "#why", "#experience", "#projects", "#skills", "#certifications", "#contact"];
  const sections = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);
  const navItems = sectionIds.map((id) => document.querySelector(`.header__menu [href="${id}"]`));
  let activeNavItem = null;
  const TRIGGER_RATIO = 0.35;

  function selectNavItem(index) {
    const navItem = navItems[index];
    if (!navItem || navItem === activeNavItem) return;
    activeNavItem?.classList.remove("active");
    activeNavItem = navItem;
    activeNavItem.classList.add("active");
  }

  function update() {
    const triggerY = window.scrollY + window.innerHeight * TRIGGER_RATIO;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let activeIndex = 0;
    if (atBottom) {
      activeIndex = sections.length - 1;
    } else {
      sections.forEach((section, index) => {
        if (section.offsetTop <= triggerY) activeIndex = index;
      });
    }
    selectNavItem(activeIndex);
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
  update();
}

function initArrowUp() {
  const arrow = document.getElementById("arrowUp");
  if (!arrow) return;
  window.addEventListener(
    "scroll",
    () => {
      arrow.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initScrollSpy();
  initArrowUp();
  initLangSwitcher();
});
