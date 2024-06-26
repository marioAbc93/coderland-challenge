import { Container } from "./styled";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <Container data-testid="container">
      <div>{children}</div>
    </Container>
  );
}
