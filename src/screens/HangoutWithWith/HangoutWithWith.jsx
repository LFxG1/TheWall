import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HangoutWithWith = () => {
  return (
    <div className="hangout-with-with">
      <div className="overlap-group-wrapper-2">
        <div className="overlap-group-4">
          <div className="rectangle-7" />

          <div className="frame-20">
            <div className="frame-21">
              <img
                className="online-friends-cuate"
                alt="Online friends cuate"
                src="/img/online-friends-cuate.png"
              />

              <div className="frame-22">
                <p className="span-wrapper">
                  <span className="text-wrapper-13">
                    Hangout with with Friends
                  </span>
                </p>

                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                  vitae quis quam augue quam a.
                </p>

                <Link className="frame-23" to="/sign-in">
                  <div className="rectangle-8" />

                  <div className="rectangle-8" />

                  <div className="rectangle-8" />

                  <div className="rectangle-9" />
                </Link>
              </div>
            </div>

            <div className="frame-24">
              <Link className="outlined-text-only" to="/sign-up">
                <div className="outlined-labeled">
                  <div className="text-data">Join Now</div>
                </div>
              </Link>

              <Link className="text-wrapper-14" to="/sign-in">
                Sign in
              </Link>
            </div>
          </div>

          <div className="status-bar-3">
            <img className="battery-3" alt="Battery" src="/img/battery.png" />

            <img className="wifi-3" alt="Wifi" src="/img/wifi.svg" />

            <img
              className="cellular-connection-3"
              alt="Cellular connection"
              src="/img/cellular-connection.svg"
            />

            <div className="time-style-3">
              <div className="text-wrapper-15">9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
