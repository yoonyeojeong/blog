import {
  initialValue,
  CharacterInfo,
  CharacterBasicInfo,
  HexaCoreEquipment,
  UnionRankingInfo,
  FinalStat,
  ItemEquipmentInfo,
} from "./DTO/CharacterInfo";
const API_KEY = process.env.REACT_APP_NEXON_API_KEY;
let day: Date = new Date();
day.setDate(day.getDate() - 1);

const year = day.getFullYear();
const month = (day.getMonth() + 1).toString().padStart(2, "0");
const date = day.getDate().toString().padStart(2, "0");

let yesterday: string = `${year}-${month}-${date}`;

async function getOcid(characterName: string): Promise<string> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/id?character_name=${encodeURIComponent(
        characterName
      )}`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );
    if (response.status === 429) {
      return "TooManyRequests";
    }

    const data = await response.json();
    return data.ocid;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getCharacterBasic(ocid: string): Promise<CharacterBasicInfo> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${ocid}&date=${yesterday}`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getCharacterHexamatrix(
  ocid: string
): Promise<HexaCoreEquipment[]> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/hexamatrix?ocid=${ocid}&date=${yesterday}`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );
    const result: { character_hexa_core_equipment: HexaCoreEquipment[] } =
      await response.json();
    return result.character_hexa_core_equipment;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getUnionRanking(
  ocid: string,
  world: string
): Promise<UnionRankingInfo> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/union?date=2024-02-18&world_name=${encodeURIComponent(
        world
      )}&ocid=${ocid}&page=1`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getStatInfo(ocid: string): Promise<FinalStat[]> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/stat?ocid=${ocid}&date=${yesterday}`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );
    const result: { final_stat: FinalStat[] } = await response.json();
    return result.final_stat;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getItemEquipmentInfo(ocid: string): Promise<ItemEquipmentInfo> {
  try {
    const response = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/item-equipment?ocid=${ocid}&date=${yesterday}`,
      {
        headers: {
          "x-nxopen-api-key": API_KEY,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getTotalMapleInfo(
  characterName: string
): Promise<CharacterInfo> {
  console.log("getTotalMapleInfo 요청보냄");
  const ocid = await getOcid(characterName);
  const basicInfo = await getCharacterBasic(ocid);
  const hexamatrix = await getCharacterHexamatrix(ocid);
  const unionRanking = await getUnionRanking(ocid, basicInfo.world_name);
  const finalStat = await getStatInfo(ocid);
  const itemEquipment = await getItemEquipmentInfo(ocid);

  return {
    ...initialValue,
    ocid,
    character_name: basicInfo.character_name,
    world_name: basicInfo.world_name,
    character_gender: basicInfo.character_gender,
    character_class: basicInfo.character_class,
    character_class_level: basicInfo.character_class_level,
    character_level: basicInfo.character_level,
    character_exp: basicInfo.character_exp,
    character_exp_rate: basicInfo.character_exp_rate,
    character_guild_name: basicInfo.character_guild_name,
    character_image: basicInfo.character_image,
    character_hexa_core_equipment: hexamatrix,
    unionRanking: unionRanking,
    final_stat: finalStat,
    item_equipment: itemEquipment,
  };
}

export default getTotalMapleInfo;
