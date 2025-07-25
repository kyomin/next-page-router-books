This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Vercel 배포 서버 도메인

https://next-page-router-books-app.vercel.app/

## Page Router의 장점

### 파일 시스템 기반의 간편한 페이지 라우팅 제공

- `pages/` 폴더 하위 경로로 페이지 라우팅 설정 가능

### 다양한 방식의 사전 렌더링 제공

- 서버 사이드 렌더링(SSR)
  - 요청이 들어올 때 마다 사전 렌더링을 진행 함
- 정적 사이트 생성(SSG)
  - 빌드 타임에 미리 페이지를 사전 렌더링 해 둠
- 증분 정적 재생성(ISR)
  - SSG 페이지 일정 시간마다 재생성

## Page Router의 단점

- 페이지별 레이아웃 설정이 번거롭다.
- 데이터 페칭이 페이지 컴포넌트에 집중된다.
- 불필요한 컴포넌트들(인터랙션이 불필요한 컴포넌트들)도 JS Bundle(하이드레이션을 위한 자바스크립트 번들)에 포함된다.
