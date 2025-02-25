import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const FirstPage = () => {
  return (
    <div className="first-page">
      <div className="overlap-wrapper">
        <div className="overlap-5">
          <div className="rectangle-4" />

          <div className="frame-16">
            <img
              className="online-world-cuate"
              alt="Online world cuate"
              src="/img/online-world-cuate.png"
            />

            <div className="frame-17">
              <div className="union-wrapper">
                <img className="union" alt="Union" src="/img/union.svg" />
              </div>

              <Link className="frame-18" to="/find-friends-u38-get-inspiration">
                <div className="overlap-group-3">
                  <img
                    className="group-18"
                    alt="Group"
                    src="/img/group-2.png"
                  />

                  <img className="union-2" alt="Union" src="/img/union-1.svg" />
                </div>
              </Link>
            </div>

            <Link className="frame-19" to="/find-friends-u38-get-inspiration">
              <div className="rectangle-5" />

              <div className="rectangle-6" />

              <div className="rectangle-6" />

              <div className="rectangle-6" />
            </Link>
          </div>

          <div className="status-bar-2">
            <img className="battery-2" alt="Battery" src="/img/battery.png" />

            <img className="wifi-2" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-2"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-2">
              <div className="text-wrapper-12">9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
