import React, { FC, ReactNode } from "react";
import { Modal, Button } from "react-bootstrap";

interface PopupProps {
  open: boolean;
  setPopup: React.Dispatch<React.SetStateAction<{ open: boolean }>>;
  message: string;
  title: string;
  callback?: () => void;
}

const Popup: FC<PopupProps> = ({
  open,
  setPopup,
  message,
  title,
  callback,
}) => {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
