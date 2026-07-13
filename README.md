<div align="center">

# ☁️ SIM JUYONG | Cloud Engineer Portfolio

**From Code to Cloud — Building End-to-End Systems.**

프론트엔드 개발 경험을 바탕으로 일본 IT 프로젝트에서 공공 시스템 운영과 금융권 클라우드 전환(JP1 → Cloud Run Jobs)을 경험한
**Cloud Engineer / DevOps** 지망 포트폴리오입니다.

[![Live Demo](https://img.shields.io/badge/Live-Demo-2563eb?style=for-the-badge&logo=amazonaws&logoColor=white)](http://sim-juyong-portfolio-s3.s3-website.ap-northeast-2.amazonaws.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Docs-0f172a?style=for-the-badge&logo=googledocs&logoColor=white)](./ARCHITECTURE.md)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![AWS](https://img.shields.io/badge/AWS-S3%20%7C%20CloudFront%20%7C%20Route53-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions%20(OIDC)-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

<br />

<p align="center">
  <img src="images/og2.webp" alt="SIM JUYONG Cloud Engineer Portfolio preview" width="820" />
</p>

<br />

## 📌 About

- **Target role**: Cloud Engineer / DevOps / SRE
- **Cloud**: AWS + GCP 멀티 클라우드 경험 (자격증 5개 보유)
- **Domain**: 금융권 클라우드 전환, 공공 시스템 운영
- **Strength**: 마이그레이션 설계, 운영 자동화, 기술 문서화
- **Language**: 한국어 · 영어 · 일본어 (실무 커뮤니케이션 가능)

이 저장소는 위 커리어를 소개하는 정적 웹 포트폴리오 코드와, 그 포트폴리오를 **AWS 위에 실제로 배포·운영하는 인프라/CI-CD 구성**을 함께 담고 있습니다.
디자인 컨셉은 "Engineer's Notebook" — 그리드 배경과 네이비/코발트 톤, 터미널풍 히어로 카드로 실제 엔지니어의 작업 노트를 재해석했습니다.

## ✨ Highlights

| | |
|---|---|
| 🔄 **Cloud Migration 경험** | JP1 기반 배치 실행 구조를 GCP Cloud Run Jobs 기반 컨테이너 배치로 전환하는 흐름을 프로젝트로 정리 |
| ☁️ **실제 AWS 배포 구조** | 이 포트폴리오 자체를 S3 + CloudFront + Route 53으로 서빙하고, GitHub Actions(OIDC)로 무중단 자동 배포 |
| 🏆 **AWS 인증 5개** | Solutions Architect / Developer / CloudOps Engineer (Associate) + AI Practitioner + Cloud Practitioner |
| 🌐 **3개 국어 지원** | 자체 구현한 JSON 기반 i18n으로 한국어 / English / 日本語 전환 |
| 🛠 **운영 경험** | Oracle/SQL 기반 장애 조사, 로그 분석, 배치 실행 검증 등 실전 운영 이력 |

## 🗂️ Site Sections

| Section | Description |
|---|---|
| `Home` | 타이핑 애니메이션 기반 히어로, 핵심 지표(타겟 직무 / 클라우드 / 도메인 / 강점) 요약 |
| `About` | 포지셔닝 요약 및 커리어 방향성 |
| `Career` | JCB 클라우드 마이그레이션, 공공 시스템 운영, 프론트엔드 개발 타임라인 |
| `Skills` | Cloud / DevOps·IaC / Operation / Development / Tools 5개 축의 스킬 맵 |
| `Certificates` | AWS 자격증 5종 (Credly 배지 연동) |
| `Projects` | 아키텍처 다이어그램이 첨부된 클라우드 중심 프로젝트 카드 4종 |
| `Contact` | 이메일 / GitHub / LinkedIn |

## 🛠️ Tech Stack

**Frontend**
- Vanilla HTML5 / CSS3 (단일 스타일시트, 커스텀 프로퍼티 기반 디자인 시스템)
- Vanilla JavaScript (ES Modules) — 빌드 도구 없이 브라우저 네이티브 모듈 구조
- [TypeIt.js](https://typeitjs.com/) — 히어로 타이핑 애니메이션
- 자체 구현 i18n 모듈 (`src/i18n.js`) — `data-i18n` 속성 기반 다국어 렌더링

**Infrastructure / CI-CD**
- Amazon S3 — 정적 웹사이트 호스팅(origin)
- Amazon CloudFront — HTTPS, 캐싱, 글로벌 엣지 배포
- Amazon Route 53 — 커스텀 도메인 DNS
- GitHub Actions — `main` 브랜치 push 시 OIDC로 AWS 역할을 assume하여 장기 액세스 키 없이 배포

> 배포 흐름, 요청 흐름 시퀀스 다이어그램, 비용 구조까지의 전체 아키텍처 문서는 **[📐 ARCHITECTURE.md](./ARCHITECTURE.md)** 를 참고하세요.

## 📁 Project Structure

```
.
├── index.html                 # Home → About → Career → Skills → Certificates → Projects → Contact
├── css/
│   └── style.css              # 전체 스타일 (단일 파일)
├── src/
│   ├── main.js                # 엔트리 포인트
│   ├── i18n.js                 # 다국어 처리
│   ├── projects.js             # 프로젝트 필터링
│   └── features/
│       ├── header.js          # 헤더 / 스크롤 동작
│       └── scroll_fade.js     # 스크롤 인터랙션
├── i18n/                       # en.json / ja.json / ko.json
├── images/
│   ├── badges/                # AWS 자격증 배지
│   └── architectures/         # 프로젝트별 아키텍처 다이어그램 (SVG)
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions → S3 sync + CloudFront invalidation
└── ARCHITECTURE.md
```

## 🚀 Local Preview

```bash
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 접속하여 확인합니다. 별도의 빌드 과정이나 의존성 설치가 필요 없습니다.

## ☁️ Deploy to Amazon S3 (Static Website Hosting)

1. S3 버킷을 생성합니다.
2. `css/`, `src/`, `i18n/`, `images/`, `index.html` 폴더 구조를 유지한 채 전체 파일을 업로드합니다.
3. 버킷 → **Properties** → **Static website hosting** 활성화, index document를 `index.html`로 설정합니다.
4. 버킷 → **Permissions** → "Block all public access" 해제 후 `s3:GetObject`를 허용하는 버킷 정책을 추가합니다 (또는 HTTPS/커스텀 도메인을 위해 CloudFront를 앞단에 구성).
5. 정적 웹사이트 엔드포인트 URL로 접속하여 확인합니다.

이 저장소는 위 과정을 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) 로 자동화하여, `main` 브랜치에 push할 때마다 OIDC 인증으로 S3에 동기화하고 CloudFront 캐시를 무효화합니다.

## 📫 Contact

- **Email**: [jysim1212@gmail.com](mailto:jysim1212@gmail.com)
- **GitHub**: [@moondolph](https://github.com/moondolph)
- **LinkedIn**: [juyong-sim-profile](https://www.linkedin.com/in/juyong-sim-profile/)

<br />

<div align="center">

© SIM JUYONG. Cloud Engineer Portfolio.

</div>
