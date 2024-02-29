import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  HyperStatPreset,
  MyComponentProps,
} from "../../../../../functions/DTO/CharacterInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import { setShowHyperStatModal } from "../../../../../store/actions";

function HyperStatModal({ info }: MyComponentProps) {
  const dispatch = useDispatch();
  const showHyperStatModal = useSelector(
    (state: RootState) => state.showHyperStatModal
  );
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  useEffect(() => {
    if (info && info.hyper_stat) {
      setSelectedTab(parseInt(info.hyper_stat.use_preset_no));
    }
  }, [info]);

  const CloseModal = () => {
    setSelectedTab(parseInt(info.hyper_stat.use_preset_no));
    dispatch(setShowHyperStatModal(false));
  };

  const tabInfo = [
    {
      index: 1,
      label: 1,
      preset: info.hyper_stat.hyper_stat_preset_1,
      remainPoint: info.hyper_stat.hyper_stat_preset_1_remain_point,
    },
    {
      index: 2,
      label: 2,
      preset: info.hyper_stat.hyper_stat_preset_2,
      remainPoint: info.hyper_stat.hyper_stat_preset_2_remain_point,
    },
    {
      index: 3,
      label: 3,
      preset: info.hyper_stat.hyper_stat_preset_3,
      remainPoint: info.hyper_stat.hyper_stat_preset_3_remain_point,
    },
  ];

  const ViewStat = (name: string, hyperPreset: HyperStatPreset[]) => {
    let stat = hyperPreset.find((stat: any) => stat.stat_type === name);
    let statType = stat ? stat.stat_type : "";
    let statLevel = stat ? stat.stat_level : 0;
    let statIncrease = stat ? stat.stat_increase : "";

    return (
      <tr title={statIncrease}>
        <td
          style={{
            width: "75%",
            backgroundColor: "rgb(134,147,159)",
            color: "white",
            border: "none",
            borderTopLeftRadius: name === "STR" ? "4px" : "0",
            borderBottomLeftRadius:
              name === "일반 몬스터 공격 시 데미지 증가" ? "4px" : "0",
          }}
        >
          {statType}
        </td>
        <td
          style={{
            width: "15%",
            textAlign: "right",
            backgroundColor: "rgb(134,147,159)",
            color: "white",
            border: "none",
          }}
        >
          Lv.
        </td>
        <td
          style={{
            width: "10%",
            textAlign: "right",
            backgroundColor: "rgb(134,147,159)",
            color: "white",
            border: "none",
            borderTopRightRadius: name === "STR" ? "4px" : "0",
            borderBottomRightRadius:
              name === "일반 몬스터 공격 시 데미지 증가" ? "4px" : "0",
          }}
        >
          <strong>{statLevel}</strong>
        </td>
      </tr>
    );
  };
  const SelectedPreset = () => {
    const hyperPreset: HyperStatPreset[] = tabInfo[selectedTab - 1].preset;
    return (
      <>
        {ViewStat("STR", hyperPreset)}
        {ViewStat("DEX", hyperPreset)}
        {ViewStat("INT", hyperPreset)}
        {ViewStat("LUK", hyperPreset)}
        {ViewStat("HP", hyperPreset)}
        {ViewStat("DF/TF/PP", hyperPreset)}
        {ViewStat("크리티컬 확률", hyperPreset)}
        {ViewStat("크리티컬 데미지", hyperPreset)}
        {ViewStat("방어율 무시", hyperPreset)}
        {ViewStat("데미지", hyperPreset)}
        {ViewStat("보스 몬스터 공격 시 데미지 증가", hyperPreset)}
        {ViewStat("상태 이상 내성", hyperPreset)}
        {ViewStat("공격력/마력", hyperPreset)}
        {ViewStat("획득 경험치", hyperPreset)}
        {ViewStat("아케인포스", hyperPreset)}
        {ViewStat("일반 몬스터 공격 시 데미지 증가", hyperPreset)}
      </>
    );
  };
  return (
    <Modal show={showHyperStatModal} onHide={CloseModal} dataBsTheme="dark">
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "rgba(61,66,71,0.95)",
          border: "none",
        }}
      >
        <strong style={{ color: "rgb(219,249,1)" }}> HYPER STAT</strong>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "rgba(61,66,71,0.95)" }}>
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
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(51,56,61)",
              width: "200px",
              height: "24px",
              color: "white",
              fontSize: "15px",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "12px",
            }}
          >
            <strong>POINT</strong>{" "}
            <span>{tabInfo[selectedTab - 1].remainPoint}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default HyperStatModal;
