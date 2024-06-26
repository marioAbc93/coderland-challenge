import { useDispatch } from "react-redux";
import { addEvent } from "../../models/redux/tasks";
import { ModalContainer, ModalContent, Row } from "./styled";
import { ButtonComponent } from "../bet-container/styled";
import { ExitIcon } from "../../assets/icons";
import Button from "../custom-button";
import { useModal } from "../../models/context/useModal";

export default function Modal() {
  const dispatch = useDispatch();
  const { open, setOpen, name, price, selection } = useModal();

  const handleConfirm = () => {
    if (selection) {
      dispatch(addEvent(selection));
      setOpen(false);
    }
  };

  return (
    <ModalContainer open={open}>
      <ButtonComponent
        style={{ position: "absolute", right: 10, top: 5, marginBottom: 5 }}
        onClick={() => setOpen(false)}
      >
        {ExitIcon}
      </ButtonComponent>
      <ModalContent>
        Seguro que deseas agregar a {name} con una cuota de {price}
        <Row>
          <Button color="secondary" onClick={handleConfirm} description="Si" />
          <Button
            color="primary"
            onClick={() => setOpen(false)}
            description="No"
          />
        </Row>
      </ModalContent>
    </ModalContainer>
  );
}
