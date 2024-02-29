import React from "react";
import { Modal } from "react-bootstrap";
import { MyComponentProps } from "../../../../../functions/DTO/CharacterInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import { setShowAbilityModal } from "../../../../../store/actions";

function AbilityModal({ info }: MyComponentProps) {
  const dispatch = useDispatch();
  const showAbilityModal = useSelector(
    (state: RootState) => state.showAbilityModal
  );

  return (
    <Modal
      show={showAbilityModal}
      onHide={() => dispatch(setShowAbilityModal(false))}
    >
      Ability Stat
    </Modal>
  );
}

export default AbilityModal;
