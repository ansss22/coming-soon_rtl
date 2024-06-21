import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo1.png";
const Header = () => {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date(
      new Date().setFullYear(
        new Date().getFullYear() + 1,
        new Date().getMonth() - 6,
        1
      )
    );

    const updateCountdown = () => {
      const now = new Date();
      const diff = countDownDate - now;

      const calculatedMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const calculatedDays = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const calculatedHours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor((diff % (1000 * 60)) / 1000);

      setMonths(calculatedMonths);
      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="mobile_header section__padding ">
      <div className="mobile_header-logo">
        <img src={logo} />
      </div>
      <div className="mobile_header-content">
        <h1 className="gradient__text">أنتظروا إنطلاق التطبيق قريباً</h1>
        <p>هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُست</p>
      </div>
      <div className="mobile_header-counter">
        <div className="counter">
          <span className="count-amount" id="months">
            {months}
          </span>
          <span className="count-period">أشهر</span>
        </div>
        <div className="counter">
          <span className="count-amount" id="days">
            {days}
          </span>
          <span className="count-period">أيام</span>
        </div>
        <div className="counter">
          <span className="count-amount" id="hours">
            {hours}
          </span>
          <span className="count-period">ساعات</span>
        </div>
        <div className="counter">
          <span className="count-amount" id="minutes">
            {minutes}
          </span>
          <span className="count-period">دقائق</span>
        </div>
        <div className="counter">
          <span className="count-amount" id="seconds">
            {seconds}
          </span>
          <span className="count-period">ثواني</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
