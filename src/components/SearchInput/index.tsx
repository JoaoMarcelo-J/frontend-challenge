import { Container, SearchInputComponent } from "./styles";
import Image from "next/image";

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

export function SearchInput({ search, setSearch }: SearchInputProps) {
  return (
    <Container>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInputComponent
        placeholder="Search book"
        maxLength={255}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}
