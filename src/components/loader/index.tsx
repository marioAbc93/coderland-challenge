import { LoaderComponent, LoaderContainer } from "./styled";

export default function Loader() {
  return (
    <LoaderContainer data-testid="loader-container">
      <LoaderComponent data-testid="loader-component" />
      Loading..
    </LoaderContainer>
  );
}
