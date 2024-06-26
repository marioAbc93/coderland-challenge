import { GridContainerComponent } from "./styled";

export default function GridContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GridContainerComponent>{children}</GridContainerComponent>;
}
