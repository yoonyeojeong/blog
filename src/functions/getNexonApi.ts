import React, { useEffect, useState } from "react";

// 식별자 값
// 2bc40a8e8eca0a4531460428733c0a31
const API_KEY =
  "test_381cc05b96e9ee7a1875549818bf3685bd2f4d3940406a80165bcfd6df0b2afbc650abfc9d0f6a57bc6b7bdf91c32093";
const [characterOcid, setCharacterOcid] = useState<string>("");
const [urlString, setUrlString] = useState<string>("");
const [characterName, setCharacterName] = useState<string>("");

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

useEffect(() => {
  setCharacterCode();
}, [characterName]);

export default function getNexonApi(url: string, func: Function) {
  fetch(url, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => func(data))
    .catch((error) => console.error(error));
}
