import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "ستكشف ميزات اللعبة وطريقة اللعب بالتفصيل.",
    text: "احصل على لمحة عن الرسوم البصرية المذهلة وطريقة اللعب الغامرة للعبة من خلال لقطات الشاشة والوصف لدينا.",
  },
  {
    title: "افتح مستويات جديدة وتحديات مثيرة أثناء تقدمك في اللعبة.",
    text: "عش الإثارة مع الآليات الفريدة للعبة والقصة المشوقة.",
  },
  {
    title: "تنافس مع الأصدقاء وتسلق لوائح الصدارة لتحقيق المجد النهائي.",
    text: "انضم إلى مجتمعنا من اللاعبين المتحمسين وشارك تجاربك.",
  },
];

const Features = () => (
  <div className="mobile__features section__padding" id="features">
    <div className="mobile__features-heading">
      <h1 className="gradient__text">
        اكتشف العالم المثير للعبتنا من خلال هذا الدليل خطوة بخطوة
      </h1>
      <p>اطلب الوصول المبكر للبدء.</p>
    </div>
    <div className="mobile__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
