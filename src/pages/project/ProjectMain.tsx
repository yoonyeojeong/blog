import React, { useState, useEffect } from "react";
import "./css/ProjectMain.css";

function ProjectMain() {
  const API_KEY =
    "test_381cc05b96e9ee7a1875549818bf3685bd2f4d3940406a80165bcfd6df0b2afbc650abfc9d0f6a57bc6b7bdf91c32093";
  const today: Date = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() - 1).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [state, setState] = useState<boolean>(false);
  const [characterOcid, setCharacterOcid] = useState<string>("");
  const [urlString, setUrlString] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const [characterInfo, setCharacterInfo] = useState<any>(null); // 수정: 초기값을 null로 설정
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    if (urlString !== "") {
      getBasicInfo(characterOcid, formattedDate);
    }
  }, [urlString, characterOcid, formattedDate]);

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
      .catch((error) => console.error(error));
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
      .catch((error) => console.error(error));
  }

  function stateChange() {
    setButtonClicked(true);
    setState(!state);
  }

  return (
    <div className="ProjectMain" style={{ textAlign: "left" }}>
      <div>
        <span>닉네임 : </span>
        <input
          type="text"
          onChange={(event) => setCharacterName(event.target.value)}
        />
      </div>
      <br />
      <div>
        <span>날짜 : </span>
        <input type="date" max={formattedDate} defaultValue={formattedDate} />
      </div>
      <br />
      <div>
        <button onClick={stateChange}>조회하기</button>
      </div>
      <br />
      <div>
        결과: {characterInfo ? JSON.stringify(characterInfo) : "로딩 중..."}
      </div>
    </div>
  );
}

export default ProjectMain;
