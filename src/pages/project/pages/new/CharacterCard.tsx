import React, { useEffect, useState } from "react";
import { MyComponentProps } from "../../../../functions/DTO/CharacterInfo";
import { CardImg, Button, Table } from "react-bootstrap";
import NoResult from "../../files/noresult.png";
import GoGo from "../../files/gogo.gif";
import OverFlow from "../../files/overflow.gif";
import StatModal from "./modal/StatModal";
import {
  setShowStatModal,
  setShowHexaModal,
  setShowEquipmentModal,
  setShowHyperStatModal,
  setShowAbilityModal,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers";
import HexaModal from "./modal/HexaModal";
import EquipmentModal from "./modal/EquipmentModal";
import styled from "@emotion/styled";
import { AddComma } from "./modal/AddComma";
import "./CharacterCard.css";

const CharacterCard: React.FC<MyComponentProps> = ({ info }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("stat");

  const handleShowModal = (buttonType: string) => {
    setActiveButton(buttonType);

    dispatch(setShowStatModal(buttonType === "stat"));
    dispatch(setShowHexaModal(buttonType === "hexa"));
    dispatch(setShowEquipmentModal(buttonType === "equipment"));
  };

  useEffect(() => {
    dispatch(setShowStatModal(true));
    dispatch(setShowHexaModal(false));
    dispatch(setShowEquipmentModal(false));
    dispatch(setShowHyperStatModal(false));
    dispatch(setShowAbilityModal(false));
    setActiveButton("stat");
  }, [info]);

  const NoMargin = () => {
    return { padding: "0", margin: "0" };
  };

  const existGuild = (guild: string) => {
    if (guild === null || guild === "" || guild === undefined) {
      return <></>;
    } else {
      return <span style={NoMargin()}>길드 : {guild}</span>;
    }
  };
  function determineMainCharacter(searched: string, union: string) {
    if (searched === union) {
      return (
        <>
          <td style={{ margin: "5px" }}></td>
          <td style={{ margin: "5px" }}></td>
        </>
      );
    } else {
      return (
        <>
          <td
            style={{
              margin: "5px",
              width: "80px",
              textAlign: "left",
              verticalAlign: "middle",
              paddingRight: "0",
            }}
          >
            <LeftTag>본캐</LeftTag>
          </td>
          <td
            style={{
              margin: "5px",
              width: "80px",
              textAlign: "right",
              verticalAlign: "middle",
              paddingLeft: "0",
            }}
          >
            <RightTag>{union}</RightTag>
          </td>
        </>
      );
    }
  }
  const instruction = (type: string) => {
    let result;
    switch (type) {
      case "first":
        result = (
          <>
            닉네임을 입력하고 조회하기 버튼을 누르세요.
            <br />
            영문 닉네임은 대소문자를 구분합니다.
            <br />
            <br />
            <img src={GoGo} alt="" />
          </>
        );
        break;
      case "notfound":
        result = (
          <>
            <img src={NoResult} alt="존재하지 않는 캐릭터" />
            <br />
            존재하지 않는 캐릭터 입니다. <br /> <br />
            2023년 12월 21일 이후 접속기록이 있는 <br />
            캐릭터만 조회가능합니다.
          </>
        );
        break;
      case "manyreq":
        result = (
          <>
            금일 조회 가능한 횟수를 초과하였습니다.
            <br />
            내일 다시 시도해주세요!
            <br />
            <br />
            <img src={OverFlow} alt="" />
          </>
        );
        break;
      default:
        result = (
          <>
            닉네임을 입력하고 조회하기 버튼을 누르세요.
            <br />
            영문 닉네임은 대소문자를 구분합니다.
            <br />
            <br />
            <img src={GoGo} alt="" />
          </>
        );
        break;
    }

    return result;
  };
  const NickNameTag = styled.div`
    width: 100px;
    height: 20px;
    background-color: rgb(60, 194, 216);
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    color: white;
    display: inline-block;
  `;

  const ClassTag = styled.div`
    width: 160px;
    height: 24px;
    background-color: rgb(152, 162, 172);
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    border-radius: 12px;
    color: white;
    display: inline-block;
  `;

  const LevelTag = styled.div`
    width: 100px;
    height: 25px;
    background-color: rgb(152, 162, 172);
    font-size: 14px;
    text-align: center;
    vertical-align: top;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    display: inline-block;
  `;

  const LeftTag = styled.div`
    width: 75px;
    height: 24px;
    background-color: rgb(202, 206, 208);
    font-size: 14px;
    text-align: left;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    padding-left: 10px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    color: white;
    display: inline-block;
  `;

  const RightTag = styled.div`
    width: 95px;
    height: 24px;
    background-color: rgb(202, 206, 208);
    font-size: 14px;
    text-align: right;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    padding-right: 10px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    color: rgb(102, 102, 102);
    display: inline-block;
  `;

  const renderCharacterInfo = () => {
    if (info.character_level > 0) {
      return (
        <>
          <Table
            responsive
            bordered={false}
            style={{ width: "600px", margin: "auto" }}
          >
            <tbody className="CharacterCard">
              <tr style={{ height: "40px" }}>
                <td
                  colSpan={2}
                  style={{
                    margin: "5px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ClassTag>{info.character_class}</ClassTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    padding: "0",
                    textAlign: "center",
                    backgroundColor: "rgb(235,235,235)",
                  }}
                >
                  <LevelTag>
                    Lv. <strong>{info.character_level}</strong>
                  </LevelTag>
                </td>
                {info && info.unionRanking && info.unionRanking.ranking[0]
                  ? determineMainCharacter(
                      info.character_name,
                      info.unionRanking.ranking[0].character_name
                    )
                  : ""}
              </tr>
              <tr style={{ height: "90px" }}>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
                <td
                  rowSpan={3}
                  style={{
                    margin: "5px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(235,235,235)",
                    padding: "0",
                    verticalAlign: "bottom",
                  }}
                >
                  <CardImg
                    src={info.character_image}
                    alt="Card Image"
                    style={{ display: "inline-block", width: "150px" }}
                  />
                </td>
                <td style={{ margin: "5px" }}></td>
                <td style={{ margin: "5px" }}></td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>유니온</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>
                    {info && info.unionRanking && info.unionRanking.ranking[0]
                      ? AddComma(info.unionRanking.ranking[0].union_level)
                      : ""}
                  </RightTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>경험치</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>{info.character_exp_rate}%</RightTag>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>무릉도장</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>{info.dojang_best_floor}</RightTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>길드</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>
                    {info.character_guild_name != null
                      ? info.character_guild_name
                      : "없음"}
                  </RightTag>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>인기도</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>{AddComma(info.popularity)}</RightTag>
                </td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    border: "none",
                    backgroundColor: "rgb(235,235,235)",
                    verticalAlign: "middle",
                  }}
                >
                  <NickNameTag>{info.character_name}</NickNameTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "left",
                    verticalAlign: "middle",
                    paddingRight: "0",
                  }}
                >
                  <LeftTag>월드</LeftTag>
                </td>
                <td
                  style={{
                    margin: "5px",
                    width: "80px",
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingLeft: "0",
                  }}
                >
                  <RightTag>{info.world_name}</RightTag>
                </td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant={activeButton === "stat" ? "dark" : "secondary"}
                      onClick={() => handleShowModal("stat")}
                    >
                      스탯
                    </Button>

                    <Button
                      variant={
                        activeButton === "equipment" ? "dark" : "secondary"
                      }
                      onClick={() => handleShowModal("equipment")}
                    >
                      장비
                    </Button>

                    <Button
                      variant={activeButton === "hexa" ? "dark" : "secondary"}
                      onClick={() => handleShowModal("hexa")}
                    >
                      헥사
                    </Button>
                    <Button variant="secondary">임시</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>

          {/*스탯 영역*/}
          <StatModal info={info} />
          {/*헥사 영역*/}
          <HexaModal info={info} />
          {/*장비 영역*/}
          <EquipmentModal info={info} />
        </>
      );
    } else if (info.character_level === 0) {
      return instruction("first");
    } else if (info.ocid == "TooManyRequests") {
      return instruction("manyreq");
    } else {
      return instruction("notfound");
    }
  };

  return <div>{renderCharacterInfo()}</div>;
};
export default CharacterCard;
