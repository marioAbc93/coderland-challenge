import { NotificationContainer } from "./styled";
type NotificationProps = {
  open?: boolean;
  message?: string;
  severity?: string;
};

export default function Notification({
  open,
  message,
  severity,
}: NotificationProps) {
  return (
    <>
      {open && severity ? (
        <NotificationContainer data-testid="notification" severity={severity}>
          <p>{message}</p>
        </NotificationContainer>
      ) : null}
    </>
  );
}
