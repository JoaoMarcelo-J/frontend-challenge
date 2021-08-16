import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  width: 100vw;

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-top: 13px;
  }

  nav {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    li {
      cursor: pointer;
      font-size: 1.25rem;
      list-style-type: none;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(70%);
      }
    }
  }
`;
