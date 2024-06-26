import { ViewContainerComponent } from "./styled";

export default function ViewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewContainerComponent>{children}</ViewContainerComponent>;
}
