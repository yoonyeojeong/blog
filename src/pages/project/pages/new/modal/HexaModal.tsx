import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { MyComponentProps } from "../../../../../functions/DTO/CharacterInfo";
import { RootState } from "../../../../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { setShowHexaModal } from "../../../../../store/actions";
import { HexaCoreEquipment } from "../../../../../functions/DTO/CharacterInfo";
import ErdaFragment from "./ErdaFragment.json";
import Erda from "./Erda.json";
import { AddComma } from "./AddComma";
// JSON 파일로 불러온 조각 개수 정보를 위한 인터페이스
interface FragmentDataType {
  [key: string]: {
    total: number;
    spended: { [level: string]: number };
  };
}
// JSON 파일로 불러온 솔 에르다 개수 정보를 위한 인터페이스
interface ErdaDataType {
  [key: string]: {
    total: number;
    spended: { [level: string]: number };
  };
}

function HexaModal({ info }: MyComponentProps) {
  // Modal을 열고 닫기 위한 상태 값 정의
  // Redux를 통해 가져옴
  const showHexaModal = useSelector((state: RootState) => state.showHexaModal);
  // 조각과 솔에르다 데이터 관리를 위한 상태 선언
  // 위에서 정의해준 인터페이스 타입으로 선언해줌
  const [fragmentData, setFragmentData] = useState<FragmentDataType>({});
  const [erdaData, setErdaData] = useState<ErdaDataType>({});
  // 데이터 Load여부를 판단하기 위한 상태 선언
  // 데이터가 로드되기 전에 Rendering되는 경우
  // 값이 제대로 출력되지 않을 수 있어 데이터 로드 로직을 넣어줌
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  // 헥사코어 정보를 따로 관리하기 위한 변수 선언
  const hexaCoreEquipmentList: HexaCoreEquipment[] =
    info.character_hexa_core_equipment;
  // 조각과 솔에르다 총 사용량을 계산하기 위한 상태 선언
  // 공용코어를 제외한 경우의 상태도 별도로 선언
  const [sumOfErda, setSumOfErda] = useState<number>(0);
  const [sumOfFragment, setSumOfFragment] = useState<number>(0);
  const [sumOfErdaExceptCommonCore, setSumOfErdaExceptCommonCore] =
    useState<number>(0);
  const [sumOfFragmentExceptCommonCore, setSumOfFragmentExceptCommonCore] =
    useState<number>(0);
  // 사용한 조각과 솔에르다를 확인하기 위한 상태 선언
  // 마찬가지로 공용코어를 제외한 경우도 별도로 선언
  const [erda, setErda] = useState<number>(0);
  const [erdaExceptCommon, setErdaExceptCommon] = useState<number>(0);
  const [fragment, setFragment] = useState<number>(0);
  const [fragmentExceptCommon, setFragmentExceptCommon] = useState<number>(0);
  // 코어의 개수를 정의
  // 나중에 추가될 경우를 대비하여 상수로 정의해줌
  const numberOfCores = {
    skill: 1,
    mastery: 2,
    reinforced: 4,
    common: 1,
  };

  // JSON 데이터 로드를 위한 useEffect
  // 데이터 셋팅이 끝나고 나면 dataLoaded를 true로 설정하여
  // 데이터 셋팅이 완료되었음을 확인함
  useEffect(() => {
    setFragmentData(ErdaFragment);
    setErdaData(Erda);
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      setErda(
        numberOfCores.skill * Erda["스킬 코어"].total +
          numberOfCores.mastery * Erda["마스터리 코어"].total +
          numberOfCores.reinforced * Erda["강화 코어"].total +
          numberOfCores.common * Erda["공용 코어"].total
      );
      setErdaExceptCommon(
        numberOfCores.skill * Erda["스킬 코어"].total +
          numberOfCores.mastery * Erda["마스터리 코어"].total +
          numberOfCores.reinforced * Erda["강화 코어"].total
      );
      setFragment(
        numberOfCores.skill * ErdaFragment["스킬 코어"].total +
          numberOfCores.mastery * ErdaFragment["마스터리 코어"].total +
          numberOfCores.reinforced * ErdaFragment["강화 코어"].total +
          numberOfCores.common * ErdaFragment["공용 코어"].total
      );
      setFragmentExceptCommon(
        numberOfCores.skill * ErdaFragment["스킬 코어"].total +
          numberOfCores.mastery * ErdaFragment["마스터리 코어"].total +
          numberOfCores.reinforced * ErdaFragment["강화 코어"].total
      );
      setSumOfErda(SumOfTotalErda(hexaCoreEquipmentList, false));
      setSumOfErdaExceptCommonCore(SumOfTotalErda(hexaCoreEquipmentList, true));
      setSumOfFragment(SumOfTotalFragment(hexaCoreEquipmentList, false));
      setSumOfFragmentExceptCommonCore(
        SumOfTotalFragment(hexaCoreEquipmentList, true)
      );
    }
  }, [info, hexaCoreEquipmentList, dataLoaded]);

  const dispatch = useDispatch();
  const handleCloseHexa = () => dispatch(setShowHexaModal(false));

  const TotalFragment = (hexaCoreType: string) => {
    let result = fragmentData[hexaCoreType]["total"];
    return result;
  };

  const TotalSpendedFragment = (
    level: number,
    hexaCoreType: string,
    exceptCommon: boolean
  ) => {
    if (!dataLoaded) return 0;

    return Array.from({ length: level }, (_, i) => {
      const currentLevel = (i + 1).toString();
      const isCommonCore = hexaCoreType === "공용 코어";

      return exceptCommon && isCommonCore
        ? 0
        : fragmentData[hexaCoreType]["spended"][currentLevel] || 0;
    }).reduce((sum, value) => sum + value, 0);
  };

  const TotalErda = (hexaCoreType: string) => {
    let result = erdaData[hexaCoreType]["total"];
    return result;
  };

  const TotalSpendedErda = (
    level: number,
    hexaCoreType: string,
    exceptCommon: boolean
  ) => {
    if (!dataLoaded) return 0;

    return Array.from({ length: level }, (_, i) => {
      const currentLevel = (i + 1).toString();
      const isCommonCore = hexaCoreType === "공용 코어";

      return exceptCommon && isCommonCore
        ? 0
        : erdaData[hexaCoreType]["spended"][currentLevel] || 0;
    }).reduce((sum, value) => sum + value, 0);
  };

  const SumOfTotalFragment = (
    hexaCoreEquipmentList: HexaCoreEquipment[] | null | undefined,
    exceptCommon: boolean
  ) => {
    if (!hexaCoreEquipmentList) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < hexaCoreEquipmentList.length; i++) {
      sum += TotalSpendedFragment(
        hexaCoreEquipmentList[i].hexa_core_level,
        hexaCoreEquipmentList[i].hexa_core_type,
        exceptCommon
      );
    }
    return sum;
  };

  const SumOfTotalErda = (
    hexaCoreEquipmentList: HexaCoreEquipment[] | null | undefined,
    exceptCommon: boolean
  ) => {
    if (!hexaCoreEquipmentList) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < hexaCoreEquipmentList.length; i++) {
      sum += TotalSpendedErda(
        hexaCoreEquipmentList[i].hexa_core_level,
        hexaCoreEquipmentList[i].hexa_core_type,
        exceptCommon
      );
    }
    return sum;
  };
  const HexaInfo = () => {
    if (!dataLoaded) {
      return (
        <tr>
          <td colSpan={5}>데이터 로딩 중...</td>
        </tr>
      );
    }
    if (parseInt(info.character_class_level) < 6) {
      return (
        <tr>
          <td colSpan={5}>6차전직부터 해야겠어요 ^^;;</td>
        </tr>
      );
    } else {
      return (
        <>
          {info.character_hexa_core_equipment.map((hexaCore, index) => (
            <tr key={index}>
              <td
                style={
                  hexaCore.hexa_core_level === 30
                    ? { color: "blue", fontWeight: "bold" }
                    : {}
                }
              >
                <strong>{hexaCore.hexa_core_name}</strong>
              </td>
              <td
                style={
                  hexaCore.hexa_core_level === 30
                    ? { color: "blue", fontWeight: "bold" }
                    : {}
                }
              >
                {hexaCore.hexa_core_level}
              </td>
              <td
                style={
                  hexaCore.hexa_core_level === 30
                    ? { color: "blue", fontWeight: "bold" }
                    : {}
                }
              >
                {hexaCore.hexa_core_type}
              </td>
              <td
                style={
                  hexaCore.hexa_core_level === 30
                    ? { color: "blue", fontWeight: "bold" }
                    : {}
                }
              >
                {AddComma(
                  TotalSpendedErda(
                    hexaCore.hexa_core_level,
                    hexaCore.hexa_core_type,
                    false
                  )
                )}
                /{AddComma(TotalErda(hexaCore.hexa_core_type))}
              </td>
              <td
                style={
                  hexaCore.hexa_core_level === 30
                    ? { color: "blue", fontWeight: "bold" }
                    : {}
                }
              >
                {AddComma(
                  TotalSpendedFragment(
                    hexaCore.hexa_core_level,
                    hexaCore.hexa_core_type,
                    false
                  )
                )}
                /{AddComma(TotalFragment(hexaCore.hexa_core_type))}
              </td>
            </tr>
          ))}
        </>
      );
    }
  };

  const LeftAmount = () => {
    if (parseInt(info.character_class_level) === 6) {
      return (
        <>
          <tr>
            <td>
              <strong>전체 진행도</strong>
            </td>
            <td></td>
            <td></td>
            <td>
              {AddComma(sumOfErda)}/{AddComma(erda)}
            </td>
            <td>
              {AddComma(sumOfFragment)}/{AddComma(fragment)}
            </td>
          </tr>

          <tr>
            <td></td>
            <td colSpan={2}>
              <strong>공용코어 제외</strong>
            </td>
            <td>
              {AddComma(sumOfErdaExceptCommonCore)}/{AddComma(erdaExceptCommon)}
            </td>
            <td>
              {AddComma(sumOfFragmentExceptCommonCore)}/
              {AddComma(fragmentExceptCommon)}
            </td>
          </tr>
          <tr>
            <td>
              <strong>남은 수량</strong>
            </td>
            <td></td>
            <td></td>
            <td>{AddComma(erda - sumOfErda)}</td>
            <td>{AddComma(fragment - sumOfFragment)}</td>
          </tr>

          <tr>
            <td></td>
            <td colSpan={2}>
              <strong>공용코어 제외</strong>
            </td>

            <td>{AddComma(erdaExceptCommon - sumOfErdaExceptCommonCore)}</td>
            <td>
              {AddComma(fragmentExceptCommon - sumOfFragmentExceptCommonCore)}
            </td>
          </tr>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Modal show={showHexaModal} onHide={handleCloseHexa}>
      <Modal.Header closeButton>
        <Modal.Title>{info.character_name}의 헥사강화</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered={false} hover={true}>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Level</th>
              <th>Class</th>
              <th>Sol Erda</th>
              <th>Fragment</th>
            </tr>
          </thead>
          <tbody>
            {HexaInfo()}
            {LeftAmount()}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseHexa}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HexaModal;
