# NESIC Career Story Page

## Design & Implementation Specification

---

# 1. Project Overview

## Project Name

NESIC Career Story Page

## Target URL

https://d2lp7owtd50i80.cloudfront.net/nesic/

## Purpose

NECネッツエスアイ（NESIC）の
グローバル海底ケーブル・海洋インフラ関連ポジションへの応募を想定した、
個人Career Storyページを制作する。

このページは一般的な開発者ポートフォリオではない。

採用担当者が短時間で以下を理解できることを目的とする。

1. 韓国・カナダ・日本を経験したグローバルなバックグラウンド
2. Web開発 → システム運用 → クラウド移行と広げてきたITキャリア
3. 英語・日本語を活用できるコミュニケーション能力
4. 異なる国・組織・技術環境への適応力
5. 複数チーム・関係者との調整およびドキュメンテーション経験
6. グローバル社会インフラ分野で長期的な専門性を築きたいという方向性

The website should feel like a concise professional career presentation,
not a technical demo.

---

# 2. Core Concept

## Main Theme

**My Journey to Global Infrastructure**

## Main Message

**From IT systems to the infrastructure that connects the world.**

Japanese:

**ITシステムから、世界をつなぐインフラへ。**

## Journey

Korea  
↓  
Canada  
↓  
Kawasaki  
↓  
Kumamoto  
↓  
Osaka  
↓  
Kawasaki / Global Infrastructure

「地理的な移動」と「技術キャリアの変化」を
一つのストーリーとして表現する。

---

# 3. Core Positioning

The page should communicate:

**Global × Technology × Adaptability × Infrastructure**

Desired impression:

> 異なる国・文化・技術領域を経験しながら成長してきたITエンジニアが、
> 次のキャリアとしてグローバル社会インフラ分野で
> 長期的な専門性を築こうとしている。

---

# 4. What This Website Is

This IS:

- Personal Career Story
- Global Experience Showcase
- Career Journey
- Professional Supporting Material
- Infrastructure Career Vision
- Interview Supporting Material

This is NOT:

- Generic Developer Portfolio
- Frontend Portfolio
- Cloud Engineer Portfolio
- SaaS Landing Page
- Resume copied into HTML
- NESIC Corporate Website
- Technical Demo

Do not make programming technologies the visual focus.

---

# 5. Technology Stack

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Deployment environment:

- Amazon S3
- Amazon CloudFront

Target path:

```text
/nesic/
```

Do NOT use:

- React
- Next.js
- TypeScript
- Tailwind CSS
- Node.js
- Backend
- Database
- Authentication
- CMS
- Build tools unless absolutely necessary

The page should remain a lightweight static website.

---

# 6. Maintainability

The owner must be able to modify the website directly using VS Code.

Prioritize:

- simple HTML
- readable CSS
- simple JavaScript
- clear comments
- predictable file structure
- minimal dependencies

Avoid unnecessary abstraction.

Do not create complex JavaScript architecture for a static page.

---

# 7. File Structure

Recommended:

```text
nesic/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── profile/
    ├── korea/
    ├── canada/
    ├── kawasaki/
    ├── kumamoto/
    └── osaka/
```

If icons are needed, prefer:

- simple SVG
- inline SVG
- lightweight icon assets

Avoid large UI libraries.

---

# 8. Photo Management

Photos will be added later.

The initial implementation should use clearly marked placeholders.

Example:

```html
<img src="./images/canada/conestoga.jpg" alt="Study experience in Canada" />
```

Add comments where images should be replaced:

```html
<!-- TODO: Replace with actual Canada photo -->
```

Photo paths must be easy to identify and modify.

Do NOT download random stock photos and represent them as personal experiences.

---

# 9. Page Structure

The website should be a single-page storytelling experience.

Recommended order:

1. Header
2. Hero
3. My Journey
4. Career Evolution
5. What I Bring
6. Why Global Infrastructure
7. Currently Exploring
8. Global Experience Gallery
9. Career Direction
10. Footer

The entire page should be understandable within approximately 1–3 minutes.

Do not overload the visitor with text.

---

# 10. Header

Keep the navigation minimal.

Example:

```text
JUYONG SIM

Journey
Experience
Infrastructure
Global
```

Optional right-side text:

```text
Global IT Engineer
```

Do not add unnecessary:

- Blog
- Contact Form
- GitHub statistics
- skill pages
- project menus

Header may become slightly transparent or fixed during scrolling.

Keep the effect subtle.

---

# 11. Hero Section

## Goal

Within approximately five seconds, communicate:

- international background
- IT career
- next career direction

## Main Headline

**My Journey to Global Infrastructure**

## Subheadline

**ITシステムから、世界をつなぐインフラへ。**

## Route

```text
Korea → Canada → Kawasaki → Kumamoto → Osaka → Kawasaki
```

## Supporting Copy

韓国と日本でITエンジニアとして実務経験を積み、
カナダでの海外経験や英語・日本語の語学力を活かしながら、
次のキャリアでは世界をつなぐ社会インフラ分野で
長期的な専門性を築いていきたいと考えています。

## CTA

Use a subtle button:

**Explore My Journey**

The button scrolls to the Journey section.

Do NOT use:

- Hire Me
- Contact Me
- Work With Me

---

# 12. Hero Visual

The hero should NOT look like a developer portfolio.

Avoid:

- source code
- terminal windows
- programming language logos
- GitHub graphics
- cyberpunk design
- glowing server graphics

Preferred concept:

A minimal world map or geographic route visualization.

Possible route:

```text
Korea
   ↘
Canada
   ↘
Japan
   ↓
Kawasaki
   ↓
Kumamoto
   ↓
Osaka
   ↓
Kawasaki
```

Use:

- thin route lines
- small geographic markers
- subtle coordinates
- restrained network patterns

The map should feel like:

**Global Infrastructure / Engineering**

not:

**Travel Agency / Backpacking Blog**

---

# 13. My Journey

## Title

**My Journey**

## Subtitle

**異なる国・環境・技術を経験してきたキャリア**

This should be one of the strongest visual sections.

Create a timeline combining:

- location
- year
- short career story
- photo
- professional development

Desktop:

Horizontal or alternating timeline is acceptable.

Mobile:

Convert to a simple vertical timeline.

---

# 14. Journey — Korea

## Theme

**Foundation**

Content:

- English Interpretation & Translation
- Japanese Language & Culture
- Transition into IT
- Financial information service Web development

Japanese:

英語通訳翻訳と日本言語文化を学び、
その後IT分野へキャリアを転換。

金融情報サービス企業にて、
Webフロントエンド開発・運用を経験しました。

Visual:

Use university / Korea / early career photo later.

---

# 15. Journey — Canada

## Theme

**Global Experience**

Content:

- Study experience in Canada
- Conestoga College
- Computer Programming and Analysis
- English-speaking environment
- Cross-cultural adaptability

Japanese:

カナダでの留学生活を通じて、
英語環境で専門分野を学びながら、
異なる文化や価値観の中で生活する経験をしました。

Conestoga Collegeでは
Computer Programming and Analysisを学びました。

Visual:

Use actual Canada photos later.

---

# 16. Journey — Kawasaki

## Theme

**Beginning in Japan**

Represent the beginning of the Japan chapter.

Do NOT imply professional experience in Kawasaki if none exists.

Focus on:

- beginning life in Japan
- adapting to another environment
- starting a new chapter

Keep this section short.

---

# 17. Journey — Kumamoto

## Theme

**Systems & Operations**

Content:

- Municipal system project
- System development / operations
- Oracle DB
- Data integration
- Batch testing
- Incident investigation
- User inquiries
- Documentation
- Stakeholder communication

Key English phrase:

**Learning how real systems operate.**

Japanese:

自治体向け業務システムに携わり、
システム開発・運用保守、Oracle DB、
データ連携、バッチテスト、
インシデント対応などを経験しました。

---

# 18. Journey — Osaka

## Theme

**Cloud & Infrastructure**

Content:

- Financial industry cloud migration
- JP1/AJS3
- Shell Script
- GCP Cloud Run Jobs
- Testing
- Validation
- Documentation
- Multi-team coordination

Key English phrase:

**Moving deeper into infrastructure.**

Japanese:

金融業界向けクラウドマイグレーションプロジェクトに参画し、
既存バッチシステムのクラウド移行、
テスト・検証、ドキュメント作成、
複数チームとの情報共有・調整を経験しました。

---

# 19. Journey — Kawasaki / Next

## Theme

**Next Destination**

Do NOT imply that employment with NESIC has already been decided.

Use:

**Kawasaki / Next**

or

**Next Destination**

Japanese:

次のキャリアでは、
これまでのIT経験と海外経験を土台として、
世界をつなぐ社会インフラ領域で
長期的な専門性を築いていきたいと考えています。

This creates a subtle narrative connection:

Japan Journey began around Kawasaki  
→ Kumamoto  
→ Osaka  
→ potentially back toward Kawasaki / global infrastructure.

Do not overdramatize this connection.

---

# 20. Career Evolution

## Title

**From Software to Infrastructure**

Visualize:

```text
Web Development
        ↓
System Development & Operations
        ↓
Cloud Migration
        ↓
Global Infrastructure
```

Use a clean visual progression.

Japanese:

Webサービスの開発からキャリアをスタートし、
業務システムの開発・運用保守、
金融システムのクラウド移行へと、
よりシステム基盤に近い領域へ経験を広げてきました。

その経験を通じて、
デジタルサービスそのものだけでなく、
それを支えるインフラにも関心を持つようになりました。

Important:

Do NOT imply that these fields are technically identical.

This section represents career interest and progression.

---

# 21. What I Bring

## Title

**What I Bring**

Do NOT create a traditional skill rating section.

Forbidden:

```text
JavaScript ★★★★★
AWS ★★★★☆
React 90%
GCP 85%
```

Instead display five professional capabilities.

---

## 01 — Global Communication

**English & Japanese**

Experience studying and working across:

- Korea
- Canada
- Japan

Focus on communication and cultural adaptability.

---

## 02 — Stakeholder Coordination

Experience in projects involving multiple:

- teams
- companies
- stakeholders

Examples:

- specification confirmation
- information sharing
- reviews
- progress coordination

---

## 03 — Documentation

Experience creating and organizing:

- technical information
- test documentation
- procedures
- knowledge-sharing materials

---

## 04 — Learning & Adaptability

Visual:

```text
Web
↓
Systems
↓
Cloud
↓
Next Field
```

Message:

New environments and technologies have repeatedly been part of the career.

---

## 05 — Technical Foundation

Experience across:

- Web systems
- System operations
- Cloud
- Infrastructure
- Databases
- Containers
- Batch systems

Individual technologies may appear as small supporting text.

Do not make technology logos the visual focus.

---

# 22. Why Global Infrastructure

## Title

**Why Global Infrastructure?**

This is a key storytelling section.

Visual concept:

```text
Cloud / AI
      ↓
Data Centers
      ↓
Global Networks
      ↓
Submarine Cables
```

Use a simple diagram.

Do NOT create an overly technical architecture diagram.

---

# 23. Why Infrastructure — Copy

クラウドやAIサービスは、
一見すると仮想的な世界で動いているように見えます。

しかし、その基盤にはデータセンターがあり、
さらにそれらを国や大陸を越えて接続する
大規模な通信ネットワークがあります。

Web開発、システム運用、
クラウドマイグレーションを経験する中で、
私は次第にサービスそのものだけではなく、
それを支えるインフラにも関心を持つようになりました。

そして現在、
世界の通信を物理的に支える
海底ケーブルというインフラ領域に
強い関心を持っています。

---

# 24. Technical Accuracy

Do NOT say:

> Cloud runs on submarine cables.

The intended relationship is:

```text
Digital Services
      ↓
Cloud / Data Centers
      ↓
Global Network Infrastructure
      ↓
Terrestrial + Submarine Networks
```

Submarine fiber-optic cables are an important part of international network infrastructure.

Keep all explanations technically accurate.

---

# 25. Currently Exploring

## Title

**Exploring the Submarine Cable Domain**

## Subtitle

**新しい専門領域への学習**

Possible topics:

- Marine Survey
- Bathymetry
- GIS
- Cable Route Engineering
- Cable Burial
- Risk Assessment
- Submarine Cable Systems

Display them visually as:

**Learning Topics**

or

**Currently Exploring**

---

# 26. Critical Honesty Rule

The owner does NOT currently have professional experience in:

- Marine Survey
- GIS
- Cable Route Engineering
- Cable Installation
- Submarine Cable Engineering

Never represent these as existing professional skills.

Allowed:

- Currently Exploring
- Currently Learning
- Areas of Interest
- Learning Topics
- Building Knowledge

Forbidden:

- GIS Specialist
- Route Engineering Expert
- Submarine Cable Engineer
- Experienced in Marine Survey

Credibility is more important than appearing technically impressive.

---

# 27. Global Experience Gallery

## Title

**Across Countries & Cultures**

## Subtitle

**異なる環境で学び、働き、適応してきた経験**

Use real personal photos later.

Possible categories:

### Korea

Education / early career

### Canada

Study / international environment

### Kawasaki

Beginning of life in Japan

### Kumamoto

Life and work in Japan

### Osaka

Professional development / cloud career

---

# 28. Gallery Purpose

The gallery is NOT a travel gallery.

Its purpose is to visually support:

- international experience
- cultural adaptability
- willingness to enter unfamiliar environments
- ability to build relationships across cultures

Good photos:

- university
- overseas study
- cities where the owner lived
- multicultural group photos
- professional/semi-professional environments
- meaningful life moments related to the journey

Avoid:

- excessive selfies
- nightlife
- drinking
- dating-style photos
- random food photos
- Instagram-style photo dumps

A few strong photos are better than many weak photos.

---

# 29. Gallery Design

Do not display dozens of equally sized images.

Prefer approximately:

6–10 carefully selected photos.

Possible layout:

```text
[ Large Canada Photo ] [ Small Photo ]

[ Small Photo ] [ Large Japan Photo ]

[ Wide Kumamoto / Osaka Photo ]
```

Use subtle captions.

Example:

```text
Canada · 2020
Learning in an international environment
```

or:

```text
Kumamoto · 2025
Building my career in Japan
```

Keep captions short.

---

# 30. Photo Placeholders

Until real photos are added:

Use neutral placeholder blocks.

Example:

```html
<div class="photo-placeholder">
  <span>Canada Photo</span>
</div>
```

Do not use fake personal stock photography.

Add comments:

```html
<!-- TODO: Add Canada photo -->
```

The site must still look intentional even before photos are added.

---

# 31. Career Direction

## Title

**Next Destination: Global Infrastructure**

Japanese:

これまでのキャリアでは、
Web開発、システム運用・保守、
クラウドマイグレーションと、
異なる技術領域を経験してきました。

これからは、
短期間で多くの技術を経験するだけではなく、
一つの専門領域で長期的に経験と知識を積み重ね、
グローバルなプロジェクトで価値を提供できる
専門性の高いエンジニアを目指しています。

---

# 32. Closing

Possible final statement:

**Technology supports systems.  
Infrastructure connects the world.**

Japanese:

**ITの経験を、世界をつなぐインフラへ。**

Keep the ending restrained and professional.

Do not use exaggerated motivational language.

---

# 33. Footer

Keep simple.

Example:

```text
JUYONG SIM

Global IT Engineer
Korea · Japan · Canada

© 2026 JUYONG SIM
```

Optional:

- LinkedIn
- Main Portfolio

Do not add unnecessary social media links.

---

# 34. Design Direction

## Keywords

- Global
- Infrastructure
- Ocean
- Engineering
- Professional
- International
- Minimal
- Technical
- Trustworthy

## Overall Feel

Think:

**Global infrastructure engineering presentation**

not:

**Startup landing page**

not:

**Developer dashboard**

not:

**Personal travel blog**

---

# 35. Visual Direction

Preferred:

- strong typography
- generous whitespace
- thin lines
- geographic routes
- subtle grid
- world map
- ocean-inspired patterns
- engineering-document feeling
- understated animations

Possible motifs:

- map coordinates
- cable routes
- bathymetric contour lines
- network connections
- latitude / longitude lines

Do not make the design look like an actual marine engineering project document.

These motifs are visual inspiration only.

---

# 36. Color Direction

Preferred palette:

- Deep Navy
- Ocean Blue
- White
- Off-white
- Neutral Gray

Optional accent:

- restrained light blue / cyan

Avoid:

- excessive gradients
- neon
- many accent colors
- purple SaaS aesthetic

Do NOT copy NEC/NESIC corporate branding exactly.

This must remain clearly a personal website.

---

# 37. Typography

Use clean professional typography.

English headings may be large and visually strong.

Japanese body text should prioritize readability.

Avoid:

- decorative fonts
- handwritten fonts
- gaming fonts
- excessively futuristic fonts

Typography should feel appropriate for:

Engineering

- Infrastructure
- Global Business

  ***

# 38. Animation

Use only lightweight CSS / Vanilla JavaScript animations.

Good examples:

- fade-in on scroll
- timeline reveal
- subtle route-line animation
- location marker appearance
- gentle hover effect

Avoid:

- large animation libraries
- excessive parallax
- 3D effects
- bouncing elements
- flashy transitions

Animation should never become the main attraction.

---

# 39. JavaScript

JavaScript should be minimal.

Possible uses:

- smooth scrolling
- mobile navigation
- IntersectionObserver scroll reveal
- simple timeline interaction
- gallery interaction if necessary

Do not implement:

- complex SPA routing
- state management
- client-side frameworks

Prefer native browser APIs.

---

# 40. Responsive Design

Must support:

- Desktop
- Tablet
- Mobile

Desktop may use:

- horizontal routes
- larger maps
- alternating timeline
- asymmetric photo gallery

Mobile should convert these naturally.

Example:

Desktop:

```text
Korea ─ Canada ─ Kawasaki ─ Kumamoto ─ Osaka
```

Mobile:

```text
Korea
 │
Canada
 │
Kawasaki
 │
Kumamoto
 │
Osaka
```

Do not simply shrink the desktop layout.

---

# 41. Performance

The page should load quickly.

Prioritize:

- compressed images
- WebP / AVIF where practical
- lazy-loaded gallery images
- minimal JavaScript
- no unnecessary libraries
- no large background videos

Example:

```html
<img src="./images/canada/photo.webp" loading="lazy" alt="Study experience in Canada" />
```

---

# 42. Accessibility

Use:

- semantic HTML
- meaningful alt text
- proper heading hierarchy
- keyboard accessible navigation
- sufficient contrast
- visible focus states

Example:

```html
<section id="journey" aria-labelledby="journey-title">
  <h2 id="journey-title">My Journey</h2>
</section>
```

---

# 43. Language Strategy

Primary content language:

**Japanese**

Visual / heading language:

**English**

Recommended pattern:

```text
MY JOURNEY

異なる国・環境・技術を経験してきたキャリア
```

Do NOT implement multilingual switching.

No i18n is necessary for this page.

---

# 44. Career Facts

Career information must remain consistent with the resume.

## Korea

Financial information service company

Experience:

- Web frontend development
- HTML / CSS / JavaScript
- PHP
- UI implementation
- Testing
- Maintenance
- Customer requirement coordination

---

## Japan — Kumamoto

Municipal system project

Experience:

- System development
- Operations and maintenance
- Oracle DB
- Data integration
- Batch testing
- Incident investigation
- User inquiries
- Documentation
- Stakeholder communication

---

## Japan — Osaka

Financial industry cloud migration

Experience:

- JP1/AJS3
- Shell Script
- GCP Cloud Run Jobs
- Testing
- Validation
- Documentation
- Jira / Confluence
- Multi-team coordination

---

# 45. Global Background

May emphasize:

- Korean background
- English Interpretation & Translation
- Japanese Language & Culture
- Canada study experience
- Conestoga College
- Professional experience in Korea and Japan
- English communication
- Japanese communication
- Adaptability to different cultural environments

Do not turn this into a language certificate page.

Language qualifications may appear as supporting evidence.

---

# 46. Confidentiality

Never publish:

- confidential client information
- internal architecture diagrams
- internal project screenshots
- internal company documents
- customer information
- credentials
- internal URLs
- source code from previous employers

Use generalized project descriptions.

---

# 47. No Fabrication

Never invent:

- responsibilities
- leadership roles
- marine engineering experience
- GIS experience
- overseas business negotiation experience
- shipboard experience
- submarine cable experience
- project scale
- certifications

If information is unavailable, use a TODO placeholder.

Do not guess.

---

# 48. Content Tone

Professional but personal.

Preferred language:

- experienced
- learned
- adapted
- contributed
- coordinated
- explored
- interested in
- building expertise

Avoid:

- world-class
- expert
- visionary
- master
- revolutionary
- passionate leader

The page should feel confident without exaggeration.

---

# 49. Desired Visitor Experience

## First 10 Seconds

The visitor should think:

> This person has an unusual international background.

## After 30 Seconds

> He has real IT experience across several technical environments.

## After 60 Seconds

> His global experience and project skills may transfer well to international infrastructure projects.

## At the End

> He is not a submarine cable engineer yet, but his reason for moving toward the field is understandable and his previous career suggests he can learn new domains.

---

# 50. Success Criteria

The website should clearly answer five questions.

## Who is he?

A Korean IT engineer with experience in Korea and Japan and international experience in Canada.

## What has he done?

Web Development  
→ System Development / Operations  
→ Cloud Migration

## What does he bring?

Global communication

- Adaptability
- Coordination
- Documentation
- Technical foundation

## Why infrastructure?

His career interest gradually expanded from applications toward the infrastructure supporting digital services.

## Why submarine cables?

He wants to build long-term expertise in a specialized, international field that supports global communications.

---

# 51. Development Priority

Prioritize in this order:

1. Storytelling
2. Credibility
3. Visual clarity
4. Global career journey
5. Infrastructure career direction
6. Responsive design
7. Maintainability
8. Animation
9. Technical complexity

Technical complexity is the LOWEST priority.

---

# 52. Initial Claude Code Instructions

Before implementing anything:

1. Read this entire specification.
2. Inspect the existing portfolio repository.
3. Inspect how `/main/` and existing CloudFront/S3 paths are structured.
4. Determine the correct location for the `/nesic/` static page.
5. Identify existing CSS/assets that can safely be reused.
6. Propose the final page structure.
7. Propose the visual design.
8. Propose the image placeholder locations.
9. Do NOT implement yet.
10. Wait for approval.

Do not modify the existing main portfolio unnecessarily.

The `/nesic/` page should be independently maintainable.

---

# 53. Final Rule

The website should not try to prove:

> "I already know submarine cable engineering."

It should successfully communicate:

> "I have built my career by adapting to new countries,
> technologies, and project environments.

> Now I want to use that experience to build long-term expertise
> in global infrastructure."

That is the central story of the entire page.
