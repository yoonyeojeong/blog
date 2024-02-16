import React, { useCallback, useEffect, useState } from "react";
import "../css/ProfileAbout.css";
import Photo from "../files/photo.jpg";
import { Container, Table, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import clipboardCopy from "clipboard-copy";

interface ActivityRowProps {
  activityName: string;
  organization: string;
  children?: React.ReactNode;
  onIncrement?: () => void;
}
function ProfileAbout() {
  const [activitiesCount, setActivitiesCount] = useState<number>(0);
  const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const ParentComponent: React.FC = () => {
    const incrementActivitiesCount = useCallback(() => {
      setActivitiesCount((count) => count + 1);
    }, []);

    return (
      <div>
        <ActivityRow
          activityName="팀 화이트"
          organization="한국소비자 포럼"
          onIncrement={incrementActivitiesCount}
        ></ActivityRow>
      </div>
    );
  };

  const ActivityRow: React.FC<ActivityRowProps> = ({
    activityName,
    organization,
    children,
    onIncrement,
  }) => {
    useEffect(() => {
      if (onIncrement) {
        onIncrement();
      }
    }, [onIncrement]);

    return (
      <>
        <td style={{ width: "20%", verticalAlign: "top" }}>
          <strong title="활동명">{activityName}</strong>
          <br />
          <span title="주최기관">{organization}</span>
        </td>
        <td title="활동내용" style={{ width: "65%" }}>
          {children}
        </td>
      </>
    );
  };

  const copyToClipboard = (text: string) => {
    clipboardCopy(text);
    alert("클립보드에 복사되었습니다.");
  };

  function calculateAge(birthdate: Date, currentDate: Date): number {
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInMillis = currentDate.getTime() - birthdate.getTime();
    return Math.floor(ageInMillis / msInYear);
  }

  const today: Date = new Date(); // 현재 날짜와 시간
  const birthdate: Date = new Date("1992-08-14"); // 생일

  const age: number = calculateAge(birthdate, today);

  return (
    <Container style={{ textAlign: "left", fontFamily: "나눔고딕" }}>
      <h2>기본 프로필</h2>
      <DivStyle>
        <img src={Photo} alt="" style={{ width: "150px", margin: "2%" }} />
        <Table
          bordered={false}
          style={{ minWidth: "500px", margin: "0", verticalAlign: "middle" }}
        >
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <strong>이름</strong>
              </td>
              <td>윤여정 (Yoon Yeojoeng, 尹汝正)</td>
            </tr>
            <tr>
              <td>
                <strong>생년월일</strong>
              </td>
              <td>1992.08.14 (만 {age}세)</td>
            </tr>
            <tr>
              <td>
                <strong>E-mail</strong>
              </td>
              <td>
                uoi798@gmail.com{" "}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => copyToClipboard("uoi798@naver.com")}
                >
                  복사
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </DivStyle>
      <br />
      <h2>학력정보</h2>
      <Table
        bordered={false}
        style={{ margin: "2% auto", verticalAlign: "middle" }}
      >
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={3} style={{ textAlign: "center" }}>
              학력
            </td>
            <td>
              <strong> 인하대학교 (4년제)</strong> <br />
              <span>전자공학과</span>
            </td>
            <td style={{ textAlign: "right", verticalAlign: "top" }}>
              2011.03 ~ 2018.08 (졸업)
            </td>
          </tr>
          <tr>
            <td>
              <strong>대전 대신고등학교</strong> <br />
              <span>이과계열</span>
            </td>
            <td style={{ textAlign: "right", verticalAlign: "top" }}>
              2008.03 ~ 2011.02 (졸업)
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h2>활동 / 경험</h2>
      <Table style={{ margin: "2% auto", verticalAlign: "middle" }}>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td
              rowSpan={activitiesCount}
              style={{ width: "15%", textAlign: "center" }}
            >
              대내외활동
            </td>

            <ActivityRow
              activityName="팀 화이트 (6, 7기)"
              organization="한국소비자 포럼"
            >
              한국 소비자포럼에서 주관하는 바른 소비자 활동으로, <br />
              6기에서는 브랜드 대상 후보 선정(소비자 평가단)을 하는 과제에서{" "}
              <br />
              발표 및 자료조사를 맡았고 7기에서는 CSR마케팅 공모전에
              <br />
              참가하여(입선) 메인 주제 제안 및 발표를 맡았습니다.
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="어반케어" organization="이웃사랑 UCM">
              인천광역시 대학생 봉사단입니다. <br /> 우수 할동 단원으로
              선정되기도 하였습니다.
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="감성기타" organization="교내소모임">
              교내 기타연주 소모임으로 부회장을 맡았으며, <br /> 주로 모임장소
              기안을 잡는 역할을 하였습니다.
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="활동명" organization="활동기관">
              활동내용
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="활동명" organization="활동기관">
              활동내용
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="활동명" organization="활동기관">
              활동내용
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="활동명" organization="활동기관">
              활동내용
            </ActivityRow>
          </tr>
          <tr>
            <ActivityRow activityName="활동명" organization="활동기관">
              활동내용
            </ActivityRow>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ProfileAbout;
