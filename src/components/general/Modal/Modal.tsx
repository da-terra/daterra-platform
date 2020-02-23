import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Backdrop } from "./styled";

type ModalProps = {
  closeHref: string;
};

const Modal: React.FC<ModalProps> = ({ closeHref, children }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(closeHref);
  }, [closeHref, history]);

  return <Backdrop onClick={handleClick}>{children}</Backdrop>;
};

export default Modal;
