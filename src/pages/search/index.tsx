import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";

import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import Head from "next/head";

import { BookData } from "@/types";

export default function Page() {
  // 빌드 타임에서 불러올 수 없는 동적 데이터는
  // 그냥 클라이언트에 위임해 처리한다.
  // 해당 동적 컨텐츠 외 나머지는 정적 렌더링한다.
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);

    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>Kyomin Books - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="Kyomin Books - 검색 결과" />
        <meta
          property="og:description"
          content="Kyomin Books에 등록된 도서들을 만나보세요"
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
