import React, { useEffect, useState } from "react";
import getTotalMapleInfo from "../../../../functions/getTotalMapleInfo";
import {
  CharacterInfo,
  initialValue,
} from "../../../../functions/DTO/CharacterInfo";
import GoGo from "../../files/gogo.gif";
import NoResult from "../../files/noresult.png";
import CharacterCard from "./CharacterCard";

function NewMethod() {
  const [info, setInfo] = useState<CharacterInfo>(initialValue);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [characterName, setCharacterName] = useState<string>("");

  const fetchData = async () => {
    try {
      const result = await getTotalMapleInfo(characterName);
      console.log("result : ", result);
      setInfo(result);
      if (result.character_level === undefined) {
        console.log("이거 탐");
      }
    } catch (error) {
      console.error("Error fetching character info:", error);
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    stateChange(); // 폼이 제출되면 stateChange 함수 호출
  };

  function stateChange() {
    setButtonClicked(!buttonClicked);
    fetchData();
  }

  return (
    <div className="ProjectMain" style={{ textAlign: "left" }}>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3" style={{ minWidth: "300px" }}>
          <span className="input-group-text" id="basic-addon1">
            닉네임
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="닉네임을 입력하세요"
            id="username"
            name="username"
            aria-label="Username"
            onChange={(event) => setCharacterName(event.target.value)}
            style={{ maxWidth: "200px" }}
          />
          <button className="btn btn-secondary" type="submit">
            조회하기
          </button>
        </div>
      </form>

      <CharacterCard info={info} />
      <br />
    </div>
  );
}

export default NewMethod;
