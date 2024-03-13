import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AbilityInfo,
  AbilityPreset,
  MyComponentProps,
} from "../../../../../functions/DTO/CharacterInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import { setShowAbilityModal } from "../../../../../store/actions";
import { AddComma } from "./AddComma";

function AbilityModal({ info }: MyComponentProps) {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  useEffect(() => {
    if (info && info.ability.preset_no) {
      setSelectedTab(info.ability.preset_no);
    }
  }, [info]);
  const showAbilityModal = useSelector(
    (state: RootState) => state.showAbilityModal
  );

  const CloseModal = () => {
    if (info && info.ability.preset_no) {
      setSelectedTab(info.ability.preset_no);
    } else {
      setSelectedTab(255);
    }
    dispatch(setShowAbilityModal(false));
  };

  const tabInfo = [
    {
      index: 1,
      label: 1,
      preset: info.ability.ability_preset_1,
    },
    {
      index: 2,
      label: 2,
      preset: info.ability.ability_preset_2,
    },
    {
      index: 3,
      label: 3,
      preset: info.ability.ability_preset_3,
    },
  ];

  const ViewAbilityDetail = (ability: AbilityInfo) => {
    let backgroundColor = "chartreuse";
    let color = "white";
    let textShadow =
      "-0.7px 0 black, 0 0.7px black,0.7px 0 black,0 -0.7px black";
    if (ability.ability_grade === "레어") {
      backgroundColor = "rgb(85,170,255)";
      textShadow = "-0.7px 0 black, 0 0.7px black,0.7px 0 black,0 -0.7px black";
      color = "white";
    } else if (ability.ability_grade === "에픽") {
      backgroundColor = "rgb(204,102,255)";
      textShadow = "-0.7px 0 black, 0 0.7px black,0.7px 0 black,0 -0.7px black";
      color = "white";
    } else if (ability.ability_grade === "유니크") {
      backgroundColor = "rgb(255,204,0)";
      textShadow = "-0.7px 0 black, 0 0.7px black,0.7px 0 black,0 -0.7px black";
      color = "white";
    } else if (ability.ability_grade === "레전드리") {
      backgroundColor = "rgb(0,255,0)";
      textShadow = "-0.7px 0 black, 0 0.7px black,0.7px 0 black,0 -0.7px black";
      color = "white";
    }
    return (
      <tr style={{ border: "5px solid rgb(61,66,71)" }}>
        <td
          style={{
            backgroundColor: backgroundColor,
            color: color,
            textShadow: textShadow,
            borderRadius: "13px",
            border: "none",
          }}
        >
          {ability.ability_value}
        </td>
      </tr>
    );
  };

  const SelectedPreset = () => {
    let abilityPreset: AbilityPreset;
    if (selectedTab === 1 || selectedTab === 2 || selectedTab === 3) {
      abilityPreset = tabInfo[selectedTab - 1].preset;
    } else {
      abilityPreset = {
        ability_preset_grade: info.ability.ability_grade,
        ability_info: info.ability.ability_info,
      };
    }
    return (
      <>
        {ViewAbilityDetail(abilityPreset.ability_info[0])}
        {ViewAbilityDetail(abilityPreset.ability_info[1])}
        {ViewAbilityDetail(abilityPreset.ability_info[2])}
        <tr style={{ border: "5px solid rgb(61,66,71)" }}>
          <td
            style={{
              borderRadius: "13px",
              border: "none",
              backgroundColor: "rgb(111,116,121)",
              color: "white",
            }}
          >
            <span>보유 명성치</span>{" "}
            <span>{AddComma(info.ability.remain_fame)}</span>
          </td>
        </tr>
      </>
    );
  };

  return (
    <Modal show={showAbilityModal} onHide={CloseModal}>
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "rgb(61,66,71)",
          border: "none",
        }}
      >
        <strong style={{ color: "rgb(219,249,1)" }}> ABILITY</strong>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "rgb(61,66,71)" }}>
        <Table bordered={false} hover={true}>
          <tbody>{SelectedPreset()}</tbody>
        </Table>
        <div
          style={{
            margin: "auto",
            gap: "20%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant={selectedTab === 1 ? "dark" : "secondary"}
            onClick={() => handleTabClick(1)}
          >
            1
          </Button>
          <Button
            variant={selectedTab === 2 ? "dark" : "secondary"}
            onClick={() => handleTabClick(2)}
          >
            2
          </Button>
          <Button
            variant={selectedTab === 3 ? "dark" : "secondary"}
            onClick={() => handleTabClick(3)}
          >
            3
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AbilityModal;
