import React, { CSSProperties, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  ItemEquipment,
  ItemEquipmentProps,
} from "../../../../../functions/DTO/CharacterInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import { setShowItemModal } from "../../../../../store/actions";

function ItemCard({ item }: ItemEquipmentProps) {
  const showItemModal = useSelector((state: RootState) => state.showItemModal);
  const dispatch = useDispatch();
  const CloseModal = () => {
    dispatch(setShowItemModal(false));
  };

  const maxStarForce = (baseEquipmentLevel: number): number => {
    let result = 25;

    if (baseEquipmentLevel < 100) result = 5;
    else if (baseEquipmentLevel < 110) result = 8;
    else if (baseEquipmentLevel < 120) result = 10;
    else if (baseEquipmentLevel < 130) result = 15;
    else if (baseEquipmentLevel < 140) result = 20;

    return result;
  };
  useEffect(() => {
    console.log("item : ", item);
  }, [item]);

  const StarForce = (item: ItemEquipment) => {
    if (item.starforce === "0") {
      return <></>;
    }

    let max = maxStarForce(item.item_base_option.base_equipment_level);
    if (item.starforce_scroll_flag === "사용" && max > 15) {
      max = 15;
    }
    if (parseInt(item.starforce) > max) {
      max = parseInt(item.starforce);
    }
    if (item.item_name.includes("타일런트")) {
      max = 15;
    }

    let color = item.starforce_scroll_flag === "사용" ? "skyblue" : "yellow";
    const stars = Array(max)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % 5 === 0 ? " " : null}

          {index >= parseInt(item.starforce) ? (
            <span style={{ color: "grey" }}>★</span>
          ) : (
            <span style={{ color: color }}>★</span>
          )}
        </React.Fragment>
      ));

    const result = [];
    for (let i = 0; i < stars.length; i += 15) {
      result.push(
        <div key={i} style={{ fontSize: "14px" }}>
          {stars.slice(i, i + 15)}
        </div>
      );
    }

    return <>{result}</>;
  };

  const ItemNameLabel = (item: ItemEquipment) => {
    let itemName = item.item_name;
    let result = <>{itemName}</>;
    if (parseInt(item.scroll_upgrade) > 0) {
      result = (
        <>
          {itemName} (+{item.scroll_upgrade}) <br />{" "}
          {item.potential_option_grade !== null ? (
            <small>({item.potential_option_grade} 아이템)</small>
          ) : (
            <></>
          )}
        </>
      );
    }
    if (item.soul_name != null) {
      result = (
        <>
          <span style={{ color: "rgb(204,255,0)" }}>
            {item.soul_name.replace(/소울 적용.*$/, "").trim()}
          </span>
          <br /> {itemName} (+{item.scroll_upgrade}) <br />
          {item.potential_option_grade !== null ? (
            <small>({item.potential_option_grade} 아이템)</small>
          ) : (
            <></>
          )}
        </>
      );
    }
    if (item.special_ring_level > 0) {
      result = (
        <>
          {itemName} ({item.special_ring_level}레벨)
        </>
      );
    }
    return result;
  };
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "레어":
        return "cornflowerblue";
      case "에픽":
        return "Violet";
      case "유니크":
        return "yellow";
      case "레전드리":
        return "chartreuse";
      default:
        return "rgba(0,0,0,0)";
    }
  };

  const itemStyle = (item: ItemEquipment) => {
    let gradeColor = getGradeColor(item.potential_option_grade);

    return {
      height: "80px",
      width: "80px",
      margin: "10px",
      marginTop: "0",
      padding: "4px",
      backgroundColor: "rgb(211,211,211)",
      borderRadius: "5px",
      border: `3px solid ${gradeColor}`,
      verticalAlign: "middle",
      display: "flex",
    };
  };

  const renderOptionSpan = (value: number, color: string) => {
    return value > 0 ? <span style={{ color }}>+{value}</span> : <></>;
  };

  const calculateTotalAndColor = (
    base: number,
    add: number,
    etc: number,
    starforce: number
  ) => {
    const total = base + add + etc + starforce;
    const additional = add + etc + starforce;
    const color = total > base ? "rgb(90,218,218)" : "white";
    return { total, additional, color };
  };

  const ItemOptionView = (item: ItemEquipment) => {
    const addOptionColor = "rgb(204,255,0)";
    const etcOptionColor = "rgb(170,170,255)";
    const starforceOptionColor = "rgb(255,204,0)";

    // STR
    const {
      total: totalSTR,
      additional: additionalSTR,
      color: optionColorSTR,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.str),
      parseInt(item.item_add_option.str),
      parseInt(item.item_etc_option.str),
      parseInt(item.item_starforce_option.str)
    );

    const addSTRspan = renderOptionSpan(
      parseInt(item.item_add_option.str),
      addOptionColor
    );
    const etcSTRspan = renderOptionSpan(
      parseInt(item.item_etc_option.str),
      etcOptionColor
    );
    const starforceSTRspan = renderOptionSpan(
      parseInt(item.item_starforce_option.str),
      starforceOptionColor
    );

    // DEX
    const {
      total: totalDEX,
      additional: additionalDEX,
      color: optionColorDEX,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.dex),
      parseInt(item.item_add_option.dex),
      parseInt(item.item_etc_option.dex),
      parseInt(item.item_starforce_option.dex)
    );

    const addDEXspan = renderOptionSpan(
      parseInt(item.item_add_option.dex),
      addOptionColor
    );
    const etcDEXspan = renderOptionSpan(
      parseInt(item.item_etc_option.dex),
      etcOptionColor
    );
    const starforceDEXspan = renderOptionSpan(
      parseInt(item.item_starforce_option.dex),
      starforceOptionColor
    );

    // INT
    const {
      total: totalINT,
      additional: additionalINT,
      color: optionColorINT,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.int),
      parseInt(item.item_add_option.int),
      parseInt(item.item_etc_option.int),
      parseInt(item.item_starforce_option.int)
    );

    const addINTspan = renderOptionSpan(
      parseInt(item.item_add_option.int),
      addOptionColor
    );
    const etcINTspan = renderOptionSpan(
      parseInt(item.item_etc_option.int),
      etcOptionColor
    );
    const starforceINTspan = renderOptionSpan(
      parseInt(item.item_starforce_option.int),
      starforceOptionColor
    );

    // LUK
    const {
      total: totalLUK,
      additional: additionalLUK,
      color: optionColorLUK,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.luk),
      parseInt(item.item_add_option.luk),
      parseInt(item.item_etc_option.luk),
      parseInt(item.item_starforce_option.luk)
    );

    const addLUKspan = renderOptionSpan(
      parseInt(item.item_add_option.luk),
      addOptionColor
    );
    const etcLUKspan = renderOptionSpan(
      parseInt(item.item_etc_option.luk),
      etcOptionColor
    );
    const starforceLUKspan = renderOptionSpan(
      parseInt(item.item_starforce_option.luk),
      starforceOptionColor
    );

    // HP
    const {
      total: totalHP,
      additional: additionalHP,
      color: optionColorHP,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.max_hp),
      parseInt(item.item_add_option.max_hp),
      parseInt(item.item_etc_option.max_hp),
      parseInt(item.item_starforce_option.max_hp)
    );

    const addHPspan = renderOptionSpan(
      parseInt(item.item_add_option.max_hp),
      addOptionColor
    );
    const etcHPspan = renderOptionSpan(
      parseInt(item.item_etc_option.max_hp),
      etcOptionColor
    );
    const starforceHPspan = renderOptionSpan(
      parseInt(item.item_starforce_option.max_hp),
      starforceOptionColor
    );

    // MP
    const {
      total: totalMP,
      additional: additionalMP,
      color: optionColorMP,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.max_mp),
      parseInt(item.item_add_option.max_mp),
      parseInt(item.item_etc_option.max_mp),
      parseInt(item.item_starforce_option.max_mp)
    );

    const addMPspan = renderOptionSpan(
      parseInt(item.item_add_option.max_mp),
      addOptionColor
    );
    const etcMPspan = renderOptionSpan(
      parseInt(item.item_etc_option.max_mp),
      etcOptionColor
    );
    const starforceMPspan = renderOptionSpan(
      parseInt(item.item_starforce_option.max_mp),
      starforceOptionColor
    );

    // AD
    const {
      total: totalAD,
      additional: additionalAD,
      color: optionColorAD,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.attack_power),
      parseInt(item.item_add_option.attack_power),
      parseInt(item.item_etc_option.attack_power),
      parseInt(item.item_starforce_option.attack_power)
    );

    const addADspan = renderOptionSpan(
      parseInt(item.item_add_option.attack_power),
      addOptionColor
    );
    const etcADspan = renderOptionSpan(
      parseInt(item.item_etc_option.attack_power),
      etcOptionColor
    );
    const starforceADspan = renderOptionSpan(
      parseInt(item.item_starforce_option.attack_power),
      starforceOptionColor
    );

    // AP
    const {
      total: totalAP,
      additional: additionalAP,
      color: optionColorAP,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.magic_power),
      parseInt(item.item_add_option.magic_power),
      parseInt(item.item_etc_option.magic_power),
      parseInt(item.item_starforce_option.magic_power)
    );

    const addAPspan = renderOptionSpan(
      parseInt(item.item_add_option.magic_power),
      addOptionColor
    );
    const etcAPspan = renderOptionSpan(
      parseInt(item.item_etc_option.magic_power),
      etcOptionColor
    );
    const starforceAPspan = renderOptionSpan(
      parseInt(item.item_starforce_option.magic_power),
      starforceOptionColor
    );

    // All Stat
    const {
      total: totalAllStat,
      additional: additionalAllStat,
      color: optionColorAllStat,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.all_stat),
      parseInt(item.item_add_option.all_stat),
      0,
      0
    );

    const addALLspan =
      parseInt(item.item_add_option.all_stat) > 0 ? (
        <span style={{ color: addOptionColor }}>
          +{item.item_add_option.all_stat}%
        </span>
      ) : (
        <></>
      );

    // BOSS
    const {
      total: totalBoss,
      additional: additionalBoss,
      color: optionColorBoss,
    } = calculateTotalAndColor(
      parseInt(item.item_base_option.boss_damage),
      parseInt(item.item_add_option.boss_damage),
      0,
      0
    );

    const addBOSSspan =
      parseInt(item.item_add_option.boss_damage) > 0 ? (
        <span style={{ color: addOptionColor }}>
          +{item.item_add_option.boss_damage}%
        </span>
      ) : (
        <></>
      );

    return (
      <>
        {totalSTR > 0 && (
          <div
            key="strOption"
            style={{ fontWeight: additionalSTR > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorSTR }}> STR: +{totalSTR}</span>
            {additionalSTR > 0 ? (
              <>
                ({parseInt(item.item_base_option.str)}
                {addSTRspan}
                {etcSTRspan}
                {starforceSTRspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalDEX > 0 && (
          <div
            key="dexOption"
            style={{ fontWeight: additionalDEX > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorDEX }}> DEX: +{totalDEX}</span>
            {additionalDEX > 0 ? (
              <>
                ({parseInt(item.item_base_option.dex)}
                {addDEXspan}
                {etcDEXspan}
                {starforceDEXspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalINT > 0 && (
          <div
            key="intOption"
            style={{ fontWeight: additionalINT > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorINT }}> INT: +{totalINT}</span>
            {additionalINT > 0 ? (
              <>
                ({parseInt(item.item_base_option.int)}
                {addINTspan}
                {etcINTspan}
                {starforceINTspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalLUK > 0 && (
          <div
            key="lukOption"
            style={{ fontWeight: additionalLUK > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorLUK }}> LUK: +{totalLUK}</span>
            {additionalLUK > 0 ? (
              <>
                ({parseInt(item.item_base_option.luk)}
                {addLUKspan}
                {etcLUKspan}
                {starforceLUKspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalHP > 0 && (
          <div
            key="hpOption"
            style={{ fontWeight: additionalHP > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorHP }}>최대 HP: +{totalHP}</span>
            {additionalHP > 0 ? (
              <>
                ({parseInt(item.item_base_option.max_hp)}
                {addHPspan}
                {etcHPspan}
                {starforceHPspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalMP > 0 && (
          <div
            key="mpOption"
            style={{ fontWeight: additionalMP > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorMP }}>최대 MP: +{totalMP}</span>
            {additionalMP > 0 ? (
              <>
                ({parseInt(item.item_base_option.max_mp)}
                {addMPspan}
                {etcMPspan}
                {starforceMPspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalAD > 0 && (
          <div
            key="adOption"
            style={{ fontWeight: additionalAD > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorAD }}>공격력: +{totalAD}</span>
            {additionalAD > 0 ? (
              <>
                ({parseInt(item.item_base_option.attack_power)}
                {addADspan}
                {etcADspan}
                {starforceADspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalAP > 0 && (
          <div
            key="apOption"
            style={{ fontWeight: additionalAP > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorAP }}>마력: +{totalAP}</span>
            {additionalAP > 0 ? (
              <>
                ({parseInt(item.item_base_option.magic_power)}
                {addAPspan}
                {etcAPspan}
                {starforceAPspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalAllStat > 0 && (
          <div
            key="allOption"
            style={{ fontWeight: additionalAllStat > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorAllStat }}>
              올스탯: +{totalAllStat}%
            </span>{" "}
            {additionalAllStat > 0 ? (
              <>
                ({parseInt(item.item_base_option.all_stat)}%{addALLspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {totalBoss > 0 && (
          <div
            key="bossOption"
            style={{ fontWeight: additionalBoss > 0 ? "bold" : "" }}
          >
            <span style={{ color: optionColorBoss }}>
              보스 몬스터 공격 시 데미지: +{totalBoss}%
            </span>{" "}
            {additionalBoss > 0 ? (
              <>
                ({parseInt(item.item_base_option.boss_damage)}%{addBOSSspan})
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {parseInt(item.item_base_option.ignore_monster_armor) > 0 ? (
          <div key="guardIgnoreOption">
            <span style={{ color: "white" }}>
              몬스터 방어율 무시: +{item.item_base_option.ignore_monster_armor}%
            </span>
          </div>
        ) : (
          <></>
        )}
        {parseInt(item.scroll_upgrade) +
          parseInt(item.scroll_upgradeable_count) +
          parseInt(item.scroll_resilience_count) >
        0 ? (
          <div key="upgradeCount">
            <span>업그레이드 가능 횟수: {item.scroll_upgradeable_count}</span>{" "}
            <span style={{ color: "rgb(243,195,4)" }}>
              (복구 가능 횟수: {item.scroll_resilience_count})
            </span>
          </div>
        ) : (
          <></>
        )}

        {item.golden_hammer_flag === "적용" ? (
          <div key="goldenHammerFlag">황금망치 재련 적용</div>
        ) : (
          <></>
        )}

        {parseInt(item.cuttable_count) < 11 ? (
          <div key="cuttableCount">
            <span style={{ color: "rgb(243,195,4)" }}>
              가위 사용 가능 횟수: {item.cuttable_count}회
            </span>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const PotentialOption = (item: ItemEquipment) => {
    if (item.potential_option_grade === null) {
      return <></>;
    }
    let gradeIcon = (grade: string) => {
      const getGradeStyle = (
        backgroundColor: string,
        color: string,
        shadow: string
      ): CSSProperties => ({
        display: "inline-block",
        width: "24px",
        textAlign: "center",
        backgroundColor,
        color,
        textShadow: `-1px 0 ${shadow}, 0 1px ${shadow},1px 0 ${shadow},0 -1px ${shadow}`,
        borderRadius: "3px",
        border: "2px solid white",
        fontSize: "12px",
        fontWeight: "bold",
      });

      let gradeLabel = "";
      let gradeColor = "";
      let gradeStyle: CSSProperties = {};

      switch (grade) {
        case "레어":
          gradeLabel = "R";
          gradeColor = "skyblue";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
        case "에픽":
          gradeLabel = "E";
          gradeColor = "violet";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
        case "유니크":
          gradeLabel = "U";
          gradeColor = "yellow";
          gradeStyle = getGradeStyle(gradeColor, "black", "white");
          break;
        case "레전드리":
          gradeLabel = "L";
          gradeColor = "yellowgreen";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
      }
      return (
        <div>
          <span style={gradeStyle}>{gradeLabel}</span>{" "}
          <span style={{ color: gradeColor }}>잠재옵션</span>
        </div>
      );
    };

    return (
      <>
        <hr />
        {gradeIcon(item.potential_option_grade)}
        <div>
          {item.potential_option_1
            ?.replace(/\(10초 이하는 10%감소, 5초 미만으로 감소 불가\)/g, "")
            .replace(/\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g, "")}
        </div>
        <div>
          {item.potential_option_2
            ?.replace(/\(10초 이하는 10%감소, 5초 미만으로 감소 불가\)/g, "")
            .replace(/\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g, "")}
        </div>
        <div>
          {item.potential_option_3
            ?.replace(/\(10초 이하는 10%감소, 5초 미만으로 감소 불가\)/g, "")
            .replace(/\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g, "")}
        </div>
      </>
    );
  };

  const AdditionalPotentialOption = (item: ItemEquipment) => {
    if (item.additional_potential_option_grade === null) {
      return <></>;
    }
    let gradeIcon = (grade: string) => {
      const getGradeStyle = (
        backgroundColor: string,
        color: string,
        shadow: string
      ): CSSProperties => ({
        display: "inline-block",
        width: "24px",
        textAlign: "center",
        backgroundColor,
        color,
        textShadow: `-1px 0 ${shadow}, 0 1px ${shadow},1px 0 ${shadow},0 -1px ${shadow}`,
        borderRadius: "3px",
        border: "2px solid white",
        fontSize: "12px",
        fontWeight: "bold",
      });

      let gradeLabel = "";
      let gradeColor = "";
      let gradeStyle: CSSProperties = {};

      switch (grade) {
        case "레어":
          gradeLabel = "R";
          gradeColor = "skyblue";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
        case "에픽":
          gradeLabel = "E";
          gradeColor = "violet";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
        case "유니크":
          gradeLabel = "U";
          gradeColor = "yellow";
          gradeStyle = getGradeStyle(gradeColor, "black", "white");
          break;
        case "레전드리":
          gradeLabel = "L";
          gradeColor = "yellowgreen";
          gradeStyle = getGradeStyle(gradeColor, "white", "black");
          break;
      }
      return (
        <div>
          <span style={gradeStyle}>{gradeLabel}</span>{" "}
          <span style={{ color: gradeColor }}>에디셔널 잠재옵션</span>
        </div>
      );
    };

    return (
      <>
        <hr />
        {gradeIcon(item.additional_potential_option_grade)}
        <div>
          {item.additional_potential_option_1?.replace(
            /\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g,
            ""
          )}
        </div>
        <div>
          {item.additional_potential_option_2?.replace(
            /\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g,
            ""
          )}
        </div>
        <div>
          {item.additional_potential_option_3?.replace(
            /\(10초 이하는 5%감소, 5초 미만으로 감소 불가\)/g,
            ""
          )}
        </div>
      </>
    );
  };

  const SoulOption = (item: ItemEquipment) => {
    if (item.soul_name === null) {
      return <></>;
    }
    return (
      <>
        <hr />
        <span style={{ color: "rgb(243,195,4)" }}>{item.soul_name}</span>
        <br />
        <span>{item.soul_option}</span>
      </>
    );
  };

  return (
    <Modal
      show={showItemModal}
      onHide={CloseModal}
      backdrop={false}
      size={
        item.item_add_option && parseInt(item.item_add_option.boss_damage) > 0
          ? undefined
          : "sm"
      }
    >
      <Modal.Header
        style={{
          backgroundColor: "black",
          color: "white",
          borderBottom: "1px solid black",
          paddingBottom: "0",
        }}
      >
        <Modal.Title
          style={{
            textAlign: "center",
            margin: "auto",
            backgroundColor: "black",
            color: "white",
            fontSize: "17px",
          }}
        >
          <div>{StarForce(item)}</div>
          <div>{ItemNameLabel(item)}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "13px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <hr />
        <div style={{ display: "flex" }}>
          <div style={itemStyle(item)}>
            <img
              src={item.item_icon}
              style={{ margin: "auto", display: "block" }}
            ></img>
          </div>
          <div
            style={{
              margin: "auto",
              marginLeft: "2%",
              verticalAlign: "center",
              textAlign: "left",
            }}
          >
            LEV REQ : {item.item_base_option.base_equipment_level}
          </div>
        </div>
        <hr />
        장비분류 : {item.item_equipment_part}
        {ItemOptionView(item)}
        {PotentialOption(item)}
        {AdditionalPotentialOption(item)}
        {SoulOption(item)}
        <hr />
      </Modal.Body>

      <Modal.Footer
        style={{
          backgroundColor: "black",
          color: "white",
          borderTop: "1px solid black",
          paddingTop: "0",
        }}
      >
        <Button
          variant="secondary"
          onClick={CloseModal}
          style={{ margin: "0" }}
        >
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemCard;
