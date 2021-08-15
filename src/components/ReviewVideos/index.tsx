import { Container } from "./styles";
import Link from "next/link";

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
            <img src="/assets/thumb1.png" />
          </a>
        </Link>
      </div>
    </Container>
  );
}
