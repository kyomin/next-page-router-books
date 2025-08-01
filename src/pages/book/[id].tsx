import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    // 동적 경로에 대해 미리 사전 정적 렌더링할 경로를 명시한다.
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // true는 명시한 것 외의 param 값으로 들어오면 초기는 SSR로 렌더링 후, Static하게 저장한다.
    // SSR 계산 중에는 props(여기서 book 데이터)가 없는 상태의 페이지를 우선 보여준다.
    fallback: true,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchBook(Number(id));

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // fallback 상태에 있을 때에도 기본 메타 태그 설정을 한다.
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Kyomin Books</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="Kyomin Books" />
          <meta
            property="og:description"
            content="Kyomin Books에 등록된 도서들을 만나보세요"
          />
        </Head>
        <div>로딩 중입니다...</div>
      </>
    );
  }

  if (!book) {
    return "문제가 발생했습니다. 다시 시도하세요!";
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        {/* Cover Image */}
        <div
          className={style.coverImgContainer}
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
        >
          <img src={coverImgUrl} />
        </div>
        {/* Title */}
        <div className={style.title}>{title}</div>
        {/* Sub Title */}
        <div className={style.subTitle}>{subTitle}</div>
        {/* Author */}
        <div className={style.author}>
          {author} | {publisher}
        </div>
        {/* Description */}
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
