import styled from "styled-components";

export const Container = styled.form`
  height: 3rem;
  display: flex;
  margin: 3.5rem 1.5rem 2.2rem;
  padding-right: 10px;
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 0.6rem;
  font-weight: 400;
  line-height: 3rem;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.12);
  img {
    width: 16px;
    margin: 1rem;
  }

  @media (min-width: 1024px) {
    width: 400px;
    margin: 35px 20px 25px 300px;
  }
`;

export const SearchInputComponent = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 0.6rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
