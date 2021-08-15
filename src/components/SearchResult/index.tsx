import { Container, Card } from "./styles";
import { BookType } from "../../types/Book";
import Link from "next/link";

interface SearchResultProps {
  data: BookType[];
}

export function SearchResult({ data }: SearchResultProps) {
  return (
    <Container>
      {data?.map((book) => (
        <Card key={book.id}>
          <Link href={`books/${book.id}`}>
            <a>
              <img
                src={
                  book.volumeInfo?.imageLinks?.thumbnail
                    ? book.volumeInfo?.imageLinks?.thumbnail
                    : "noImage"
                }
                alt={book.volumeInfo.title}
              />
              <h2>{book.volumeInfo.title}</h2>
              <h3>{`by ${book.volumeInfo.authors}`}</h3>
            </a>
          </Link>
        </Card>
      ))}
    </Container>
  );
}
