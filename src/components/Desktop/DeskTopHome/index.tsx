import { useSearchResult } from "../../../hooks/useSearchResult";
import { BooksSlide } from "../../BooksSlide";
import { CurrentlyReading } from "../../CurrentlyReading";
import { ReviewVideos } from "../../ReviewVideos";
import { SearchResult } from "../../SearchResult";
import { Header } from "../Header";
import { Container } from "./styles";

export function DeskTopHome() {
  const { search } = useSearchResult();
  return (
    <>
      <Header />
      <Container>
        {search ? (
          <SearchResult />
        ) : (
          <>
            <BooksSlide />
            <CurrentlyReading />
            <ReviewVideos />
          </>
        )}
      </Container>
    </>
  );
}
