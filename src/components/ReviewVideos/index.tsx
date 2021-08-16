import { Container } from "./styles";
import Link from "next/link";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export function ReviewVideos() {
  const { width } = useWindowDimensions();
  const isMobile = width > 480 ? false : true;

  return (
    <Container>
      <div>
        <div>
          <h3>Reviews of The Days</h3>

          {isMobile && (
            <Link href="/">
              <a>All Video</a>
            </Link>
          )}
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
