import React, { useState } from "react";
import { MyComponentProps } from "../../../../functions/DTO/CharacterInfo";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import NoResult from "../../files/noresult.png";
import GoGo from "../../files/gogo.gif";
import OverFlow from "../../files/overflow.gif";
import StatModal from "./modal/StatModal";
import { setShowStatModal, setShowHexaModal } from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers";
import HexaModal from "./modal/HexaModal";

const CharacterCard: React.FC<MyComponentProps> = ({ info }) => {
  const showStatModal = useSelector((state: RootState) => state.showStatModal);
  const showHexaModal = useSelector((state: RootState) => state.showHexaModal);
  const dispatch = useDispatch();

  const handleCloseStat = () => dispatch(setShowStatModal(false));
  const handleShowStat = () => dispatch(setShowStatModal(true));

  const handleCloseHexa = () => dispatch(setShowHexaModal(false));
  const handleShowHexa = () => dispatch(setShowHexaModal(true));

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

  const renderCharacterInfo = () => {
    if (info.character_level > 0) {
      return (
        <div className="col-5 text-center">
          <Card style={{ width: "250px", height: "500px" }}>
            <CardBody className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center">
                <CardImg
                  src={info.character_image}
                  alt="Card Image"
                  style={{ width: "100%" }}
                />
              </div>
              <CardTitle>{info.character_name}</CardTitle>
              <CardSubtitle>{info.world_name}</CardSubtitle>
              <CardText>
                <span style={NoMargin()}>{info.character_class}</span>
                <br />
                <span style={NoMargin()}>Lv. {info.character_level}</span>
                <br />
                {existGuild(info.character_guild_name)}
              </CardText>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="success" onClick={handleShowStat}>
                  스탯
                </Button>
                <Button variant="success" onClick={handleShowHexa}>
                  헥사
                </Button>
              </div>
              {/*스탯 영역*/}
              <StatModal info={info} />
              {/*헥사 영역*/}
              <HexaModal info={info} />
            </CardBody>
          </Card>
        </div>
      );
    } else if (info.character_level === 0) {
      return instruction("first");
    } else if (info.ocid == "TooManyRequests") {
      return instruction("manyreq");
    } else {
      return instruction("notfound");
    }
  };

  return (
    <div className="ProjectMain" style={{ textAlign: "left" }}>
      {renderCharacterInfo()}
    </div>
  );
};
export default CharacterCard;
