import React from "react";
import Profile from "../files/profile.jpeg";

function TempPage() {
  return (
    <div>
      <div>프로필은 추후 업데이트 됩니다</div>
      <br />
      <img src={Profile} alt="" />
    </div>
  );
}

export default TempPage;
