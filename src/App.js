import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";

function App() {
  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMinutes, setMinutes] = useState("00");
  const [timerSeconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("January 1, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h1> We're launching soon</h1>
        </div>
        <div>
          <section>
            <div>
              <div className="empty-div"></div>
              <div>
                <p>{timerDays}</p>
              </div>
            </div>
            <p>
              <small>Days</small>
            </p>
          </section>
          <section>
            <div>
              <div className="empty-div"></div>
              <div>
                <p>{timerHours}</p>
              </div>
            </div>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <section>
            <div>
              <div className="empty-div"></div>
              <div>
                <p>{timerMinutes}</p>
              </div>
            </div>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <section>
            <div>
              <div className="empty-div"></div>
              <div>
                <p>{timerSeconds}</p>
              </div>
            </div>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </div>
      <footer>
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={pinterest} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
