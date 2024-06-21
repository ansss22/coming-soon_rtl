import React from "react";
import womenImage from "../../assets/women.png";
import "./possibility.css";

const Possibility = () => (
  <div className="mobile__possibility section__padding" id="possibility">
    <div className="mobile__possibility-image">
      <img src={womenImage} alt="possibility" />
    </div>
    <div className="mobile__possibility-content">
      <h4>قدّم طلب الوصول المبكر للبدء</h4>
      <h1 className="gradient__text">استمتع بتجربة لعب<br /> لم تعهدها من قبل</h1>
      <p>
        مع رسومات مذهلة، وقصة جذابة، وإمكانيات للعب الجماعي، تقدم لعبتنا تجربة
        لعب مثيرة ومشوّقة ستحتفظ بك مستمتعًا لساعات طويلة.
      </p>
      <h4>قدّم طلب الوصول المبكر للبدء</h4>
    </div>
  </div>
);

export default Possibility;
