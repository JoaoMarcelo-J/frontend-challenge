import styled from "styled-components";

export const Container = styled.section`
  div {
    margin-top: 8px;

    div {
      display: flex;
      justify-content: space-between;

      a {
        color: #4abdf1;
      }
    }

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.title};
    }

    img {
      margin-top: 16px;
    }
  }
`;
