import { useSearchResult } from "../../hooks/useSearchResult";
import { Container, SearchInputComponent } from "./styles";
import { CgClose } from "react-icons/cg";
import useDebounce from "../../hooks/useDebounce";
import { useState } from "react";

export function SearchInput() {
  const { setSearch, setMaxResults } = useSearchResult();
  const [displayValue, setDisplayValue] = useState("");
  const debouncedChange = useDebounce(setSearch, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
    setMaxResults(18);
  }

  return (
    <Container>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInputComponent
        placeholder="Search book"
        maxLength={255}
        value={displayValue}
        onChange={handleChange}
      />
      {displayValue && (
        <CgClose
          onClick={() => {
            setSearch("");
            setDisplayValue("");
          }}
          size="24"
        />
      )}
    </Container>
  );
}
