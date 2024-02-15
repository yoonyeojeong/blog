function fetchWithCallback(url: string, callback: (data: any) => void) {
  const API_KEY = process.env.REACT_APP_NEXON_API_KEY;

  fetch(url, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

export function fetchData(url: string, callback: (data: any) => void) {
  fetchWithCallback(url, callback);
}

export function fetchBasicInfo(
  characterOcid: string,
  date: string,
  callback: (data: any) => void
) {
  let url = `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${characterOcid}&date=${date}`;
  fetchWithCallback(url, callback);
}

export function fetchHexaInfo(
  characterOcid: string,
  date: string,
  callback: (data: any) => void
) {
  let url = `https://open.api.nexon.com/maplestory/v1/character/hexamatrix?ocid=${characterOcid}&date=${date}`;
  fetchWithCallback(url, callback);
}

export function fetchStatInfo(
  characterOcid: string,
  date: string,
  callback: (data: any) => void
) {
  let url = `https://open.api.nexon.com/maplestory/v1/character/stat?ocid=${characterOcid}&date=${date}`;
  fetchWithCallback(url, callback);
}

export function fetchUnionInfo(
  characterOcid: string,
  date: string,
  worldUrlString: string,
  callback: (data: any) => void
) {
  let url = `https://open.api.nexon.com/maplestory/v1/ranking/union?date=${date}&world_name=${worldUrlString}&ocid=${characterOcid}&page=1`;
  fetchWithCallback(url, callback);
}
