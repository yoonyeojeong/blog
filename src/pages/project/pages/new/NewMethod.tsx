import React, { useEffect, useState } from "react";
import getTotalMapleInfo from "../../../../functions/getTotalMapleInfo";
import {
  CharacterInfo,
  initialValue,
} from "../../../../functions/DTO/CharacterInfo";
import GoGo from "../../files/gogo.gif";
import NoResult from "../../files/noresult.png";
import CharacterCard from "./CharacterCard";
import { useDispatch } from "react-redux";
import {
  setAbilityPreset,
  setEquipmentPreset,
} from "../../../../store/actions";

function NewMethod() {
  const [info, setInfo] = useState<CharacterInfo>(initialValue);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [characterName, setCharacterName] = useState<string>("");
  const dispatch = useDispatch();

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

    dispatch(setEquipmentPreset(255));
    dispatch(setAbilityPreset(255));
    stateChange(); // 폼이 제출되면 stateChange 함수 호출
  };

  function stateChange() {
    setButtonClicked(!buttonClicked);
    fetchData();
  }

  return (
    <div className="ProjectMain">
      <form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
        <div
          className="input-group mb-3 d-flex justify-content-center"
          style={{ minWidth: "300px" }}
        >
          <span className="input-group-text" id="basic-addon1">
            닉네임
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="닉네임을 입력하세요"
            id="maplename"
            name="maplename"
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
