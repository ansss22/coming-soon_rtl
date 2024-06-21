import React from "react";
import logo from "../../assets/logo1.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">هل ترغب في تجربة اللعبة قبل الآخرين؟</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>قدّم طلب الوصول المبكر</p>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>روابط</h4>
        <p>عنّا</p>
        <p>وسائل التواصل الاجتماعي</p>
        <p>عدادات</p>
        <p>اتصل</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>شركة</h4>
        <p>الشروط والأحكام</p>
        <p>سياسة الخصوصية</p>
        <p>اتصل</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>تواصل معنا</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p> 2024@ أنس العمراني </p>
    </div>
  </div>
);

export default Footer;
