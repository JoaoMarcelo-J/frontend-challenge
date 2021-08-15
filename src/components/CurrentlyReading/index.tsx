import { BiBookBookmark } from "react-icons/bi";
import { Container, InfoCard } from "./styles";
import Image from "next/image";

export function CurrentlyReading() {
  return (
    <Container>
      <InfoCard>
        <Image width={91} height={136} src="/assets/book2.png" alt="book2" />
        <div>
          <h1>Originals</h1>
          <p>by Adam Grant</p>
          <div>
            <BiBookBookmark />
            <span>
              Chapter <span>2</span> From 9
            </span>
          </div>
        </div>
      </InfoCard>
    </Container>
  );
}
