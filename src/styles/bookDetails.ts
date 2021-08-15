import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  height: 349px;

  div {
    background-color: ${(props) => props.theme.colors.circlebackground};
    height: 282px;
    border-radius: 0 0 140px 0;
    background-image: url("/assets/oval-1.svg"), url("/assets/oval-4.svg"),
      url("/assets/oval-2.svg"), url("/assets/oval-3.svg"),
      url("/assets/oval-5.svg");
    background-repeat: no-repeat;
    background-position: 125% -20%, 74% 95%, 72% 34%, 22% 53%, 11% 47%;
  }

  svg {
    margin-top: 62px;
    margin-left: 33px;
    font-weight: bold;
  }

  img {
    margin: 0px 111px 31px 130px;
  }
`;

export const ContainerContent = styled.section`
  width: 100%;
  max-width: 343px;

  margin: 0 auto;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.title};
    margin-bottom: 7px;

    strong {
      font-weight: 600;
    }
  }

  h3 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.redTitle};
  }

  p {
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 80%;
    margin-bottom: 120px;

    line-height: 24px;

    & + p {
      margin-top: 25px;
    }
  }
`;
