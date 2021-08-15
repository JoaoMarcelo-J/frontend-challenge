import { Container } from "./styles";
import Link from "next/link";
import Image from "next/image";

export function ReviewVideos() {
  return (
    <Container>
      <div>
        <div>
          <h3>Reviews of The Days</h3>
          <Link href="/">
            <a>All Video</a>
          </Link>
        </div>
        <Link href="https://www.youtube.com/watch?v=vBzBgewl4ac">
          <a>
            <Image width={335} height={181} src="/assets/thumb1.png" />
          </a>
        </Link>
      </div>
    </Container>
  );
}
