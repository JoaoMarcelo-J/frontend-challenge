import { useEffect, useState } from "react";
import { Head } from "next/document";
import Link from "next/link";

import { Container, Content, Greeatings, Heading } from "../styles/home";
import { NavigationBar } from "../components/NavigationBar";
import { SearchInput } from "../components/SearchInput";
import { BooksSlide } from "../components/BooksSlide";
import { CurrentlyReading } from "../components/CurrentlyReading";
import { ReviewVideos } from "../components/ReviewVideos";
import { api } from "../services/api";
import { SearchResult } from "../components/SearchResult";
import { BookType } from "../types/Book";

export default function Home() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBooks();
  }, [search]);

  async function getBooks() {
    if (search) {
      const res = await api.get(`volumes?q=${search}`);

      setBooks(res.data.items);
      console.log(res.data.items);
    }
  }

  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>

      <Container>
        <SearchInput search={search} setSearch={setSearch} />

        {search ? (
          <SearchResult data={books} />
        ) : (
          <Content>
            <Greeatings>
              <h1>
                Hi, <span>Fotontech</span>👋
              </h1>
            </Greeatings>

            <section>
              <Heading>
                <h2>Discover new book</h2>
                <Link href="/search">
                  <a>More</a>
                </Link>
              </Heading>

              <BooksSlide />
            </section>
            <section>
              <Heading>
                <h2>Currently reading</h2>
                <Link href="/">
                  <a>All</a>
                </Link>
              </Heading>

              <CurrentlyReading />
            </section>

            <ReviewVideos />
          </Content>
        )}

        <NavigationBar activeItem={1} />
      </Container>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return{
//     paths: [],
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async () => {

//   return {
//     props: {
//     }
//   }
// }
