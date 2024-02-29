import React, { useState } from "react";
import {
  ItemEquipment,
  MyComponentProps,
} from "../../../../../functions/DTO/CharacterInfo";
import {
  Button,
  Col,
  Container,
  Modal,
  Nav,
  NavItem,
  NavLink,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import { setShowEquipmentModal } from "../../../../../store/actions";

function EquipmentModal({ info }: MyComponentProps) {
  const showEquipmentModal = useSelector(
    (state: RootState) => state.showEquipmentModal
  );
  const dispatch = useDispatch();
  const handleCloseEquipment = () => {
    dispatch(setShowEquipmentModal(false));
    setSelectedTab(0);
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // 탭을 클릭할 때 호출되는 함수
  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
    // 여기에 각 탭을 클릭했을 때의 동작을 추가할 수 있습니다.
    // 예를 들어, 아래에서 값을 변경하는 함수를 호출할 수 있습니다.
    // changeValuesBasedOnTab(tabNumber);
  };

  // 탭을 클릭했을 때 변경할 값들을 설정하는 함수
  const changeValuesBasedOnTab = (tabNumber: number) => {
    // 각 탭에 따라 값을 변경하는 로직을 작성합니다.
    // 예를 들어, setState를 사용하여 값을 변경하거나, API 호출을 통해 값을 가져올 수 있습니다.
    // 여기에 로직을 추가하세요.
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "레어":
        return "cornflowerblue";
      case "에픽":
        return "Violet";
      case "유니크":
        return "yellow";
      case "레전드리":
        return "chartreuse";
      default:
        return "rgba(0,0,0,0)";
    }
  };
  const getButtonVariant = (tabNumber: number) =>
    selectedTab === tabNumber ? "dark" : "light";

  const itemStyle = (itemName: string, itemPreset: ItemEquipment[]) => {
    const index = findIndex(itemName, itemPreset);
    let gradeColor = "";
    if (index >= 0 && index < itemPreset.length) {
      gradeColor = getGradeColor(itemPreset[index].potential_option_grade);
    } else {
      gradeColor = getGradeColor("");
    }

    return {
      height: "90px",
      width: "90px",
      margin: "2px",
      padding: "4px",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: "5px",
      border: `2px solid ${gradeColor}`,
    };
  };

  const itemStyleBlank = {
    height: "90px",
    width: "90px",
    margin: "2px",
    padding: "4px",
    borderRadius: "5px",
    border: `2px solid rgba(255,255,255,0)`,
  };

  const findIndex = (itemName: string, itemPreset: ItemEquipment[]) => {
    let items: ItemEquipment[] = itemPreset;

    let indexOfItem = items.findIndex(
      (item) => item.item_equipment_slot === itemName
    );
    return indexOfItem;
  };

  const itemImage = (itemName: string, itemPreset: ItemEquipment[]) => {
    const index = findIndex(itemName, itemPreset);

    if (index >= 0 && index < itemPreset.length) {
      let icon = itemPreset[index].item_icon;
      return <img src={icon} alt={itemName} />;
    }

    return <></>;
  };
  const tabInfo = [
    {
      index: 0,
      label: "현재프리셋",
      preset: info.item_equipment.item_equipment,
    },
    {
      index: 1,
      label: "Preset 1",
      preset: info.item_equipment.item_equipment_preset_1,
    },
    {
      index: 2,
      label: "Preset 2",
      preset: info.item_equipment.item_equipment_preset_2,
    },
    {
      index: 3,
      label: "Preset 3",
      preset: info.item_equipment.item_equipment_preset_3,
    },
  ];

  const Column = (itemName: string, itemPreset: ItemEquipment[]) => {
    return (
      <>
        <Col
          style={itemStyle(itemName, itemPreset)}
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setIsHovered(false);
          }}
        >
          {itemImage(itemName, itemPreset)}
        </Col>
      </>
    );
  };

  const SelectedPreset = () => {
    const itemPreset = tabInfo[selectedTab].preset;
    return (
      <Container fluid style={{ textAlign: "center" }}>
        <Row className="grid-row">
          {Column("반지4", itemPreset)}
          <Col style={itemStyleBlank}> </Col>
          {Column("모자", itemPreset)}
          <Col style={itemStyleBlank}> </Col>
          {Column("엠블렘", itemPreset)}
        </Row>
        <Row className="grid-row">
          {Column("반지3", itemPreset)}
          {Column("펜던트2", itemPreset)}
          {Column("얼굴장식", itemPreset)}
          <Col style={itemStyleBlank}> </Col>
          {Column("뱃지", itemPreset)}
        </Row>
        <Row className="grid-row">
          {Column("반지2", itemPreset)}
          {Column("펜던트", itemPreset)}
          {Column("눈장식", itemPreset)}
          {Column("귀고리", itemPreset)}
          {Column("훈장", itemPreset)}
        </Row>
        <Row className="grid-row">
          {Column("반지1", itemPreset)}
          {Column("무기", itemPreset)}
          {Column("상의", itemPreset)}
          {Column("어깨장식", itemPreset)}
          {Column("보조무기", itemPreset)}
        </Row>
        <Row className="grid-row">
          {Column("포켓 아이템", itemPreset)}
          {Column("벨트", itemPreset)}
          {Column("하의", itemPreset)}
          {Column("장갑", itemPreset)}
          {Column("망토", itemPreset)}
        </Row>
        <Row className="grid-row">
          <Col style={itemStyleBlank}> </Col>
          <Col style={itemStyleBlank}> </Col>
          {Column("신발", itemPreset)}
          <Col style={itemStyleBlank}> </Col>
          {Column("기계 심장", itemPreset)}
        </Row>
      </Container>
    );
  };

  return showEquipmentModal ? (
    <div
      className="equipment-modal show"
      style={{ width: "500px", margin: "auto" }}
    >
      <div className="equipment-modal-body">
        <Nav style={{ justifyContent: "space-between", marginBottom: "10px" }}>
          {tabInfo.map((tab) => (
            <NavItem key={tab.index}>
              <Button
                variant={getButtonVariant(tab.index)}
                onClick={() => handleTabClick(tab.index)}
              >
                {tab.label}
              </Button>
            </NavItem>
          ))}
        </Nav>
        <SelectedPreset />
      </div>
    </div>
  ) : null;
}

export default EquipmentModal;
