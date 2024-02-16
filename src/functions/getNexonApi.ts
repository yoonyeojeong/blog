const baseUrl = "https://open.api.nexon.com/maplestory/v1/";

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

interface FetchInfoParams {
  category: string;
  type: string;
  characterOcid: string;
  date: string;
  callback: (data: any) => void;
  additionalParams?: Record<string, string>;
}

export function fetchInfo({
  category,
  type,
  characterOcid,
  date,
  callback,
  additionalParams = {},
}: FetchInfoParams) {
  let url = `${baseUrl}${category}/${type}?ocid=${characterOcid}&date=${date}`;
  for (const [param, value] of Object.entries(additionalParams)) {
    if (value) {
      url += `&${param}=${value}`;
    }
  }

  fetchWithCallback(url, callback);
}
