import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { NavigationBar } from "../components/Mobile/NavigationBar";
import {
  Container,
  ProfileImageContainer,
  OptionsContainer,
} from "../styles/profile";

import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function Profile() {
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  return (
    <>
      <Container>
        <Link href="/">
          <a>
            <BiArrowBack size="20" />
          </a>
        </Link>
        <div>
          <ProfileImageContainer>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="#2c2c2e" />
            </svg>
            <span>Change profile picute</span>
          </ProfileImageContainer>

          <OptionsContainer>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="User name" />

            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={colors.redTitle}
              onColor="#00173D"
            />
          </OptionsContainer>
        </div>
      </Container>
      <NavigationBar activeItem={3} />
    </>
  );
}
