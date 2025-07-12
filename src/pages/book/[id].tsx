import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const book = await fetchBook(Number(id));

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return null;
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
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
  );
}
