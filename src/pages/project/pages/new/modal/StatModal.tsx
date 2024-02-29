import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { MyComponentProps } from "../../../../../functions/DTO/CharacterInfo";
import {
  setShowHyperStatModal,
  setShowAbilityModal,
} from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import HyperStatModal from "./HyperStatModal";
import AbilityModal from "./AbilityModal";

function StatModal({ info }: MyComponentProps) {
  const dispatch = useDispatch();
  const showStatModal = useSelector((state: RootState) => state.showStatModal);
  const showHyperStatModal = useSelector(
    (state: RootState) => state.showHyperStatModal
  );
  const showAbilityModal = useSelector(
    (state: RootState) => state.showAbilityModal
  );
  const addComma = (exp: number) => {
    let returnString = exp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  useEffect(() => {
    setShowHyperStatModal(false);
    setShowAbilityModal(false);
  }, []);

  const AddUnitToBattlePower = (battlePower: number) => {
    let oek = Math.floor(battlePower / 100000000);
    let man = Math.floor((battlePower / 10000) % 10000);
    let result = "";
    if (oek > 0) {
      let stringman = man.toString().padStart(4, "0");
      result = `${oek}.${stringman}억`;
    } else if (oek === 0 && man > 0) {
      result = `${man}만`;
    } else {
      result = battlePower.toString();
    }
    return result;
  };

  const OpenHyperStatModal = () => {
    if (info.character_level > 139) {
      dispatch(setShowHyperStatModal(true));
    } else {
      alert("140레벨 미만의 캐릭터는 하이퍼스탯이 없어용 ^^;;;");
    }
  };

  const OpenAbilityModal = () => {
    if (info.character_level > 49) {
      dispatch(setShowAbilityModal(true));
    } else {
      alert("50레벨 미만의 캐릭터는 어빌리티가 없어용 ^^;;;");
    }
  };
  return showStatModal ? (
    <div
      className={"stat-modal show"}
      style={{ width: "600px", margin: "auto" }}
    >
      <div className="stat-modal-body">
        <Table bordered={false} hover={true}>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "rgb(62,96,118)",
                  color: "white",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                  textAlign: "left",
                }}
              >
                전투력
              </th>
              <th
                colSpan={3}
                style={{
                  backgroundColor: "rgb(62,96,118)",
                  color: "rgb(255,250,210)",
                  borderBottomRightRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              >
                <span>
                  {addComma(
                    parseInt(
                      (
                        info.final_stat?.find(
                          (stat: any) => stat.stat_name === "전투력"
                        ) || { stat_value: 0 }
                      ).stat_value as string
                    )
                  ) || ""}
                </span>{" "}
                <span style={{ marginRight: "15%" }}>
                  (
                  {AddUnitToBattlePower(
                    parseInt(
                      (
                        info.final_stat?.find(
                          (stat: any) => stat.stat_name === "전투력"
                        ) || { stat_value: 0 }
                      ).stat_value as string
                    )
                  )}
                  )
                </span>
              </th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  borderTopLeftRadius: "5px",
                  border: "none",
                  width: "15%",
                }}
              >
                HP
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                  width: "35%",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "HP"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                  width: "15%",
                }}
              >
                MP
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  borderTopRightRadius: "5px",
                  border: "none",
                  width: "35%",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "MP"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                STR
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "STR"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                DEX
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "DEX"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  borderBottomLeftRadius: "5px",
                  border: "none",
                }}
              >
                INT
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "INT"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  border: "none",
                }}
              >
                LUK
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(134,148,160)",
                  color: "white",
                  borderBottomRightRadius: "5px",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "LUK"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
            </tr>

            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderTopLeftRadius: "5px",
                  border: "none",
                  width: "15%",
                  borderTop: "1px solid white",
                }}
              >
                스공
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                  width: "35%",
                  borderTop: "1px solid white",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "최대 스탯공격력"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                  width: "15%",
                  borderTop: "1px solid white",
                }}
              >
                데미지
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderTopRightRadius: "5px",
                  border: "none",
                  width: "35%",
                  borderTop: "1px solid white",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                최종뎀
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "최종 데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                보공
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "보스 몬스터 데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                방무
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "방어율 무시"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                일몹뎀
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "일반 몬스터 데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                공격력
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "공격력"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                크확
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "크리티컬 확률"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                마력
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "마력"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                크뎀
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "크리티컬 데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                쿨감
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) =>
                          stat.stat_name === "재사용 대기시간 감소 (초)"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
                초 /{" "}
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) =>
                          stat.stat_name === "재사용 대기시간 감소 (%)"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                벞지
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "버프 지속시간"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                재사용
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "재사용 대기시간 미적용"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                내성무시
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "속성 내성 무시"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderBottomLeftRadius: "5px",
                  border: "none",
                }}
              >
                상추뎀
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "상태이상 추가 데미지"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                숙련도
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderBottomRightRadius: "5px",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "무기 숙련도"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>

            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderTopLeftRadius: "5px",
                  border: "none",
                  width: "15%",
                  borderTop: "1px solid white",
                }}
              >
                메획
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                  width: "35%",
                  borderTop: "1px solid white",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "메소 획득량"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                  width: "15%",
                  borderTop: "1px solid white",
                }}
              >
                스타포스
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderTopRightRadius: "5px",
                  border: "none",
                  width: "35%",
                  borderTop: "1px solid white",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "스타포스"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                드랍
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "아이템 드롭률"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                아케인
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "아케인포스"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}
              </td>
            </tr>

            <tr>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderBottomLeftRadius: "5px",
                  border: "none",
                }}
              >
                추경
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "추가 경험치 획득"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
              <td
                style={{
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  border: "none",
                }}
              >
                어센틱
              </td>
              <td
                style={{
                  textAlign: "right",
                  backgroundColor: "rgb(108,120,134)",
                  color: "white",
                  borderBottomRightRadius: "5px",
                  border: "none",
                }}
              >
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "어센틱포스"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
              </td>
            </tr>

            <tr>
              <td
                colSpan={2}
                style={{ textAlign: "left", border: "none", paddingLeft: "0" }}
              >
                <Button variant="secondary" onClick={OpenHyperStatModal}>
                  하이퍼스탯
                </Button>
              </td>
              <td
                colSpan={2}
                style={{
                  textAlign: "right",
                  border: "none",
                  paddingRight: "0",
                }}
              >
                <Button variant="secondary" onClick={OpenAbilityModal}>
                  어빌리티(미구현)
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <HyperStatModal info={info} />
      <AbilityModal info={info} />
    </div>
  ) : null;
}

export default StatModal;
