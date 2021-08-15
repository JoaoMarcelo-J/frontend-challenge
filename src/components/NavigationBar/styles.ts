import styled from "styled-components";

export const Container = styled.nav`
  background: ${(props) => props.theme.colors.white};
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 9px 52px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      flex-flow: column;

      img {
        width: 16px;
        margin-bottom: 10px;
      }
      span {
        font-size: 10px;
      }
    }
  }
`;

interface NavLinkProps {
  isActive: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  flex-flow: column;
  transition: color 0.3s;

  color: ${({ isActive }) =>
    isActive ? (props) => props.theme.colors.isActiveNavBar : "#c4c4c4"};

  &:hover {
    color: ${(props) => props.theme.colors.isActiveNavBar};
  }
`;
