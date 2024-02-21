import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { MyComponentProps } from "../../../../../functions/DTO/CharacterInfo";
import { RootState } from "../../../../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { setShowHexaModal } from "../../../../../store/actions";
import { HexaCoreEquipment } from "../../../../../functions/DTO/CharacterInfo";

function HexaModal({ info }: MyComponentProps) {
  const showHexaModal = useSelector((state: RootState) => state.showHexaModal);
  const dispatch = useDispatch();
  const handleCloseHexa = () => dispatch(setShowHexaModal(false));
  const handleShowHexa = () => dispatch(setShowHexaModal(true));

  const HexaInfo = () => {
    return (
      <>
        {info.character_hexa_core_equipment.map((hexaCore, index) => (
          <tr key={index}>
            <td>
              <strong>{hexaCore.hexa_core_name}</strong>
            </td>
            <td>{hexaCore.hexa_core_level}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <Modal show={showHexaModal} onHide={handleCloseHexa}>
      <Modal.Header closeButton>
        <Modal.Title>{info.character_name}의 헥사강화</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered={false}>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>{HexaInfo()}</tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseHexa}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HexaModal;
