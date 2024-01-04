import React from "react";

function Cs001() {
  return (
    <div className="StudyMain">
      <h1 style={{ fontWeight: "bold", marginBottom: "15px" }}>
        Json.NET <small>(Newtonsoft)</small>
      </h1>
      <div style={{ textAlign: "left" }}>
        <p>
          <code>Newtonsoft.Json</code>은 <code>JObject</code>,{" "}
          <code>JToken</code>등의 전용 계층형 형식을 사용한다. <br />
          <code>JsonElement</code>는 검색하고 열거할 수 있으며,{" "}
          <code>JsonElement</code>를 사용하여 JSON요소를 .NET 형식으로 구체화할
          수 있다.
        </p>
        <h3>JObject</h3>
        <div style={{ paddingLeft: "5px", marginBottom: "30px" }}>
          · JSON Object이다. <br />· <code>JObject</code>자체가 name값을 가질 수
          없다. <br />· (Key, Value) 쌍을 가진다. Value : <code>JToken</code>
          타입이며 대부분의 premitive type들과 DateTime, TiemSpan, Uri값을 직접
          대입 가능하며, 기타 Object도 입력 가능하다. <br />
          <p style={{ paddingLeft: "15px" }}>
            ※ value에 다른 JObject나 JArray를 넣을 수 있다.
          </p>
        </div>
        <h3>JArray</h3>
        <div style={{ paddingLeft: "5px", marginBottom: "30px" }}>
          · JSON Array이다. <br />· <code>JObject</code>와 특징이 거의
          비슷하지만 key없이 value들을 가지고 있다.
        </div>
        <div style={{ marginBottom: "30px" }}>
          즉, <code>JObject</code>나 <code>JArray</code> 자체는{" "}
          <code>name</code>을 가질 수 없으나, 다른 <code>JObject</code>에{" "}
          <code>value</code>로 소속 될 경우에는 <code>key</code>값을 가져야
          하며, 다른 <code>JArray</code>에 소속될 경우에는 <code>key</code>값
          없이 입력된다.
        </div>

        <h3>JObject 사용법</h3>
        <div style={{ paddingLeft: "5px", marginBottom: "30px" }}>
          · 생성 : <code>new JObject()</code> <br />· Element 추가 :{" "}
          <code>.add(key, value)</code>
        </div>
        <h4>Example</h4>
        <div
          style={{
            backgroundColor: "#EFEFEF",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <strong>var</strong> json = new <strong>JObject()</strong>; <br />
          json.Add("id", "Luna"); <br />
          json.Add("name", "Silver"); <br />
          json.Add("age", 19); <br />
          <br />
          Console.WriteLine(json.ToString());
        </div>
        <div
          style={{
            backgroundColor: "#EFEFEF",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          &#123; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"id":"Luna", <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"name":"Silver", <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"age":19
          <br /> &#125;
        </div>

        <div style={{ marginBottom: "30px" }}></div>
        <h5>참고문서</h5>
        <a
          href="https://devstarsj.github.io/development/2016/06/11/CSharp.NewtonJSON/"
          target="_blank"
        >
          DevNote Blog
        </a>
        <br />
        <a
          href="https://learn.microsoft.com/ko-kr/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft?pivots=dotnet-8-0"
          target="_blank"
        >
          MS Document
        </a>
      </div>
    </div>
  );
}

export default Cs001;
