import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { MyComponentProps } from "../../../../../functions/DTO/CharacterInfo";
import { setShowStatModal } from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";

function StatModal({ info }: MyComponentProps) {
  const showStatModal = useSelector((state: RootState) => state.showStatModal);
  const dispatch = useDispatch();

  const rankingItem = Array.isArray(info.unionRanking.ranking)
    ? info.unionRanking.ranking[0]
    : null;
  const characterName = rankingItem ? rankingItem.character_name : "";
  const addComma = (exp: number) => {
    let returnString = exp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const handleCloseStat = () => dispatch(setShowStatModal(false));
  const handleShowStat = () => dispatch(setShowStatModal(true));

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

  const FindMainAndSubStat = (
    STR: string,
    DEX: string,
    INT: string,
    LUK: string,
    HP: string
  ) => {
    let stat = [0, 0, 0];
    let str = parseInt(STR);
    let dex = parseInt(DEX);
    let int = parseInt(INT);
    let luk = parseInt(LUK);
    let hp = parseInt(HP);
    let statsArray = [str, dex, int, luk].sort((a, b) => b - a);

    if (info.character_class === "데몬어벤져") {
      stat = [hp, str, 0];
    } else if (
      info.character_class === "제논" ||
      info.character_class === "듀얼블레이더" ||
      info.character_class === "섀도어" ||
      info.character_class === "카데나"
    ) {
      stat[0] = statsArray[0];
      stat[1] = statsArray[1];
      stat[2] = statsArray[2];
    } else {
      stat[0] = statsArray[0];
      stat[1] = statsArray[1];
      stat[2] = 0;
    }

    return stat;
  };
  function determineMainCharacter(searched: string, union: string) {
    if (searched === union) {
      return <></>;
    } else {
      return (
        <tr>
          <td>
            <strong>본캐 </strong>
          </td>
          <td>{union}</td>
        </tr>
      );
    }
  }
  const determineSecondSubStat = (stat: number) => {
    if (stat === 0) {
      return "해당없음";
    } else {
      return addComma(stat);
    }
  };
  return (
    <Modal show={showStatModal} onHide={handleCloseStat}>
      <Modal.Header closeButton>
        <Modal.Title>{info.character_name}의 스탯</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered={false} hover={true}>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {determineMainCharacter(info.character_name, characterName)}
            <tr>
              <td>
                <strong>전투력 </strong>
              </td>
              <td>
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
                <span>
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
              </td>
            </tr>
            <tr>
              <td>
                <strong>경험치%</strong>
              </td>
              <td>{info.character_exp_rate}%</td>
            </tr>
            <tr>
              <td>
                <strong>경험치</strong>
              </td>
              <td>{addComma(info.character_exp)}</td>
            </tr>
            <tr>
              <td>
                <strong>스탯공격력</strong>
              </td>
              <td>
                {addComma(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "최대 스탯공격력"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                ) || ""}{" "}
                (
                {AddUnitToBattlePower(
                  parseInt(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "최대 스탯공격력"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )
                )}
                )
              </td>
            </tr>
            <tr>
              <td>
                <strong>데미지</strong>
              </td>
              <td>
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
              <td>
                <strong>보공</strong>
              </td>
              <td>
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
              <td>
                <strong>방어율 무시</strong>
              </td>
              <td>
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "방어율 무시"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td>
                <strong>크리데미지</strong>
              </td>
              <td>
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
              <td>
                <strong>일몹데미지</strong>
              </td>
              <td>
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
              <td>
                <strong>스타포스</strong>
              </td>
              <td>
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
              <td>
                <strong>주스탯</strong>
              </td>
              <td>
                {addComma(
                  FindMainAndSubStat(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "STR"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "DEX"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "INT"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "LUK"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "HP"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )[0]
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>부스탯</strong>
              </td>
              <td>
                {addComma(
                  FindMainAndSubStat(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "STR"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "DEX"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "INT"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "LUK"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "HP"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )[1]
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>부스탯2</strong>
              </td>
              <td>
                {determineSecondSubStat(
                  FindMainAndSubStat(
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "STR"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "DEX"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "INT"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "LUK"
                      ) || { stat_value: 0 }
                    ).stat_value as string,
                    (
                      info.final_stat?.find(
                        (stat: any) => stat.stat_name === "HP"
                      ) || { stat_value: 0 }
                    ).stat_value as string
                  )[2]
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>아이템드롭률</strong>
              </td>
              <td>
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "아이템 드롭률"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td>
                <strong>메소획득량</strong>
              </td>
              <td>
                {
                  (
                    info.final_stat?.find(
                      (stat: any) => stat.stat_name === "메소 획득량"
                    ) || { stat_value: 0 }
                  ).stat_value as string
                }
                %
              </td>
            </tr>
            <tr>
              <td>
                <strong>임시 row</strong>
              </td>
              <td>임시 row</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseStat}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StatModal;
