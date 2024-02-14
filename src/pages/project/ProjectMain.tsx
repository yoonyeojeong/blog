import React, { useState, useEffect } from "react";
import "./css/ProjectMain.css";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { format, subDays } from "date-fns";
import EXP from "./files/exp.json";

function ProjectMain() {
  //const API_KEY = "test_381cc05b96e9ee7a1875549818bf3685bd2f4d3940406a80165bcfd6df0b2afbc650abfc9d0f6a57bc6b7bdf91c32093";
  const API_KEY = process.env.REACT_APP_NEXON_API_KEY;
  const TEST_OCID = process.env.REACT_APP_NEXON_TEST_OCID;
  const [selectedDate, setSelectedDate] = useState<Date>(
    subDays(new Date(), 1)
  );
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const day = String(selectedDate.getDate() - 1).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [state, setState] = useState<boolean>(false);
  const [characterOcid, setCharacterOcid] = useState<string>("");
  const [urlString, setUrlString] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const [characterInfo, setCharacterInfo] = useState<any>(null); // 수정: 초기값을 null로 설정
  const [hexaInfo, setHexaInfo] = useState<any>(null);
  const [statInfo, setStatInfo] = useState<any>(null);
  const [unionInfo, setUnionInfo] = useState<any>(null);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    if (urlString !== "") {
      getBasicInfo(characterOcid, format(selectedDate, "yyyy-MM-dd"));
      getHexaInfo(characterOcid, format(selectedDate, "yyyy-MM-dd"));
      getStatInfo(characterOcid, format(selectedDate, "yyyy-MM-dd"));
      if (characterInfo != null) {
        getUnionInfo(
          characterOcid,
          format(selectedDate, "yyyy-MM-dd"),
          characterInfo.world_name
        );
      }
    }
  }, [urlString, characterOcid, buttonClicked]);

  useEffect(() => {
    if (buttonClicked && characterName !== "") {
      setCharacterCode();
      setButtonClicked(false);
    }
  }, [buttonClicked, characterName]);

  function setCharacterCode() {
    const url = `https://open.api.nexon.com/maplestory/v1/id?character_name=${characterName}`;

    setUrlString(url);

    fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCharacterOcid(data.ocid))
      .catch((error) => {
        console.error(error);
      });
  }

  function getBasicInfo(characterOcid: string, date: string) {
    const url = `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${characterOcid}&date=${date}`;

    fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCharacterInfo(data)) // 수정: JSON.stringify 사용 제거
      .catch((error) => {
        console.error(error);
      });
  }

  function getHexaInfo(characterOcid: string, date: string) {
    const url = `https://open.api.nexon.com/maplestory/v1/character/hexamatrix?ocid=${characterOcid}&date=${date}`;

    fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setHexaInfo(data)) // 수정: JSON.stringify 사용 제거
      .catch((error) => console.error(error));
  }

  function getStatInfo(characterOcid: string, date: string) {
    const url = `https://open.api.nexon.com/maplestory/v1/character/stat?ocid=${characterOcid}&date=${date}`;

    fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setStatInfo(data)) // 수정: JSON.stringify 사용 제거
      .catch((error) => console.error(error));
  }

  function getUnionInfo(characterOcid: string, date: string, world: string) {
    let worldUrlString = encodeURI(world);
    const url = `https://open.api.nexon.com/maplestory/v1/ranking/union?date=${date}&world_name=${worldUrlString}&ocid=${characterOcid}&page=1`;

    fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setUnionInfo(data))
      .catch((error) => console.error(error));
  }

  function stateChange() {
    setButtonClicked(true);
    setState(!state);
  }

  const addComma = (exp: number) => {
    let returnString = exp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const levelData = EXP.levels;

  function findExp(level: string): number | undefined {
    let numLev = parseInt(level);

    let expRequired: number | undefined = levelData.find(
      (data) => data.level === numLev
    )?.experience_required;
    return expRequired || 1;
  }

  function determineMainCharacter(searched: string, union: string): string {
    if (searched == union) {
      return "(본캐)";
    } else {
      return `(본캐 : ${union})`;
    }
  }

  return (
    <div
      className="ProjectMain"
      style={{ textAlign: "left", paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className="input-group mb-3" style={{ minWidth: "300px" }}>
        <span className="input-group-text" id="basic-addon1">
          기준일
        </span>
        <DatePicker
          className="form-control"
          dateFormat="yyyy-MM-dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          maxDate={subDays(new Date(), 1)} // maxDate 이후 날짜 선택 불가
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date != null ? date : new Date())}
        />
      </div>
      <div className="input-group mb-3" style={{ minWidth: "300px" }}>
        <span className="input-group-text" id="basic-addon1">
          닉네임
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="닉네임을 입력하세요"
          aria-label="Username"
          aria-des
          onChange={(event) => setCharacterName(event.target.value)}
          style={{ maxWidth: "200px" }}
        />
        <button className="btn btn-secondary" onClick={stateChange}>
          조회하기
        </button>
      </div>
      <br />
      {characterInfo && statInfo && unionInfo ? (
        <div>
          <img src={characterInfo.character_image} alt="" />
          <br />
          {characterInfo.world_name} / {characterInfo.character_class}&nbsp;
          {determineMainCharacter(
            characterInfo.character_name,
            unionInfo.ranking[0].character_name
          )}
          <br />
          레벨 : {characterInfo.character_level}
          <br />
          전투력 :{" "}
          {addComma(
            parseInt(
              statInfo.final_stat?.find(
                (stat: any) => stat.stat_name === "전투력"
              ).stat_value
            )
          ) || ""}
          <br />
          경험치 : {addComma(parseInt(characterInfo.character_exp))}{" "}
          {`(${(
            (parseInt(characterInfo.character_exp) /
              (findExp(characterInfo.character_level) || 1)) *
            100
          ).toFixed(3)}%)`}
          <br />
          길드 : {characterInfo.character_guild_name}
        </div>
      ) : (
        "닉네임을 입력하고 조회하기 버튼을 누르세요"
      )}
      <br />
      {hexaInfo &&
        hexaInfo.character_hexa_core_equipment &&
        hexaInfo.character_hexa_core_equipment.map((core: any, index: any) => (
          <div key={index}>
            {`${core.hexa_core_name} (${core.hexa_core_level}레벨)`}
          </div>
        ))}
    </div>
  );
}

export default ProjectMain;
